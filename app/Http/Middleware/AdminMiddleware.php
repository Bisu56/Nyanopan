<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is logged in
        if (Auth::check()) {
            // Check if user is admin (role_as = 1)
            if (Auth::user()->role_as == '1') {
                return $next($request); // Allow admin to proceed
            }
        }

        // If not admin → redirect to home with error message
        return redirect('/')->with('error', 'Access Denied! You are not an admin.');
    }
}