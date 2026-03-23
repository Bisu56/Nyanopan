<?php

use App\Http\Controllers\Admin\frontendController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\frontend\CartController;
use App\Http\Controllers\frontend\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

// Public API Routes
Route::get('/get-category', [frontendController::class, 'getCategory']);
Route::get('/get-products', [frontendController::class, 'getProducts']);
Route::get('/view-category/{slug}', [frontendController::class, 'viewCategory']);
Route::get('/view-product/{slug}', [frontendController::class, 'eachProdView']);
Route::get('/cart', [CartController::class, 'viewCartApi']);
Route::get('/api/my-order', [UserController::class, 'indexApi']);

// Authenticated API Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/add-to-cart', [CartController::class, 'addProduct']);
    Route::post('/delete-cart-item', [CartController::class, 'deleteProduct']);
    Route::post('/update-cart', [CartController::class, 'updateCart']);
});
