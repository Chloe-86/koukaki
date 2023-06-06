<?php
function montheme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('theme', get_stylesheet_directory_uri() . '/css/theme.css');
}

add_action('wp_enqueue_scripts', 'montheme_enqueue_styles');



function montheme_enqueue_script() {
   
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', array(), null, true);
    wp_register_script('mon-script', get_stylesheet_directory_uri() . '/js/mon-script.js', array('jquery'), null, true);
    wp_enqueue_script('mon-script');
}
add_action('wp_enqueue_scripts', 'montheme_enqueue_script');



// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
