<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700;900&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
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
              borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            },
          },
        }
      </script>
<title>Nyanopan | Artisanal Felted Wool</title>
</head>
<body class="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100">
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-20">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 text-slate-900 dark:text-slate-100">
<div class="text-primary">
<span class="material-symbols-outlined text-3xl">park</span>
</div>
<h2 class="font-display text-xl font-bold leading-tight tracking-tight">Nyanopan</h2>
</div>
<nav class="hidden md:flex items-center gap-9">
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Shop</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Artisans</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Story</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Journal</a>
</nav>
</div>
<div class="flex flex-1 justify-end gap-4 lg:gap-6">
<label class="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-xl h-full">
<div class="text-primary flex bg-primary/10 items-center justify-center pl-4 rounded-l-xl" data-icon="search">
<span class="material-symbols-outlined text-xl">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 border-none bg-primary/10 text-slate-900 focus:ring-0 h-full placeholder:text-primary/60 px-4 rounded-r-xl pl-2 text-base font-normal" placeholder="Search crafts..." value=""/>
</div>
</label>
<div class="flex gap-2">
<button class="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined">shopping_bag</span>
</button>
<button class="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</div>
</div>
</header>
<main class="flex-1">
<!-- Hero Section -->
<div class="px-6 lg:px-20 py-10 lg:py-16 max-w-7xl mx-auto">
<div class="flex flex-col gap-8 lg:flex-row items-center">
<div class="w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Close up of handmade grey felt shoes on a wooden floor" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8ftu3EZnGxyGqn9wk0BaGV085nVWkOGNSQBOrhoxxwI4nAzG7CzF9kSc2FlSAULeZrvFE_j58fsdnnzNLPd4xkuegbMEGN5_V3Kt0gdRgaentbe-R1loflI0-pEBExUHfmeLDPUcII08Cz-wz5Goqo3wdl6gkNDGya5-Jn8Yt9eCXqdEGHz6uCn-STAjwjC9ZJKQ1zujSCE6njhONCYgdqKQIl76J8NJhaEnRSob97OfsgYzZPbcEgkhWiOuedHwU_uTVtwUX_CI");'></div>
<div class="absolute inset-0 bg-slate-900/10"></div>
</div>
<div class="flex flex-col gap-8 lg:w-1/2 lg:pl-12">
<div class="flex flex-col gap-4">
<span class="text-primary font-bold tracking-widest uppercase text-xs">Sustainable Craftsmanship</span>
<h1 class="font-display text-slate-900 dark:text-slate-100 text-4xl lg:text-6xl font-black leading-tight">
                                    Artisanal Felt for a Cozy Life
                                </h1>
<p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                                    Handcrafted woolen shoes and bags made from pure, sustainable wool in the heart of the forest. Experience the warmth of nature.
                                </p>
</div>
<div class="flex flex-wrap gap-4">
<button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    Shop Collection
                                </button>
<button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-slate-800 border-2 border-primary/20 text-slate-900 dark:text-slate-100 text-base font-bold hover:bg-primary/5 transition-colors">
                                    Our Story
                                </button>
