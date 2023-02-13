<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quote;

class QuoteController extends Controller
{
    public function visitorIndex(){
        return Inertia::render('Quotes/Visitors', [
            'visitors' => Quote::all()
        ]);
    }
    
    public function leadIndex(){
        return Inertia::render('Quotes/Leads', [
            'visitors' => Quote::all()
        ]);
    }
}
