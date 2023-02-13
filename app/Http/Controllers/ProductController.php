<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Provider;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Products/Index', [
            'providers' => Provider::with('products')->get()
        ]);
    }

    public function update(Request $request, Product $product){
        $product->status = $request->status;
        $product->save();

        return redirect()->back()->with('message', 'Provider Updated Successfully');
    }
}
