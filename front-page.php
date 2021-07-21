<?php get_header(); ?>
<main class="front-page">
    <div id="root">
        <router-link to="/"></router-link>
        <router-link to="/Description"></router-link>
        <router-link to="/Resultats"></router-link>
    </div>

    <?php get_template_part('layout/job-front'); ?>
</main>
<?php get_footer(); ?>