<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quote;
use App\Models\Visitor;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Models\Product;
use App\Models\Country;

use App\Models\ImgMedicalBaseRate;
use App\Models\ImgTripBaseRate;
use App\Models\ImgTripDailyRate;

use App\Models\TrawickDailyRate;
use App\Models\TrawickTripcostRate;
use App\Models\TrawickAnnualRate;
use App\Models\TrawickTrekerRate;
use App\Models\TrawickTripDelayRate;
use App\Models\TrawickAddRate;
use App\Models\TrawickGpr;

use App\Models\TiRate;

use App\Models\GeoblueTrekkerRate;
use App\Models\GeoblueVoyagerRate;
use App\Models\GeoblueTripProtectorRate;

use App\Models\TravelsafeRate;

class QuoteController extends Controller
{
    public function indexQuotes(Request $request){
        $rows = Visitor::when($request->input('search'), function ($query, $search) {
                $query->where('id', 'LIKE', '%'.$search.'%')
                    ->orWhere('session', 'LIKE', '%'.$search.'%');
            })
            ->when($request->input('date_sort'), function ($query, $sort) {
                $query->orderBy('created_at', $sort);
            })
            ->when($request->input('device_filter'), function ($query, $device) {
                $query->whereIn('device', $device);
            })
            ->when($request->input('q_user_filter'), function ($query, $user) {
                if(!in_array('Customer', $user))
                    $query->whereHas('quote', function ($query) {
                        $query->whereHas('order');
                    });
                if(in_array('Lead', $user))
                    $query->whereHas('quote', function ($query) {
                        $query->whereNotNull('email')->whereDoesntHave('order');
                    });
                    
            })
            ->paginate(10)
            ->withQueryString()
            ->toArray();

        $month_to_date_visits = Visitor::where('created_at', '>=', now()->startOfMonth())->count();
        $month_to_date_quotes = Quote::where('created_at', '>=', now()->startOfMonth())->count();

        $last_month_visits = Visitor::where('created_at', '>=', now()->subMonth()->startOfMonth())
            ->where('created_at', '<=', now()->subMonth()->endOfMonth())
            ->count();
        
        $last_month_quotes = Quote::where('created_at', '>=', now()->subMonth()->startOfMonth())
            ->where('created_at', '<=', now()->subMonth()->endOfMonth())
            ->count();

        $last_30_days_visits = Visitor::where('created_at', '>=', now()->subDays(30))->count();
        $last_30_days_quotes = Quote::where('created_at', '>=', now()->subDays(30))->count();

        $week_to_day_visits = Visitor::where('created_at', '>=', now()->startOfWeek())->count();
        $week_to_day_quotes = Quote::where('created_at', '>=', now()->startOfWeek())->count();

        $last_7_days_visits = Visitor::where('created_at', '>=', now()->subDays(7))->count();
        $last_7_days_quotes = Quote::where('created_at', '>=', now()->subDays(7))->count();

        $quotes = Quote::count();
        $purchases = Order::count();
        $leads = Order::whereNotNull('email')->count();
        $exit = $quotes - $purchases;

        $repeat_lead = 0;
        $repeat_customer = 0;

        $all = Quote::whereNotNull('coverage_type')->count();
        $medical = Quote::where('coverage_type', 'basic')->count() / $all * 100;
        $comprehensive = Quote::where('coverage_type', 'comprehensive')->count() / $all * 100;

        $all = Quote::whereNotNull('qtype')->count();
        $individual = Quote::where('qtype', 'individual')->count() / $all * 100;
        $family = Quote::where('qtype', 'family')->count() / $all * 100;
        $multiFamily = Quote::where('qtype', 'multi-family')->count() / $all * 100;

        return Inertia::render('Quotes/Index', [
            'rows' => $rows,
            'filters' => $request->all(),
            'stats' => [
                'total_visits' => [
                    'month_to_date' => $month_to_date_visits,
                    'last_month' => $last_month_visits,
                    'last_30_days' => $last_30_days_visits,
                    'week_to_day' => $week_to_day_visits,
                    'last_7_days' => $last_7_days_quotes,
                ],
                'total_quotes' => [
                    'month_to_date' => $month_to_date_quotes,
                    'last_month' => $last_month_quotes,
                    'last_30_days' => $last_30_days_quotes,
                    'week_to_day' => $week_to_day_quotes,
                    'last_7_days' => $last_7_days_quotes,
                ],
                'success_rate' => [
                    'exit' => $exit,
                    'lead' => $leads,
                    'purchase' => $purchases,
                ],
                'repeat' => [
                    'lead' => $repeat_lead,
                    'customer' => $repeat_customer
                ],
                'coverage_type' => [
                    'medical' => $medical,
                    'comprehensive' => $comprehensive
                ],
                'q_type' => [
                    'individual' => $individual,
                    'family' => $family,
                    'multi_family' => $multiFamily
                ]
            ]
        ]);
    }

