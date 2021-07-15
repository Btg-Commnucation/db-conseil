<!DOCTYPE html>
<html <?php language_attributes( ); ?>>
<head>
    <?php $curl = curl_init('https://gorest.co.in/public/v1/posts');
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($curl);
    if ($data === false) {
        var_dump(curl_error($curl));
    } else {
        $data = json_decode($data,  true);
        $api = json_encode($data);
    }
    curl_close($curl);
    ?>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <script>
        const jsonApi = <?php echo $api ?>;;
    </script>
</head>
<body <?php body_class(  ); ?>>
    <?php wp_body_open(); ?>
    <header>
        <img class="horizontal" src="<?php echo get_template_directory_uri(); ?>/img/top-logo.svg" alt="DB Conseil, Un accompagnement sur-mesure">
        <img class="vertical" src="<?php echo get_template_directory_uri(); ?>/img/top-logo-verti.svg" alt="DB Conseil, Un accompagnement sur-mesure">
        <div class="main-menu__container">
            <?php wp_nav_menu( array(
                'theme_location' => 'main',
                'container' => 'nav',
                'menu_id' => 'main-menu',
                'fallback_cb' => false,
                'items_wrap' => '<div class="menu-btn">
                    <div class="menu-btn__burger">
                    </div>
                </div><ul id="%1$s" class="%2$s" >%3$s</ul>',
            ) ); ?>
            <div class="form-button__container">
                <a href="#">Je postule</a>
                <a href="#">Je recrute</a>
            </div>
        </div>
    </header>