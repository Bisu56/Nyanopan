<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;   // ← Add this

class HomeController extends Controller
{
    public function __construct()
    {
        // Remove 'auth' middleware from home page (or keep only for admin)
        // $this->middleware('auth');
    }

    public function index()
    {
        $category = Category::where('status', '0')->get(); // Adjust status logic as needed
        // or: Category::all();

        return view('frontend.index', compact('category'));
        // Make sure this matches your file path
    }
}