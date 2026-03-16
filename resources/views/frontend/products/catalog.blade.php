@extends('layouts.customer')

@section('title')
    Product Catalog - Nyanopan
@endsection

@section('css')
<style>
    .product-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    .product-image {
        transition: transform 0.5s ease;
    }
    .product-card:hover .product-image {
        transform: scale(1.05);
    }
    .add-to-cart {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    .product-card:hover .add-to-cart {
        transform: translateY(0);
    }
    .filter-btn.active {
        background-color: #11d411;
        color: white;
    }
</style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Noto+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script>
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary": "#11d411",
                    "background-light": "#f6f8f6",
                    "background-dark": "#102210",
                },
                fontFamily: {
                    "display": ["Noto Serif", "serif"],
                    "sans": ["Noto Sans", "sans-serif"]
                },
            },
        },
    }
</script>
@endsection

@section('content')
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
    <!-- Hero Section -->
    <section class="mb-8">
        <div class="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-xl overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy1IByvad57FSo6oBVuhUjZV90lI6TxiYidLQALiaYYeb1eCNX0jFPMGA9OCo6fAf-mgkcTCtms3Jj2SKdJs_2jtIEnKWWIspZZlrCNyQUxJOtMRfn_bzOpRUG8-KpmYj36lDTNqt-ZS8VnK6yMZClxlDlUEv0nDsp4QzKOzmOYEXYq3uX9NuXa22e7akNEZ4DH-T2iiTOSykzYPpdkrOYeSIoft_h4CziW2NRxgW1-Ilwy8HyxyeAGgqhi_C2uCQrpTQoH9lgtbo')">
            </div>
            <div class="absolute bottom-0 left-0 p-8 z-20">
                <h1 class="text-white text-4xl md:text-5xl font-bold mb-2 font-display">Artisanal Felt Collection</h1>
                <p class="text-white/90 text-lg max-w-lg font-sans">Hand-crafted with love using traditional Himalayan techniques and pure organic wool.</p>
            </div>
        </div>
    </section>

    <!-- Filters & Search Bar Mobile -->
    <section class="mb-8 max-w-[1200px] mx-auto w-full px-6">
        <div class="lg:hidden mb-4">
            <label class="flex items-center bg-primary/10 rounded-xl px-4 py-3 w-full">
                <span class="material-symbols-outlined text-primary mr-2">search</span>
                <input class="bg-transparent border-none focus:ring-0 text-base w-full placeholder:text-primary/60" placeholder="Search handmade treasures..." type="text"/>
            </label>
        </div>
        
        <div class="flex flex-wrap items-center gap-3">
            <button class="filter-btn active flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium text-sm">
                <span>All Products</span>
            </button>
            <button class="filter-btn flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
                <span>Handmade Shoes</span>
                <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button class="filter-btn flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
                <span>Felted Bags</span>
                <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button class="filter-btn flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
                <span>Home Decor</span>
                <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button class="filter-btn flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
                <span>Key Rings</span>
                <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4 border-t border-b border-primary/10 mt-6">
            <div class="flex items-center gap-6 flex-1">
                <span class="text-sm font-semibold whitespace-nowrap">Price Range</span>
                <div class="relative w-full max-w-xs h-1 bg-primary/20 rounded-full">
                    <div class="absolute left-[15%] right-[25%] h-full bg-primary rounded-full"></div>
                    <div class="absolute left-[15%] top-1/2 -translate-y-1/2 size-4 bg-primary border-2 border-white rounded-full cursor-pointer shadow-sm"></div>
                    <div class="absolute right-[25%] top-1/2 -translate-y-1/2 size-4 bg-primary border-2 border-white rounded-full cursor-pointer shadow-sm"></div>
                    <div class="absolute left-[15%] top-4 text-[10px] font-bold">$15</div>
                    <div class="absolute right-[25%] top-4 text-[10px] font-bold">$180</div>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <span class="text-sm text-slate-500">Showing {{ $product->count() }} products</span>
                <select class="bg-transparent border-primary/20 rounded-lg text-sm focus:ring-primary focus:border-primary px-3 py-2">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>
        </div>
    </section>

    <!-- Product Grid -->
    <section class="max-w-[1200px] mx-auto w-full px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @forelse ($product as $prod)
            <div class="product-card group flex flex-col">
                <div class="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <a href="{{ url(asset('view-category/'.$prod->category->slug.'/'.$prod->slug)) }}">
                        <img class="product-image w-full h-full object-cover" 
                             src="{{ asset('upload/product/'.$prod->image) }}" 
                             alt="{{ $prod->name }}">
                    </a>
                    <button class="absolute top-3 right-3 size-8 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="material-symbols-outlined text-slate-900 text-xl">favorite</span>
                    </button>
                    <div class="add-to-cart absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-white text-center text-sm font-medium cursor-pointer">
                        Add to Cart
                    </div>
                </div>
                <h3 class="font-bold text-lg font-display">
                    <a href="{{ url(asset('view-category/'.$prod->category->slug.'/'.$prod->slug)) }}" class="hover:text-primary transition-colors">
                        {{ $prod->name }}
                    </a>
                </h3>
                <p class="text-sm text-slate-500 mb-2 font-sans">{{ $prod->description ?? 'Handcrafted with love' }}</p>
                <div class="flex items-center justify-between">
                    <span class="text-primary font-bold text-xl">RS {{ $prod->selling_price }}</span>
                    @if($prod->original_price && $prod->original_price > $prod->selling_price)
                    <span class="text-sm text-slate-400 line-through">RS {{ $prod->original_price }}</span>
                    @endif
                </div>
            </div>
            @empty
            <div class="col-span-full text-center py-12">
                <span class="material-symbols-outlined text-6xl text-slate-300">inventory_2</span>
                <p class="mt-4 text-slate-500">No products found in this category.</p>
            </div>
            @endforelse
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-center mt-16 gap-2">
            {{ $product->links() }}
        </div>
    </section>

    <!-- Artisanal Banner Section -->
    <section class="bg-primary/5 py-16 mt-16">
        <div class="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
                <h2 class="text-3xl font-bold mb-4 font-display">Every stitch tells a story</h2>
                <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 font-sans leading-relaxed">
                    Nyanopan brings together rural Nepalese artisans and sustainable Himalayan wool to create timeless pieces for your modern home. Your purchase supports fair-trade livelihoods and keeps traditional crafts alive.
                </p>
                <div class="flex flex-wrap gap-8">
                    <div class="flex items-center gap-3">
                        <div class="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined">volunteer_activism</span>
                        </div>
                        <div>
                            <p class="font-bold">100% Fair Trade</p>
                            <p class="text-xs text-slate-500 font-sans">Supporting 50+ Families</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined">compost</span>
                        </div>
                        <div>
                            <p class="font-bold">Zero Waste</p>
                            <p class="text-xs text-slate-500 font-sans">Biodegradable Packaging</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 relative">
                <div class="aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-background-dark shadow-xl">
                    <img class="w-full h-full object-cover" data-alt="A Nepalese artisan working on a colorful felt rug" 
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYUhmw99EsnFRRdZw_gTBxosm_vH9XrPvoP48MVvz9w_8LfDWYF7nEfudSwGEnl_tkL9lAqkwJKIGTeSbewbppOqiAEQUSd5oZ8teL3R1c0AI5MzdvcI3kCdzdGPdR2232UfHt-trgdG_16xIsxKLE2n8gCxxyG9wYQZ1ICGKgUVZUaXwv1pHZ6jlXJrpUv1K8DyDIod15eP96U1VdpL5fbV1Vo48hgAWpXVrOXLTTDSI8GMYvccYZEiknzs2Oo7XWGHz3Z5b6ERg">
                </div>
                <div class="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl text-white shadow-lg hidden lg:block">
                    <p class="text-2xl font-bold">15+</p>
                    <p class="text-sm">Years of Craft</p>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
