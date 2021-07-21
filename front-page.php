<?php get_header(); ?>
<main class="front-page">
    <div id="root">
        <div class="display-none">
            <router-link to="/"></router-link>
            <router-link to="/Description"></router-link>
            <router-link to="/Resultats"></router-link>
        </div>
        <router-view></router-view>
    </div>

    <?php get_template_part('layout/job-front'); ?>
    <?php get_template_part('layout/description-front'); ?>
    <?php get_template_part('layout/resultats'); ?>
</main>
<?php get_footer(); ?>