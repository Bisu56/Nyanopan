@extends('layouts.customer')

@section('title', 'All Categories - Nyanopan')

@section('content')
<div class="py-5 my-5">
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4">
                <h2 class="fw-bold text-center text-md-start">All Categories</h2>
                <hr class="mt-2">
            </div>
        </div>

        <div class="py-5" id="categories">
            <div class="container">
                <div class="row d-flex flex-wrap">

                    @forelse($category as $item)
                        <div class="col-md-3 mt-2 mb-4">
                            <a class="link-dark text-decoration-none" href="{{ url('view-category/' . $item->slug) }}">
                                <div class="card hello-card shadow-sm border-0 overflow-hidden" style="width: 18rem; transition: all 0.3s;">
                                    @if($item->image)
                                        <img src="{{ asset('upload/category/' . $item->image) }}" 
                                             class="card-img-top" 
                                             alt="{{ $item->name }}" 
                                             style="height: 200px; object-fit: cover;">
                                    @else
                                        <img src="{{ asset('images/no-image.jpg') }}" 
                                             class="card-img-top" 
                                             alt="No image"
                                             style="height: 200px; object-fit: cover;">
                                    @endif

                                    <div class="card-body text-center">
                                        <h6 class="card-title fw-bold mb-3">{{ $item->name }}</h6>

                                        @if($item->description)
                                            <p class="card-text text-muted small">{{ Str::limit($item->description, 50) }}</p>
                                        @endif

                                        @if($item->popular == 1)
                                            <span class="badge bg-warning text-dark mt-2">Popular</span>
                                        @endif
                                    </div>
                                </div>
                            </a>
                        </div>
                    @empty
                        <div class="col-12 text-center py-5">
                            <h4 class="text-muted">No categories available at the moment.</h4>
                            <p>Check back later!</p>
                        </div>
                    @endforelse

                </div>
            </div>
        </div>
    </div>
</div>
@endsection