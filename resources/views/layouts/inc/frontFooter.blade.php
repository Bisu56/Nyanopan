<footer class="backgroundfooter text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        @if(isset($site_settings['facebook_url']) && $site_settings['facebook_url'])
        <a class="btn btn-outline-light btn-floating m-1" href="{{$site_settings['facebook_url']}}" role="button"
          ><i class="fab fa-facebook-f"></i
        ></a>
        @endif
  
        @if(isset($site_settings['twitter_url']) && $site_settings['twitter_url'])
        <a class="btn btn-outline-light btn-floating m-1" href="{{$site_settings['twitter_url']}}" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
        @endif
  
        @if(isset($site_settings['instagram_url']) && $site_settings['instagram_url'])
        <a class="btn btn-outline-light btn-floating m-1" href="{{$site_settings['instagram_url']}}" role="button"
          ><i class="fab fa-instagram"></i
        ></a>
        @endif

        @if(isset($site_settings['youtube_url']) && $site_settings['youtube_url'])
        <a class="btn btn-outline-light btn-floating m-1" href="{{$site_settings['youtube_url']}}" role="button"
          ><i class="fab fa-youtube"></i
        ></a>
        @endif
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{date('Y')}} Copyright:
      <a class="text-white" href="/">{{ $site_settings['site_name'] ?? 'Nyanopan' }}</a>
    </div>
    <!-- Copyright -->
  </footer>