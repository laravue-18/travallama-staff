<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;

    protected $with = ['quote', 'order'];

    protected $casts = [
        'id' => 'string'
    ];

    public function quote()
    {
        return $this->hasOne(Quote::class);
    }

    public function order()
    {
        return $this->hasOneThrough(Order::class, Quote::class);
    }
}
