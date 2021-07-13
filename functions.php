<?php 

// Ajouter la prise en charge des images de mise en avant
add_theme_support( 'post_thumbnails' );


// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

function pdw_load_stylesheets_and_scripts() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css', array(), '1.0');
    // wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action( 'wp_enqueue_scripts', 'pdw_load_stylesheets_and_scripts' );