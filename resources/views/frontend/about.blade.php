@extends('layouts.customer')


@section('title')
   About Us - Nyanopan
@endsection


@section('content')
<div class="py-5"></div>

<section class="about-section">
    <div class="container">
        <div class="row align-items-center mb-5">
            <div class="col-lg-6">
                <img src="{{isset($site_settings['about_image']) ? asset('upload/settings/'.$site_settings['about_image']) : asset('images/nyanopan-logo.png')}}" alt="{{ $site_settings['site_name'] ?? 'Nyanopan' }}" class="img-fluid rounded shadow" onerror="this.src='https://via.placeholder.com/600x400?text=Nyanopan'">
            </div>
            <div class="col-lg-6">
                <h1 class="fw-bold mb-4">{{ $site_settings['about_title'] ?? 'Welcome to Nyanopan' }}</h1>
                <p class="lead text-muted">
                    {{ $site_settings['about_description'] ?? 'Your one-stop destination for quality products at unbeatable prices.' }}
                </p>
            </div>
        </div>

        <div class="row text-center mb-5">
            <div class="col-md-4 mb-4">
                <div class="card border-0 shadow h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-shopping-bag fa-3x text-success"></i>
                        </div>
                        <h5>Quality Products</h5>
                        <p class="text-muted">We ensure every product meets our high quality standards.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card border-0 shadow h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-truck fa-3x text-success"></i>
                        </div>
                        <h5>Fast Delivery</h5>
                        <p class="text-muted">Quick and reliable shipping to your doorstep.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card border-0 shadow h-100">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-headset fa-3x text-success"></i>
                        </div>
                        <h5>24/7 Support</h5>
                        <p class="text-muted">We're always here to help you with any questions.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-12">
                <div class="card bg-success text-white border-0">
                    <div class="card-body py-5 text-center">
                        <h2 class="mb-3">Our Mission</h2>
                        <p class="mb-0 fs-5">
                            {{ $site_settings['about_mission'] ?? 'To provide exceptional products and outstanding customer service, making every shopping experience with Nyanopan a memorable one.' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="fw-bold mb-4">Why Choose Nyanopan?</h2>
            </div>
            <div class="col-md-6">
                <ul class="list-unstyled">
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Wide range of products</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Competitive pricing</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Secure payment options</li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="list-unstyled">
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Easy returns & refunds</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Regular discounts & offers</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-success me-2"></i> Trusted by thousands</li>
                </ul>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-12">
                <h3 class="fw-bold mb-4">Get In Touch</h3>
                <p class="text-muted mb-4">Have questions? We'd love to hear from you!</p>
                <a href="{{url('contact')}}" class="btn btn-success btn-lg px-5">Contact Us</a>
            </div>
        </div>
    </div>
</section>

<div class="py-5"></div>
@endsection
