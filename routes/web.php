<?php

use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\frontendController as AdminFrontendController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\frontend\CartController;
use App\Http\Controllers\frontend\CheckoutController;
use App\Http\Controllers\frontend\contactComplains;
use App\Http\Controllers\frontend\UserController;
use Illuminate\Support\Facades\Route;

// Auth Routes - handled by React SPA
// Skip Laravel auth routes - React handles login/register
// Auth::routes();

// Custom login/register routes for React API calls
Route::post('/api/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/api/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);
Route::post('/api/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']);

// ==================== AUTHENTICATED USER ROUTES ====================
Route::middleware(['auth'])->group(function () {
    Route::get('cart', [CartController::class, 'viewCart'])->name('cart');
    Route::get('checkout', [CheckoutController::class, 'index'])->name('checkout');
    Route::post('place-order', [CheckoutController::class, 'placeOrder']);
    Route::get('my-order', [UserController::class, 'index'])->name('my.orders');
    Route::get('view-order/{id}', [UserController::class, 'viewOrder']);
});

// ==================== ADMIN ROUTES ====================
Route::middleware(['auth', 'isAdmin'])->name('admin.')->group(function () {

    Route::get('/dashboard', [AdminFrontendController::class, 'index'])->name('dashboard');

    // Categories
    Route::get('/categories', [CategoriesController::class, 'index'])->name('categories');
    Route::get('/add-category', [CategoriesController::class, 'add'])->name('add-category');
    Route::post('/insert-category', [CategoriesController::class, 'insert']);
    Route::get('/edit-category/{id}', [CategoriesController::class, 'edit']);
    Route::put('/update-category/{id}', [CategoriesController::class, 'update']);
    Route::get('/delete-category/{id}', [CategoriesController::class, 'delete']);

    // Products
    Route::get('/products', [ProductController::class, 'index'])->name('products');
    Route::get('/add-product', [ProductController::class, 'add'])->name('add-product');
    Route::post('/insert-product', [ProductController::class, 'insert']);
    Route::get('/edit-product/{id}', [ProductController::class, 'edit']);
    Route::put('/update-product/{id}', [ProductController::class, 'update']);
    Route::get('/delete-product/{id}', [ProductController::class, 'delete']);

    // Orders
    Route::get('/orders', [OrderController::class, 'index'])->name('orders');
    Route::get('/view-order/{id}', [OrderController::class, 'view']);
    Route::put('/update-order/{id}', [OrderController::class, 'updateOrder']);
    Route::get('/order-history', [OrderController::class, 'orderHistory']);

    // Users
    Route::get('/users', [DashboardController::class, 'users'])->name('users');
    Route::get('/view-user/{id}', [DashboardController::class, 'viewUser']);

    // Contact Messages
    Route::get('/message', [contactComplains::class, 'viewcomplains'])->name('messages');

    // Settings
    Route::get('/settings', [App\Http\Controllers\Admin\SettingsController::class, 'index'])->name('settings');
    Route::post('/update-settings', [App\Http\Controllers\Admin\SettingsController::class, 'update']);
});

// ==================== PUBLIC / FRONTEND ROUTES (React SPA) ====================
// All routes are handled by React Router
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/register', function () {
    return view('welcome');
});
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');
