<?php

// Enqueue the theme stylesheet
function iti_theme_enqueue_styles() {
    wp_enqueue_style('iti-theme-style', get_stylesheet_uri(), array(), '1.0');
}
add_action('wp_enqueue_scripts', 'iti_theme_enqueue_styles');

// Add theme support
function iti_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'iti_theme_setup');
