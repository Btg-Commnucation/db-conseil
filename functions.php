<?php 

// Ajouter la prise en charge des images de mise en avant
add_theme_support( 'post_thumbnails' );


// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

function pdw_load_stylesheets_and_scripts() {
    wp_enqueue_style( 'splide', get_template_directory_uri() . '/css/splide-core.min.css', array(), '1.0');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css', array(), '1.0');
    wp_enqueue_script( 'splidejs', get_template_directory_uri() .'/js/splide.min.js', array(), '1.0', true);
    wp_enqueue_script( 'vuecdn', 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js', array(), '1.0', true);
	wp_enqueue_script('vuerouter', 'https://unpkg.com/vue-router/dist/vue-router.js', array(), 1.0, true);
    wp_enqueue_script( 'vue', get_template_directory_uri() . '/js/vue.js', array(), '1.0', true);
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action( 'wp_enqueue_scripts', 'pdw_load_stylesheets_and_scripts' );

if( function_exists( 'acf_add_options_page' ) ) {
	
	acf_add_options_page( array(
		'page_title' 	=> 'Options Token',
		'menu_title'	=> 'Options',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
        'position'    	=> 2
	) );	
}

register_nav_menus( array(
    'main' => 'Menu principal',
    'footer-main' => 'Menu bas de page',
) );

register_sidebar( array(
	'id' => 'footer-address',
	'name' => 'Adresse du bas de page',
) );
register_sidebar( array(
	'id' => 'footer-socials',
	'name' => 'Réseaux sociaux du bas de page',
) );
register_sidebar( array(
	'id' => 'nav-menu',
	'name' => 'Menu du bas de page',
) );
register_sidebar( array(
	'id' => 'mentions-footer',
	'name' => 'Mentions du bas de page',
) );

// Remove contact Form 7 auto p
add_filter('wpcf7_autop_or_not', '__return_false');
