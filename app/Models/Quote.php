<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $with = ['order', 'product1', 'product2', 'product3'];

    public function order() {
        return $this->hasOne(Order::class);
    }

    public function product1() {
        return $this->belongsTo(Product::class, 'product1_id');
    }

    public function product2() {
        return $this->belongsTo(Product::class, 'product2_id');
    }

    public function product3() {
        return $this->belongsTo(Product::class, 'product3_id');
    }
}
