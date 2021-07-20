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

        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>



    <script type="text/x-template" id="home">
    <div>

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
                            <router-link class="card-link" :to="{ name: 'Description', params: { job } }">En savoir plus</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="postuler-job"></section>
        <section class="bottom-part">
            <div class="container">
                <h2><?php the_field('titre_bottom') ?></h2>
                <p><?php the_field('texte_bottom') ?></p>
                <div class="article-bottom">
                    <aside>
                        <?php $image = get_field('image'); ?>
                        <img src="<?php echo esc_url($image['url']) ?>" alt="<?php echo esc_attr($image['alt']); ?>">
                    </aside>
                    <article>
                        <?php if( have_rows('nos_qualites') ) : ?>
                            <?php while( have_rows('nos_qualites') ) : the_row(); ?>
                                <div class="texte-card">
                                    <h3><?php the_sub_field('titre'); ?></h3>
                                    <p><?php the_sub_field('texte'); ?></p>
                                </div>
                            <?php endwhile; ?>
                        <?php endif; ?>
                        <div class="lien-container">
                            <a href="<?php the_field('lien_bottom') ?>"><?php the_field('texte_lien') ?></a>
                            <p><?php the_field('texte_post_lien'); ?></p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
    </script>
        <?php get_template_part('layout/resultats-postule'); ?>
        <?php get_template_part('layout/description-postule'); ?>
    </main>
    
    <?php get_footer(); ?>