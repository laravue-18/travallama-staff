<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use App\Models\Quote;
use App\Models\Visitor;
use Illuminate\Support\Facades\DB;

class QuoteController extends Controller
{
    public function indexQuotes(){
        $rows = DB::table('visitors')
            ->leftJoin('quotes', 'visitors.id', '=', 'quotes.visitor_id')
            ->leftJoin('orders', 'orders.quote_id', '=', 'quotes.id')
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('quote_id', 'LIKE', '%'.$search.'%')
                    ->orWhere('session', 'LIKE', '%'.$search.'%');
            })
            ->paginate(300)
            ->withQueryString()
            ->toArray();

        // $rows['data'] = collect($rows['data'])->map(function($row, $key){
        //     $row->id = $key;
        //     return $row;
        // });

        
        return Inertia::render('Quotes/Index', [
            'rows' => $rows,
            'filters' => Request::only(['search']),
            'stats' => [
                'total_visits' => [
                    'month_to_date' => 340,
                    'last_month' => 500,
                    'last_30_days' => 450,
                    'week_to_day' => 60,
                    'last_7_days' => 120,
                ],
                'total_quotes' => [
                    'month_to_date' => 200,
                    'last_month' => 340,
                    'last_30_days' => 400,
                    'week_to_day' => 35,
                    'last_7_days' => 70,
                ],
                'success_rate' => [
                    'exit' => 350,
                    'lead' => 120,
                    'purchase' => 9,
                ],
                'repeat' => [
                    'lead' => 101,
                    'customer' => 54
                ],
                'coverage_type' => [
                    'medical' => 30,
                    'comprehensive' => 70
                ],
                'q_type' => [
                    'individual' => 77,
                    'family' => 10,
                    'multi_family' => 8
                ]
            ]
        ]);
    }

    public function showQuotes($id){
        
        return Inertia::render('Quotes/Show', []);
    }
    
    public function leadIndex(){
        return Inertia::render('Quotes/Leads', [
            'visitors' => Quote::all()
        ]);
    }
}
