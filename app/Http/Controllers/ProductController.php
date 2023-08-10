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
        }
        // } else if($request->has('cancellation')){
        //     if($product->cancellation){
        //         $product->cancellation->update(['label' => $request->cancellation]);
        //     }else{
        //         $product->cancellation()->create(['label' => $request->cancellation]);
        //     }
        // } else if($request->has('cfar_label')){
        //     if($product->cfar){
        //         $product->cfar->update(['label' => $request->cfar_label]);
        //     }else{
        //         $product->cfar()->create(['label' => $request->cfar_label]);
        //     }
        // } else if($request->has('cfar_info')) {
        //     if($product->cfar){
        //         $product->cfar->update(['additional_info' => $request->cfar_info]);
        //     }
        // } else if($request->has('interruption')){
        //     if($product->interruption){
        //         $product->interruption->update(['label' => $request->interruption]);
        //     }else{
        //         $product->interruption()->create(['label' => $request->interruption]);
        //     }
        // } else if($request->has('ifar_label')){
        //     if($product->ifar){
        //         $product->ifar->update(['label' => $request->ifar_label]);
        //     }else{
        //         $product->ifar()->create(['label' => $request->ifar_label]);
        //     }
        // } else if($request->has('ifar_info')) {
        //     if($product->ifar){
        //         $product->ifar->update(['additional_info' => $request->ifar_info]);
        //     }
        // } else if($request->has('trip_delay_label')){
        //     if($request->id){
        //         $trip_delay = $product->trip_delays()->where('id', $request->id)->first();
        //         $trip_delay->update(['label' => $request->trip_delay_label]);
        //     }else{
        //         $product->trip_delays()->create(['label' => $request->trip_delay_label]);
        //     }
        // } else if($request->has('trip_delay_info')) {
        //     $trip_delay = $product->trip_delays()->where('id', $request->id)->first();
        //     $trip_delay->update(['additional_info' => $request->trip_delay_info]);
        // } else if($request->has('missed_connection')){
        //     if($product->missed_connection){
        //         $product->missed_connection->update(['label' => $request->missed_connection]);
        //     }else{
        //         $product->missed_connection()->create(['label' => $request->missed_connection]);
        //     }
        // } else if($request->has('medical')){
        //     if($product->medical){
        //         $product->medical->update(['label' => $request->medical]);
        //     }else{
        //         $product->medical()->create(['label' => $request->medical]);
        //     }
        // } else if($request->has('emergency_medical')){
        //     if($product->emergency_medical){
        //         $product->emergency_medical->update(['label' => $request->emergency_medical]);
        //     }else{
        //         $product->emergency_medical()->create(['label' => $request->emergency_medical]);
        //     }
        // } else if($request->has('preexisting_condition')){
        //     if($product->preexisting_condition){
        //         $product->preexisting_condition->update(['label' => $request->preexisting_condition]);
        //     }else{
        //         $product->preexisting_condition()->create(['label' => $request->preexisting_condition]);
        //     }
        // } else if($request->has('add_label')){
        //     if($request->id){
        //         $add = $product->adds()->where('id', $request->id)->first();
        //         $add->update(['label' => $request->add_label]);
        //     }else{
        //         $product->adds()->create(['label' => $request->add_label]);
        //     }
        // } else if($request->has('baggage_loss_label')){
        //     if($request->id){
        //         $baggage_loss = $product->baggage_losses()->where('id', $request->id)->first();
        //         $baggage_loss->update(['label' => $request->baggage_loss_label]);
        //     }else{
        //         $product->baggage_losses()->create(['label' => $request->baggage_loss_label]);
        //     }
        // } else if($request->has('baggage_delay_label')){
        //     if($request->id){
        //         $baggage_delay = $product->baggage_delaies()->where('id', $request->id)->first();
        //         $baggage_delay->update(['label' => $request->baggage_delay_label]);
        //     }else{
        //         $product->baggage_delaies()->create(['label' => $request->baggage_delay_label]);
        //     }
        // }else if($request->has('cancellation_for_work_reason')){
        //     if($product->cancellation_for_work_reason){
        //         $product->cancellation_for_work_reason->update(['label' => $request->cancellation_for_work_reason]);
        //     }else{
        //         $product->cancellation_for_work_reason()->create(['label' => $request->cancellation_for_work_reason]);
        //     }
        // }else if($request->has('equipment')){
        //     if($product->equipment){
        //         $product->equipment->update(['label' => $request->equipment]);
        //     }else{
        //         $product->equipment()->create(['label' => $request->equipment]);
        //     }
        // }  else if($request->has('disaster_evacuation')){
        //     if($product->disaster_evacuation){
        //         $product->disaster_evacuation->update(['label' => $request->disaster_evacuation]);
        //     }else{
        //         $product->disaster_evacuation()->create(['label' => $request->disaster_evacuation]);
        //     }
        // } else if($request->has('car_rental_damage')){
        //     if($product->car_rental_damage){
        //         $product->car_rental_damage->update(['label' => $request->car_rental_damage]);
        //     }else{
        //         $product->car_rental_damage()->create(['label' => $request->car_rental_damage]);
        //     }
        // }else if($request->has('refund_policy')){
        //     if($product->refund_policy){
        //         $product->refund_policy->update(['label' => $request->refund_policy]);
        //     }else{
        //         $product->refund_policy()->create(['label' => $request->refund_policy]);
        //     }
        // }

        $id = $request->id;
        $relationship = $request->relationship;
        $field = $request->field;
        $value = $request->value;

        if($id){
            if(in_array($field, ['is_recommended', 'is_included']) && $value == 1)
                $product->$relationship()->where($field, 1)->update([$field => 0]);
            $row = $product->$relationship()->find($id)->update([$field => $value]);
        }else if($id === 0) {
            $product->$relationship()->create([ $field => $value]);
        }else{
            if($product->$relationship){
                $product->$relationship->update([$field => $value]);
            }else{
                $product->$relationship()->create([$field => $value]);
            }
        }

        return redirect()->back()->with('message', 'Provider Updated Successfully');
    }
}
