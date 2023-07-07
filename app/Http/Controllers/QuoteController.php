<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use App\Models\Quote;
use App\Models\Visitor;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class QuoteController extends Controller
{
    public function indexQuotes(){
        $rows = Visitor::when(Request::input('search'), function ($query, $search) {
                $query->where('id', 'LIKE', '%'.$search.'%')
                    ->orWhere('session', 'LIKE', '%'.$search.'%');
            })
            ->when(Request::input('date_sort'), function ($query, $sort) {
                $query->orderBy('created_at', $sort);
            })
            ->when(Request::input('device_filter'), function ($query, $device) {
                $query->whereIn('device', $device);
            })
            ->when(Request::input('q_user_filter'), function ($query, $user) {
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
            'filters' => Request::all(),
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
