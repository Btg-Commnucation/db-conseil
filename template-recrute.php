<?php get_header(); ?>

<main class="recrute">
    <section class="hero-banner">
        <div class="container">
            <div class="image-container"></div>
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