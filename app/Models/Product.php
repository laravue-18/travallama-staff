<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $with = ['cancellation', 'cfar', 'interruption', 'ifar', 'trip_delays', 'missed_connection', 
        'medical', 'emergency_medical', 'preexisting_condition', 'adds', 
        'baggage_losses', 'baggage_delaies', 'cancellation_for_work_reason', 
        'equipment', 'disaster_evacuation', 'car_rental_damage', 'refund_policy', 
        'policy_maxes', 'deductibles', 'primary', 'preexisting_conditions_look_back_period', 'acute_onset_of_preexisting_condition', 'prescription_benefit'
    ];

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

    public function getProviderNameAttribute()
    {
        return $this->provider->name;
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

    public function trip_delays(){
        return $this->hasMany(TripDelay::class);
    }

    public function missed_connection(){
        return $this->hasOne(MissedConnection::class);
    }

    public function medical() {
        return $this->hasOne(Medical::class);
    }
    public function emergency_medical() {
        return $this->hasOne(EmergencyMedical::class);
    }
    public function preexisting_condition() {
        return $this->hasOne(PreexistingCondition::class);
    }
    public function adds() {
        return $this->hasMany(Add::class);
    }

    public function baggage_losses() {
        return $this->hasMany(BaggageLoss::class);
    }

    public function baggage_delaies() {
        return $this->hasMany(BaggageDelay::class);
    }

    public function cancellation_for_work_reason() {
        return $this->hasOne(CancellationForWorkReason::class);
    }

    public function equipment() {
        return $this->hasOne(Equipment::class);
    }

    public function disaster_evacuation() {
        return $this->hasOne(DisasterEvacuation::class);
    }

    public function car_rental_damage() {
        return $this->hasOne(CarRentalDamage::class);
    }

    public function refund_policy() {
        return $this->hasOne(RefundPolicy::class);
    }

    public function policy_maxes() {
        return $this->hasMany(PolicyMax::class);
    }

    public function deductibles() {
        return $this->hasMany(Deductible::class);
    }

    public function primary() {
        return $this->hasOne(Primary::class);
    }

    public function preexisting_conditions_look_back_period() {
        return $this->hasOne(PreexistingConditionsLookBackPeriod::class);
    }
    
    public function acute_onset_of_preexisting_condition() {
        return $this->hasOne(AcuteOnsetOfPreexistingCondition::class);
    }

    public function prescription_benefit() {
        return $this->hasOne(PrescriptionBenefit::class);
    }
}
