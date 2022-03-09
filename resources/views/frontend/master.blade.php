<!DOCTYPE html>
<html>

<head>


    <?php
    $setting = App\Models\GeneralSetting::first();
    ?>

    <meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>{{ $setting->title }}</title>
    <link href="{{ asset('storage/' . $setting->icon) }}" rel="icon" />
    <meta name="description" content="e-commerce platform for mens and womens fashion">
    @include('frontend.partials.css')



</head>

<body>

    <div id="app">
        <router-view :key="$route.fullPath"></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>


   {{-- token receiving at the time action of socialate login  --}}
    @if (isset($_GET['user_token']))
        <script>
            localStorage.setItem("user_token", "{{ $_GET['user_token'] }}");
        </script>
    @endif
    {{-- token receiving at the time action of socialate login  --}}


    <script>

        $(document).on('contextmenu', 'img', function() {
            return false;
        });
    </script>
</body>
</html>
