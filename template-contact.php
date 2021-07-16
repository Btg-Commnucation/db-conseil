<?php 
/*

Template Name: Contact

*/
get_header();
?>
<main class="contact">
    <section class="hero-banner">
        <div class="container">
            <h1><?php the_title(); ?></h1>
            <div class="adresse">
                <img src="" alt="">
                <div class="adresse-detail">
                    <img src="" alt="">
                    <?php the_field('adresse_contact') ?>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>