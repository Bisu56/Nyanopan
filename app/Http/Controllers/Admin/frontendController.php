<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;

class frontendController extends Controller
{
    public function index()
    {
        return view('Admin.dashboard');
    }

    public function getCategory()
    {
        $category = Category::latest()->get();

        return response()->json(['category' => $category]);
    }

    public function getProducts()
    {
        $products = Product::latest()->get();

        return response()->json(['products' => $products]);
    }
}
