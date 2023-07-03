<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\MessageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('products', [ProductController::class, 'index'])->name('products');
    Route::post('products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::post('providers/{provider}', [ProviderController::class, 'update'])->name('providers.update');
    
    Route::get('users', [UserController::class, 'index'])->name('users');
    Route::get('users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('users', [UserController::class, 'store'])->name('users.store');
    Route::get('users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::get('quotes', [QuoteController::class, 'indexQuotes'])->name('quotes.index');
    Route::get('quotes/{id}', [QuoteController::class, 'showQuotes'])->name('quotes.show');

    Route::get('leads', [QuoteController::class, 'leadIndex'])->name('leads');

    Route::get('customers', [OrderController::class, 'index'])->name('customers');
    
    Route::get('earnings', [UserController::class, 'index'])->name('earnings');
    
    Route::get('analytics', [UserController::class, 'index'])->name('analytics');
    
    Route::get('permissions', [PermissionController::class, 'index'])->name('permissions');
    Route::post('roles', [PermissionController::class, 'storeRole'])->name('roles.store');
    Route::post('permissions', [PermissionController::class, 'store'])->name('permissions.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('chat', [MessageController::class, 'index'])->name('chat');
});

require __DIR__.'/auth.php';