</div>
</div>
</div>
</div>
<!-- Categories Grid -->
<section class="bg-primary/5 py-16 px-6 lg:px-20">
<div class="max-w-7xl mx-auto">
<div class="flex items-end justify-between mb-10">
<div>
<h2 class="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Our Craft Categories</h2>
<p class="text-slate-500 mt-2">Explore our collection of hand-felted essentials</p>
</div>
<a class="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                View all <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Category 1 -->
<div class="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Soft handmade felted woolen slippers on a rug" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLvkJEUKsHZ8zxyzPcfOrUZGom478pRBs-Vs6dokiJiYHFlc-l146ICAyw9utugijLwdlPzR4w2E7K2ipDeEJpKJa49qMixJ26AbUWwRGm83UTJk-H7siVkpJlcZPI7hTX8kd46hdULtRq7vN35a5KZhpWhbmVCjH9wZV0wL1kzdBCPxYGzKOHeiFfOkO7GwxgRvvHrMWRROUu-rDQGmW1iX8TVWjNNZ9e3Xq19gQkS3_Aik0JvYT9MeNh6HToSQNVZxUXvU2TVas");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6">
<h3 class="text-white text-xl font-bold">Handmade Shoes</h3>
<p class="text-white/80 text-sm mt-1">Warmth for every step</p>
</div>
</div>
<!-- Category 2 -->
<div class="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Artisanal minimalist grey felt tote bag" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMU1mB8HrWPmF_1HU7kE_iu2xlBRHLQv5lpnXoSQPD67QKyPFDgR_pDB7E4wxynUQWt24e_N6mP-j9v9VeY6AO05RTYyfcwpmn-BA2kgQxFxAV1GiugfGC2jw0jEeE5e4wPoH_PjY-a8Th_betev5ZoGm_08S3a9ARZfnqSTFNXWR7fqoARvOq_tOXbvsnnHuW2YZ6UWW6avJ1M5V98BQdiImy9ISAvzCwm9gPjP1BC0nn0UCPeN_4mbTA5_Gevn8z5RkYvNBBFlM");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6">
<h3 class="text-white text-xl font-bold">Felted Bags</h3>
<p class="text-white/80 text-sm mt-1">Durable &amp; stylish</p>
</div>
</div>
<!-- Category 3 -->
<div class="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Felted wool coasters and home accessories on a wood table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuATVkJAAwjjS2lf-XSRY0bI-kxyy35bXm_QoG1UkbAB8kdK0op4H7LXaIBVTR4P02IAWir2KWySQuj0hvr2jWf71GDy58Yx2X3q7M8RTFKbwi0u86mgu_tubk-n6fmUXbpm48IFQPB4VCddvw31jqj83_BJGEqxojqMmJKQWISIXXS8QNM0_iC-H1euM6jgdZnz1D6hVfGBdUdDfnf_WvGUB_xtawtiN8k8j2F1VG0MZ34o8_vkZey0xLVmG3zCDKjTT7lNWYcQaSo");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6">
<h3 class="text-white text-xl font-bold">Home Decor</h3>
<p class="text-white/80 text-sm mt-1">Soften your space</p>
</div>
</div>
<!-- Category 4 -->
<div class="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Small colorful felted animal keychains" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTPvq1jvoRcUk7lnnpLhxc7v8QLo5_bl-dji-bKcJugHbfJuSInEbXwnctlbDS0Wrra-TUxeQP9bGcPltxbL3DCiLxAeIU-9lxMove6iNN5qIVuTXctBO44_Pejgds0w18nLOWoN4Em-7sBT79Zu5pQhnZui-3jOUif2OP892nlf0xIbZV00dxLJZ55BIEKozAj53Fg0XCsZALCoGzCFOoCrMPEZcyhrl42adkywsb9w3XYj6ju3iHbIqL7K1MpoCz394pktBkIF0");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6">
<h3 class="text-white text-xl font-bold">Artisanal Key Rings</h3>
<p class="text-white/80 text-sm mt-1">Little touches of wool</p>
</div>
</div>
</div>
</div>
</section>
<!-- Featured Section -->
<section class="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
<div class="flex flex-col lg:flex-row gap-12 items-center">
<div class="lg:w-1/2 order-2 lg:order-1">
<h2 class="font-display text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Artisanal Process</h2>
<div class="space-y-6">
<div class="flex gap-4">
<div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">eco</span>
</div>
<div>
<h4 class="font-bold text-lg text-slate-900 dark:text-slate-100">Pure Mountain Wool</h4>
<p class="text-slate-600 dark:text-slate-400">Sourced from local farms that prioritize ethical shearing and animal welfare.</p>
</div>
</div>
<div class="flex gap-4">
<div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">front_hand</span>
</div>
<div>
<h4 class="font-bold text-lg text-slate-900 dark:text-slate-100">Hand-Felted with Love</h4>
<p class="text-slate-600 dark:text-slate-400">Each piece is meticulously crafted using traditional wet-felting techniques.</p>
</div>
</div>
<div class="flex gap-4">
<div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">water_drop</span>
</div>
<div>
<h4 class="font-bold text-lg text-slate-900 dark:text-slate-100">Natural Dyes</h4>
<p class="text-slate-600 dark:text-slate-400">We use forest-derived pigments to create our signature earthy tones.</p>
</div>
</div>
</div>
</div>
<div class="lg:w-1/2 order-1 lg:order-2">
<div class="rounded-3xl bg-slate-200 dark:bg-slate-800 p-4 rotate-2">
<div class="rounded-2xl overflow-hidden -rotate-2 shadow-xl aspect-video relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Hands working with raw wool and water during the felting process" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRh-VVKgcTjbj1FHBFf8VscseTzd6fAArfT2dAsCABOX-VX339qReGDlAwCnZ0z5wSANAvaxw7W6CRhECGTCZlQqPovbKx0D4a0I9b5Oe2oHOvuPfTeYMdjETVIZWcYCSDHqD3l-OHSy7cGqGTgvfaMm7vvRkJGcYabO8xx_Da5V2I8_gh8FqfAUGQA9Jmj59mpXdlEJ_tCFQlqziBIS7tqEaUVY0klwfigPGvETF8IQcYDAIsuKWbzVNfgpVVOPSplH_XYjZB9yc");'></div>
</div>
</div>
</div>
</div>
</section>
<!-- Newsletter -->
<section class="py-16 px-6 lg:px-20 mb-20">
<div class="max-w-4xl mx-auto bg-background-dark text-white rounded-[2rem] p-8 lg:p-16 text-center relative overflow-hidden">
<!-- Abstract pattern decoration -->
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
<h2 class="font-display text-3xl lg:text-4xl font-bold mb-4 relative z-10">Join Our Nyanopan Community</h2>
<p class="text-white/70 mb-8 max-w-lg mx-auto relative z-10">Subscribe to receive updates on new artisanal releases, stories from our workshop, and cozy living tips.</p>
<form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
<input class="flex-1 bg-white/10 border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-primary focus:border-primary" placeholder="Enter your email" type="email"/>
<button class="bg-primary hover:bg-primary/90 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all">Subscribe</button>
</form>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-900 text-slate-400 py-12 px-6 lg:px-20">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div class="flex flex-col gap-6">
<div class="flex items-center gap-3 text-white">
<span class="material-symbols-outlined text-primary">park</span>
<h2 class="font-display text-xl font-bold">Nyanopan</h2>
</div>
<p class="text-sm leading-relaxed">Bringing the softness and warmth of the forest into your home through artisanal felted crafts.</p>
<div class="flex gap-4">
<a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
<a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">camera</span></a>
</div>
</div>
<div>
<h4 class="text-white font-bold mb-6">Shop</h4>
<ul class="space-y-4 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Handmade Shoes</a></li>
<li><a class="hover:text-white transition-colors" href="#">Felted Bags</a></li>
<li><a class="hover:text-white transition-colors" href="#">Home Decor</a></li>
<li><a class="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-6">Company</h4>
<ul class="space-y-4 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Our Artisans</a></li>
<li><a class="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a class="hover:text-white transition-colors" href="#">Wholesale</a></li>
<li><a class="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-6">Visit Our Workshop</h4>
<p class="text-sm mb-4 leading-relaxed">Nestled in the pines,<br/>123 Forest Path, Aspen CO</p>
<div class="flex items-center gap-2 text-sm text-primary">
<span class="material-symbols-outlined text-sm">location_on</span>
<span data-location="Aspen, Colorado">View on Map</span>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Nyanopan. All rights reserved.</p>
<div class="flex gap-6">
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>
</div>
</body></html>
