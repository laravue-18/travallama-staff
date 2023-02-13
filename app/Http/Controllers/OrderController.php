<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(){
        return Inertia::render('Orders/Index', [
            'rows' => Order::all()
        ]);
    }
}
