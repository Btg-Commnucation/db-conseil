<!DOCTYPE html>
<html <?php language_attributes( ); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(  ); ?>>
    <?php wp_body_open(); ?>
    <header>
        <img src="<?php echo get_template_directory_uri(); ?>/img/top-logo.svg" alt="DB Conseil, Un accompagnement sur-mesure">
        <div class="main-menu__container">
            <?php wp_nav_menu( array(
                'theme_location' => 'main',
                'container' => 'nav',
                'menu_id' => 'main-menu',
                'fallback_cb' => false,
                'items_wrap' => '<div class="menu-btn">
                    <div class="menu-btn__burger">
                    </div>
                </div><ul id="%1$s" class="%2$s" hidden>%3$s</ul>',
            ) ); ?>
        </div>
        <div class="form-button__container">
            <a href="#">Je postule</a>
            <a href="#">Je recrute</a>
        </div>
    </header>