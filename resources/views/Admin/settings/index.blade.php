@extends('layouts.admin')

@section('content')
<div class="card">
    <div class="card-header">
      <h4>Site Settings</h4>
    </div>
    <div class="card-body">
        <form method="POST" action="{{url('update-settings')}}" enctype="multipart/form-data"> 
            @csrf
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="">Site Name</label>
                    <input type="text" class="form-control border border-dark" name="site_name" value="{{ $settings['site_name'] ?? 'Nyanopan' }}">
                </div>    
                <div class="col-md-6 mb-3">
                    <label for="">Site Email</label>
                    <input type="email" class="form-control border border-dark" name="site_email" value="{{ $settings['site_email'] ?? '' }}">
                </div> 
                <div class="col-md-6 mb-3">
                    <label for="">Site Phone</label>
                    <input type="text" class="form-control border border-dark" name="site_phone" value="{{ $settings['site_phone'] ?? '' }}">
                </div> 
                <div class="col-md-6 mb-3">
                    <label for="">Site Logo</label>
                    @if(isset($settings['site_logo']) && $settings['site_logo'])
                        <img src="{{asset('upload/settings/'.$settings['site_logo'])}}" alt="Logo" class="mb-2" style="max-height: 50px;">
                    @endif
                    <input type="file" name="site_logo" class="form-control border border-dark">
                </div> 
                <div class="col-md-12 mb-3">
                    <label for="">Site Address</label>
                    <textarea name="site_address" rows="2" class="form-control border border-dark">{{ $settings['site_address'] ?? '' }}</textarea>   
                </div>    
            </div>

            <hr>
            <h5 class="mb-3">About Page Content</h5>
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label for="">About Image</label>
                    @if(isset($settings['about_image']) && $settings['about_image'])
                        <img src="{{asset('upload/settings/'.$settings['about_image'])}}" alt="About" class="mb-2" style="max-height: 100px;">
                    @endif
                    <input type="file" name="about_image" class="form-control border border-dark">
                </div> 
                <div class="col-md-12 mb-3">
                    <label for="">About Title</label>
                    <input type="text" class="form-control border border-dark" name="about_title" value="{{ $settings['about_title'] ?? '' }}">
                </div> 
                <div class="col-md-12 mb-3">
                    <label for="">About Description</label>
                    <textarea name="about_description" rows="4" class="form-control border border-dark">{{ $settings['about_description'] ?? '' }}</textarea>   
                </div>    
                <div class="col-md-12 mb-3">
                    <label for="">Mission</label>
                    <textarea name="about_mission" rows="3" class="form-control border border-dark">{{ $settings['about_mission'] ?? '' }}</textarea>   
                </div>    
            </div>

            <hr>
            <h5 class="mb-3">Social Media Links</h5>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="">Facebook URL</label>
                    <input type="text" class="form-control border border-dark" name="facebook_url" value="{{ $settings['facebook_url'] ?? '' }}">
                </div> 
                <div class="col-md-6 mb-3">
                    <label for="">Twitter URL</label>
                    <input type="text" class="form-control border-dark" name="twitter_url" value="{{ $settings['twitter_url'] ?? '' }}">
                </div> 
                <div class="col-md-6 mb-3">
                    <label for="">Instagram URL</label>
                    <input type="text" class="form-control border-dark" name="instagram_url" value="{{ $settings['instagram_url'] ?? '' }}">
                </div> 
                <div class="col-md-6 mb-3">
                    <label for="">YouTube URL</label>
                    <input type="text" class="form-control border-dark" name="youtube_url" value="{{ $settings['youtube_url'] ?? '' }}">
                </div> 
            </div>

            <hr>
            <h5 class="mb-3">Other Settings</h5>
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label for="">Shipping Message</label>
                    <textarea name="shipping_message" rows="2" class="form-control border-dark">{{ $settings['shipping_message'] ?? '' }}</textarea>   
                </div> 
                <div class="col-md-12 mb-3">
                    <label for="">Return Policy</label>
                    <textarea name="return_policy" rows="3" class="form-control border-dark">{{ $settings['return_policy'] ?? '' }}</textarea>   
                </div> 
            </div>

            <div class="col-md-12 mb-3">
               <button type="submit" class="btn btn-primary">Save Settings</button>
            </div>    
        </form>
    </div>
  </div>
@endsection
