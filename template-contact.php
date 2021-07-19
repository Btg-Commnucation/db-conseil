<?php 
/*

Template Name: Contact

*/
get_header();
$main_image = get_field('image');
$logo_image = get_field('logo');
?>
<main class="contact">
    <section class="hero-banner">
        <div class="container">
            <h1><?php the_title(); ?></h1>
            <div class="adresse">
                <img src="<?php echo esc_url($main_image['url']); ?>" class="main-image" alt="<?php echo esc_attr($main_image['alt']); ?>">
                <div class="adresse-detail">
                    <img src="<?php echo esc_url($logo_image['url']); ?>" alt="<?php echo esc_attr($logo_image['alt']); ?>">
                    <?php the_field('adresse_contract') ?>
                </div>
            </div>
        </div>
    </section>
    <section class="contact-form">
        <div class="container">
            <h2><?php the_field('titre_formulaire_de_contact'); ?></h2>
            <?php echo do_shortcode('[contact-form-7 id="55" title="Formulaire de contact 1"]'); ?>
        </div>
    </section>

</main>

<?php get_footer(); ?>