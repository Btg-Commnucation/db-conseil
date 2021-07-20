<?php

/*

Template Name: Je recrute

*/


get_header(); ?>

<main class="recrute">
    <section class="hero-banner">
        <div class="container">
            <div class="image-container">
                <?php $imageTop = get_field('image_hero_banner'); ?>
                <img src="<?php echo esc_url($imageTop['url']); ?>" alt="<?php echo esc_attr($imageTop['alt']); ?>">
            </div>
            <div class="hero-banner__content">
                <h1><?php the_title(); ?></h1>
                <div class="content-texte">
                    <?php the_field('hero_banner_texte'); ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>