    public function createQuotes(){
        return Inertia::render('Quotes/Create');
    }

    public function store(Request $request){
        $request = Quote::find($request['quote_id'])->attributesToArray();
        $request['travelers'] = json_decode($request['travelers']);
        $products = Product::where([
            'status' => true,
        ])->get();
        
        $products = $products->filter(function ($product) use($request){
            $detail = $product->detail;
            if(!$product->provider->status) return false;
            switch($product->provider->slug){
                case 'img':
                    $states = json_decode($detail->states);
                    if($detail->type == 'trip'){
                        if($detail->states_flag){
                            return in_array($request['state'], $states);
                        }else{
                            return !in_array($request['state'], $states);
                        }
                    }else{
                        if($product->country_type == 'inbound'){
                            return $request['destination'][0] == 'US';
                        }else{
                            return $request['destination'][0] != 'US';
                        }
                    }
                    break;
                case 'trawick':
                    if($product['type'] == 'basic'){
                        if($detail['country_type'] == 'inbound' && $request['destination'][0] == 'US' && $request['country'] != 'US') 
                            return true;
                        else if($detail['country_type'] == 'international' && $request['destination'][0] != 'US' && ($request['country'] != 'US') && ($request['country'] != $request['destination']))
                                return true;
                        else if($detail['country_type'] == 'outbound' && $request['country'] == 'US' && $request['country'] != $request['destination'])
                            return true;
                        else
                            return false;
                    }else if($detail['type'] == 'trip' && $request['country'] == 'US'){
                        return true;
                    }else if($detail['type'] == 'vacation_rental' && $request['country'] == 'US'){
                        return true;
                    }else{
                        return false;
                    }

                    break;
                case 'travel_insured':
                    if($request['country'] == 'US') return true;
                    return false;
                    break;
                case 'geo_blue':
                    return true;
                    break;
                case 'travel_safe':
                    return true;
                    break;
                case 'go_ready':
                    return true;
                    break;
                default:
                    return true;
            }
        });

        $products = $products->map(function ($product) use($request){
            $product['price'] = $this->calPrice($product, $request);
            return $product;
        });

        return response()->json($products);
    }

