<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provider;

class ProviderController extends Controller
{
    public function update(Request $request, Provider $provider){
        $provider->status = $request->status;
        $provider->save();

        return redirect()->back()->with('success', 'Provider Updated Successfully');
    }
}
