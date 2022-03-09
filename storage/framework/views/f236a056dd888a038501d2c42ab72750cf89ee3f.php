<!DOCTYPE html>
<html>

<head>


    <?php
    $setting = App\Models\GeneralSetting::first();
    ?>

    <meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title><?php echo e($setting->title); ?></title>
    <link href="<?php echo e(asset('storage/' . $setting->icon)); ?>" rel="icon" />
    <meta name="description" content="e-commerce platform for mens and womens fashion">
    <?php echo $__env->make('frontend.partials.css', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>



</head>

<body>

    <div id="app">
        <router-view :key="$route.fullPath"></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
    <script src="<?php echo e(asset('js/app.js')); ?>" type="text/javascript"></script>


   
    <?php if(isset($_GET['user_token'])): ?>
        <script>
            localStorage.setItem("user_token", "<?php echo e($_GET['user_token']); ?>");
        </script>
    <?php endif; ?>
    


    <script>

        $(document).on('contextmenu', 'img', function() {
            return false;
        });
    </script>
</body>
</html>
<?php /**PATH D:\project\sufiglobal_web_app\resources\views/frontend/master.blade.php ENDPATH**/ ?>