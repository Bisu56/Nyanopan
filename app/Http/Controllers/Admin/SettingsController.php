<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();

        return view('Admin.settings.index', compact('settings'));
    }

    public function update(Request $request)
    {
        $fields = [
            'site_name', 'site_email', 'site_phone', 'site_address',
            'about_title', 'about_description', 'about_mission',
            'facebook_url', 'twitter_url', 'instagram_url', 'youtube_url',
            'shipping_message', 'return_policy',
        ];

        foreach ($fields as $field) {
            if ($request->has($field)) {
                Setting::set($field, $request->input($field));
            }
        }

        if ($request->hasFile('site_logo')) {
            $file = $request->file('site_logo');
            $ext = $file->getClientOriginalExtension();
            $fileName = 'logo.'.$ext;
            $file->move('upload/settings', $fileName);
            Setting::set('site_logo', $fileName);
        }

        if ($request->hasFile('about_image')) {
            $file = $request->file('about_image');
            $ext = $file->getClientOriginalExtension();
            $fileName = 'about_image.'.$ext;
            $file->move('upload/settings', $fileName);
            Setting::set('about_image', $fileName);
        }

        return redirect('/settings')->with('status', 'Settings Updated Successfully');
    }
}
