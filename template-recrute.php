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
    <section class="accompagnement">
        <div class="container">
            <h2><?php the_field('titre_partie_deux') ?></h2>
            <?php if ( have_rows('etape_accompagnement') ) : ?>
                <ul>
                    <?php while ( have_rows('etape_accompagnement') ) : the_row(); ?>
                        <li>
                            <div class="etape-image-container">
                                <?php $imageEtape = get_sub_field('image'); ?>
                                <img src="<?php echo esc_url($imageEtape['url']) ?>" alt="<?php echo esc_attr($imageEtape['alt']); ?>">
                            </div>
                            <h3><?php the_sub_field('titre_etape'); ?></h3>
                            <h3><?php the_sub_field('nom_etape'); ?></h3>
                            <p><?php the_sub_field('texte_etape'); ?></p>
                        </li>
                    <?php endwhile; ?>
                </ul>
            <?php endif; ?>
        </div>
    </section>
    <section class="contact-form">
        <div class="container">
            <h2><?php the_field('titre_formulaire_de_contact'); ?></h2>
            <?php echo do_shortcode('[contact-form-7 id="55" title="Formulaire de contact 1"]'); ?>
            <p class="needed-fields">Les champs marqués d'un astérisque (*), sont des champs obligatoires</p>
        </div>
    </section>
    <section class="photo-bot">
        <div class="gradient-bottom"></div>
        <div class="gradient-second"></div>
    </section>
</main>

<?php get_footer(); ?>