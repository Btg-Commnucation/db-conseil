<!DOCTYPE html>
<html <?php language_attributes( ); ?>>
<head>
<?php

    $url = "https://the-one-api.dev/v2/character?limit=100";

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
    "Accept: application/json",
    "Authorization: Bearer T1YC-rSPre1FwuxxRpzS",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    //for debug only!
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    $resp = curl_exec($curl);
    if($resp === false) {
        var_dump($resp);
    } else {
     $resp = json_decode($resp, true);
     $sendingData = json_encode($resp);
    }
    curl_close($curl);

?>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <script>
        const jsonApi = <?php echo $sendingData ?>;;
    </script>
</head>
<body <?php body_class(  ); ?>>
    <?php wp_body_open(); ?>
    <header>
        <a class="homeurl" href="<?php echo home_url(); ?>">
            <img class="horizontal" src="<?php echo get_template_directory_uri(); ?>/img/top-logo.svg" alt="DB Conseil, Un accompagnement sur-mesure">
            <img class="vertical" src="<?php echo get_template_directory_uri(); ?>/img/top-logo-verti.svg" alt="DB Conseil, Un accompagnement sur-mesure">
        </a>
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
            <div class="form-button__container">
                <a href="http://localhost/db-conseil/je-postule">Je postule</a>
                <a href="http://localhost/db-conseil/je-recrute">Je recrute</a>
            </div>
        </div>
    </header>