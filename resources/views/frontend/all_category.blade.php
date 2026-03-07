@extends('layouts.customer')

@section('title', 'All Products - Nyanopan')

@section('content')
<div class="py-5 my-5">
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4">
                <h2 class="fw-bold text-center text-md-start">All Products</h2>
                <hr class="mt-2">
            </div>
        </div>

        <div class="py-5" id="products">
            <div class="container">
                <div class="row d-flex flex-wrap">

                    @forelse($category as $item)
                        <div class="col-md-3 mt-2 mb-4">
                            <a class="link-dark text-decoration-none" href="{{ url('view-product/' . $item->slug) }}">
                                <div class="card hello-card shadow-sm border-0 overflow-hidden" style="width: 18rem; transition: all 0.3s;">
                                    @if($item->image)
                                        <img src="{{ asset('upload/product/' . $item->image) }}" 
                                             class="card-img-top" 
                                             alt="{{ $item->name }}" 
                                             style="height: 200px; object-fit: cover;">
                                    @else
                                        <img src="{{ asset('images/no-image.jpg') }}" 
                                             class="card-img-top" 
                                             alt="No image">
                                    @endif

                                    <div class="card-body text-center">
                                        <h6 class="card-title fw-bold mb-3">{{ $item->name }}</h6>

                                        <div class="d-flex justify-content-between align-items-center px-2">
                                            <span class="text-muted small">
                                                <del>RS {{ number_format($item->original_price) }}</del>
                                            </span>
                                            <span class="text-danger fw-bold fs-5">
                                                RS {{ number_format($item->selling_price) }}
                                            </span>
                                        </div>

                                        @if($item->trending == 1)
                                            <span class="badge bg-warning text-dark mt-2">Trending</span>
                                        @endif
                                    </div>
                                </div>
                            </a>
                        </div>
                    @empty
                        <div class="col-12 text-center py-5">
                            <h4 class="text-muted">No products available at the moment.</h4>
                            <p>Check back later or explore categories!</p>
                        </div>
                    @endforelse

                </div>
            </div>
        </div>
    </div>
</div>
@endsection