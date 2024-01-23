const mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
    .styles([
        'resources/assets/plugins/bootstrap/css/bootstrap.min.css',
        'resources/assets/plugins/feather/feather.css',
        // 'resources/assets/plugins/icons/flags/flags.css',
        'resources/assets/plugins/fontawesome/css/fontawesome.min.css',
        'resources/assets/plugins/fontawesome/css/all.min.css',
        'resources/assets/css/style.css',
    ], 'public/css/plantilla.css')
    .scripts([
        'resources/assets/js/jquery-3.6.0.min.js',
        'resources/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
        'resources/assets/js/feather.min.js',
        'resources/assets/plugins/slimscroll/jquery.slimscroll.min.js',
        'resources/assets/plugins/apexchart/apexcharts.min.js',
        'resources/assets/plugins/apexchart/chart-data.js',
        'resources/assets/js/script.js',
    ], 'public/js/plantilla.js')
    .copyDirectory('resources/assets/img', 'public/assets/img')
    .copyDirectory('resources/assets/plugins/fontawesome/webfonts', 'public/webfonts')
    .copyDirectory('resources/assets/plugins/feather/fonts', 'public/css/fonts')
    .copyDirectory('resources/assets/fonts', 'public/fonts')
    .vue();
