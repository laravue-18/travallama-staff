<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Provider;
use Inertia\Inertia;
use App\Models\Cancellation;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Products/Index', [
            'providers' => Provider::all(),
            'products' => Product::with('provider')->get()
        ]);
    }

    public function show(Product $product){
        return Inertia::render('Products/Show', [
            'product' => $product
        ]);
    }

    public function update(Request $request, Product $product){
        if($request->has('status')){
            $product->status = $request->status;
            $product->save();
        } elseif($request->has('cancellation')){
            if($product->cancellation){
                $product->cancellation->update(['label' => $request->cancellation]);
            }else{
                $product->cancellation()->create(['label' => $request->cancellation]);
            }
        } elseif($request->has('cfar_label')){
            if($product->cfar){
                $product->cfar->update(['label' => $request->cfar_label]);
            }else{
                $product->cfar()->create(['label' => $request->cfar_label]);
            }
        } elseif($request->has('cfar_info')) {
            if($product->cfar){
                $product->cfar->update(['additional_info' => $request->cfar_info]);
            }
        } elseif($request->has('interruption')){
            if($product->interruption){
                $product->interruption->update(['label' => $request->interruption]);
            }else{
                $product->interruption()->create(['label' => $request->interruption]);
            }
        } elseif($request->has('ifar_label')){
            if($product->ifar){
                $product->ifar->update(['label' => $request->ifar_label]);
            }else{
                $product->ifar()->create(['label' => $request->ifar_label]);
            }
        } elseif($request->has('ifar_info')) {
            if($product->ifar){
                $product->ifar->update(['additional_info' => $request->ifar_info]);
            }
        } 

        return redirect()->back()->with('message', 'Provider Updated Successfully');
    }
}