    public function calPrice($product, $form) {
        $travelers = $form['travelers'];
        $count = count($travelers);
        $leaveDate = Carbon::parse($form['from']);
        $returnDate = Carbon::parse($form['to']);
        $days = $leaveDate->diffInDays($returnDate) + 1;
        $months = $leaveDate->diffInMonths($returnDate) + 1;
        $detail = $product->detail;
        $price = 0;

        foreach ($travelers as $traveler) {
            $age = $traveler->age;
            $tripCost = $traveler->tripcost;

            switch($product->provider->slug){
                case 'trawick':
                    $type = $detail['type'];
                    $rate_type = $detail['rate_type'];
                    $trawick_product_id = $detail['id'];
                    if($type == 'medical'){
                        $where = [
                            ['trawick_product_id', '=', $trawick_product_id],
                            ['age_min', '<', $age ],
                            ['age_max', '>', $age ],
                        ];
                        if(array_key_exists('policy_max', $form)) $where[] = ['policy_max', '=', $form['policy_max']];
                        if(array_key_exists('deductible', $form)) $where[] = ['deductible', '=', $form['deductible']];
                        $row = TrawickDailyRate::where($where)->first();
    
                        $daily_rate = $row ? $row->daily_rate : 0;
                        $daily_rate_rate = 1;
    
                        if(array_key_exists('trip_delay', $form)){
                            $price += [2000 => 0, 4000 => 8.50, 7000 => 14.00][$form['trip_delay']];
                        }
                        if(array_key_exists('add', $form)){
                            $price += [25000 => 0, 50000 => 0.25, 100000 => 0.50, 250000 => 1.75, 500000 => 4.00][$form['add']] * $days;
                        }
                        if(array_key_exists('home_country', $form)){
                            if($form['home_country']) $daily_rate_rate += 0.10;
                        }
                        if(array_key_exists('sports', $form)){
                            if($form['sports'] != 'no') $daily_rate_rate += 0.20;
                            if($form['sports'] == 'class2') $price += 26 * $months;
                        }
                        $price += $daily_rate * $daily_rate_rate * $days;
                    }else if($type == 'trip' && $rate_type == 'trip_a'){
                        $row = TrawickTripcostRate::where([
                            ['trawick_product_id', '=', $trawick_product_id],
                            ['age_min', '<', $age ],
                            ['age_max', '>', $age ],
                            ['cost_min', '<=', $tripCost],
                            ['cost_max', '>=', $tripCost]
                        ])->first();
        
                        if($row) {
                            $price += in_array($form['state'], ['AK', 'MO', 'PA']) ? $row->rate1 : $row->rate2;
                            if($days > 30) $price += ( 4 * ($days - 30) );
                        }
                    }else if($type == 'trip' && $rate_type == 'trip_b'){
                        $tripCost = max($tripCost, $age > 35 ? 2000 : ($age > 21 ? 1500 : ($age > 8 ? 1000 : 750)));
                        
                        $ages = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
                        $age = max(array_filter($ages, fn ($i) => $age >= $i));
                        
                        $destination = Country::where('iso', $form['destination'][0])->first() ? Country::where('iso', $form['destination'][0])->first()->area1: '';
                        
                        $state = in_array($form['state'], ['RI', 'MO', 'AK']) ? 'RI' : (in_array($form['state'], ['PA', 'NH']) ? $request['state'] : 'WY');
                        
                        $row = TrawickGpr::where([
                            'product_id' => $trawick_product_id,
                            'age' => $age,
                            'days' => $days,
                            'destination' => $destination,
                            'state' => $state,
                        ])->first();
                            
                        if($row){
                            $price = $tripCost * $row->percent;
                        } 
        
                    }else if($type == 'vacation_rental'){
                        $price = $tripCost * 7 / 100;
                    }else if($rate_type == 'annual'){
                        $rate = TrawickAnnualRate::where('trawick_product_id', $trawick_product_id)->first();
                        if($rate) $price = $rate->rate;
                    }else if($rate_type == 'treker'){
                        $row = TrawickTrekerRate::where('trawick_product_id', $trawick_product_id)->first();
                        if($row) $price = ( $days > 30 ? $row->rate2 : $row->rate1 ) + 30;
                    }
                    break;
                case 'travel_insured':
                    $ti_product_id = $detail['id'];
                    $row = TiRate::where([
                        ['ti_product_id', '=', $ti_product_id],
                        ['age_min', '<=', $age ],
                        ['age_max', '>=', $age ],
                        ['trip_cost_min', '<=', $tripCost],
                        ['trip_cost_max', '>=', $tripCost]
                    ])->first();
                    if($row) $price = $row->rate;
                    break;
                case 'geo_blue':
                    $geoblue_product_id = $detail['id'];
                    $mainProduct = $detail['product'];
                    if($mainProduct == 'Trekker'){
                        $row = GeoblueTrekkerRate::where([
                            ['geoblue_product_id', '=', $geoblue_product_id],
                            ['age_min', '<=', $age],
                            ['age_max', '>=', $age]
                        ])->first();
                        if($row) $price = $row->rate;
                    }else if($mainProduct == 'Voyager'){
                        $row = GeoblueVoyagerRate::where([
                            ['geoblue_product_id', '=', $geoblue_product_id],
                            ['age_min', '<=', $age],
                            ['age_max', '>=', $age]
                        ])->first();
                        if($row) {
                            if($days > $detail->base_days){
                                $price = $row->rate * ( $days + 1 );
                            }else{
                                $price = $row->rate * ( $product->base_days + 1 );
                            }
                        };
                    }else if($mainProduct == 'TripProtector'){
                        $tripCost = 500 * (int)($tripCost/500);
                        $row = GeoblueTripProtectorRate::where([
                            ['geoblue_product_id', '=', $geoblue_product_id],
                            ['age_min', '<=',  $age],
                            ['age_max', '>=',  $age],
                            ['trip_cost_min', '=', $tripCost]
                        ])->first();
        
                        if($row){
                            if($days > $detail->base_days){
                                if($row){
                                    $price = $row->base_rate + $row->daily_rate * ($days - $product->base_days);
                                } 
                            }else{
                                $price = $row->base_rate;
                            }
                        }
                    }
                    break;
                case 'img':
                    $img_product_id = $detail['id'];
                    $type = $detail['type'];
                    if($type == 'trip'){
                        $tripCost = 500 * (($tripCost / 500) + (($tripCost % 500) ? 1 : 0));
                        $row = ImgTripBaseRate::where([
                            ['img_product_id', '=', $img_product_id],
                            ['age_min', '<=',  $age],
                            ['age_max', '>=',  $age],
                            ['trip_cost', '=', $tripCost]
                        ])->first();
                        if($row){
                            $baseRate = $row->rate;
                            if($days > $detail->base_days){
                                $row = ImgTripDailyRate::where([
                                    ['img_product_id', '=', $img_product_id],
                                    ['age_min', '<=',  $age],
                                    ['age_max', '>=',  $age],
                                ])->first();
                                if($row){
                                    $dailyRate = $row->rate;
                                    $price = $baseRate + $dailyRate * ($days - $product->base_days);
                                } 
                            }else{
                                $price = $baseRate;
                            }
                        } 
                    }if($type == 'medical'){
                        $where = [
                            ['img_product_id', '=', $img_product_id],
                            ['age_min', '<', $age ],
                            ['age_max', '>', $age ],
                        ];
                        if(array_key_exists('policy_max', $form)) $where[] = ['policy_max', '=', $form['policy_max']];
                        if(array_key_exists('deductible', $form)) $where[] = ['deductible', '=', $form['deductible']];
                        $row = ImgMedicalBaseRate::where($where)->first();
    
                        if($row){
                            if($days > $detail->base_days){
                                if($row){
                                    $price = $row->base_rate + $row->daily_rate * ($days - $detail->base_days);
                                } 
                            }else{
                                $price = $row->base_rate;
                            }
                        }

                        // Add Device Protection Rider +$3.54 per person
                        if(array_key_exists('DeviceProtection', $form)) {
                            if($form['DeviceProtection'] == 'yes') 
                                $price += 3.54;  // 16, 17
                        }

                        // Add Adventure Sports Rider  +$2.43
                        if(array_key_exists('AdventureSportsRider', $form)) {
                            if($form['AdventureSportsRider'] == 'yes') {
                                switch($img_product_id){
                                    case 16:
                                        $price += 2.43;
                                        break;
                                    case 17:
                                        $price += 1.52;
                                        break;
                                }
                            }
                        }
                    }
                    break;
                case 'travel_safe':
                    $travel_safe_product_id = $detail['id'];
                    $ages = json_decode($detail->ages);
                    $age = min(array_filter($ages, fn ($i) => $age <= $i));
    
                    $tripCost = 500 * (($tripCost / 500) + (($tripCost % 500) ? 1 : 0));
    
                    $row = TravelsafeRate::where([
                        'product_id' => $travel_safe_product_id,
                        'age' => $age,
                        'trip_cost' => $tripCost
                    ])->first();
    
                    $rate = $row ? $row->rate : 0;
    
                    $price = $rate;
                    break;
                case 'go_ready':
                    $price = 150;
                    break;
                
                default:
                    $price = 0;
            }
        }

        return $price;
    }

    public function showQuotes($id){
        $row = Visitor::find($id);
        
        return Inertia::render('Quotes/Show', ['row' => $row]);
    }
    
    public function leadIndex(){
        return Inertia::render('Quotes/Leads', [
            'visitors' => Quote::all()
        ]);
    }
}
