<?php

/*

Template Name: Je postule

*/


?>

<?php get_header(); ?>

<main class="postule-recrute">
    <section class="hero-banner">
        <div class="container">
            <h1><?php the_title(); ?></h1>
        </div>
    </section>
    <div id="root">
        <div class="display-none">
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <router-link to="/Resultats">
                <p>Rechercher</p>
            </router-link>
            <router-link to="/Description">
                <p>Description</p>
            </router-link>
        </div>
        <router-view></router-view>
    </div>



    <script type="text/x-template" id="home">
        <section class="job">
            <div class="container">
                <h2><?php the_field('titre_carte'); ?></h2>
                <div class="card-container">
                    <div v-for='job in slicePost' class="card">
                        <strong>{{job.gender}}</strong>
                        <div class="card-detail">
                            <p class="categorie">{{job.race}}</p>
                            <h3>{{job.name}}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </script>
</main>

<?php get_footer(); ?>