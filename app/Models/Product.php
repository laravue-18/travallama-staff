<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $with = ['cancellation', 'cfar', 'interruption', 'ifar'];

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function detail(){
        if($this->provider->slug == 'trawick'){
            return $this->hasOne(TrawickProduct::class);
        }else if($this->provider->slug == 'travel_insured'){
            return $this->hasOne(TiProduct::class);
        }else if($this->provider->slug == 'geo_blue'){
            return $this->hasOne(GeoblueProduct::class);
        }else if($this->provider->slug == 'img'){
            return $this->hasOne(ImgProduct::class);
        }else if($this->provider->slug == 'travel_safe'){
            return $this->hasOne(TravelsafeProduct::class);
        }else if($this->provider->slug === 'go_ready') {
            return $this->hasOne(GoReadyProduct::class);
        } else {
            return $this->hasOne(TrawickProduct::class);
        }
    }

    public function cancellation(){
        return $this->hasOne(Cancellation::class);
    }

    public function cfar(){
        return $this->hasOne(Cfar::class);
    }

    public function interruption(){
        return $this->hasOne(Interruption::class);
    }

    public function ifar(){
        return $this->hasOne(Ifar::class);
    }
}
