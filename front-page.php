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
    <section class="cabinet">
        <div class="container">
            <aside>
                <div id="stephanie">
                    <?php $imageStephanie = get_field('image_membre_un'); ?>
                    <img src="<?php echo esc_url($imageStephanie['url']); ?>" alt="<?php echo esc_attr($imageStephanie['alt']); ?>">
                    <a href="<?php the_field('lien_linkedin_membre_un'); ?>"><?php the_field('nom_membre_un'); ?></a>
                </div>
                <div id="pauline">
                    <?php $imagePauline = get_field('image_membre_deux'); ?>
                    <img src="<?php echo esc_url($imagePauline['url']); ?>" alt="<?php echo esc_attr($imagePauline['alt']); ?>">
                    <a href="<?php the_field('lien_linkedin_membre_deux'); ?>"><?php the_field('nom_membre_deux'); ?></a>
                </div>
            </aside>
            <article>
                <h2><?php the_field('titre_cabinet_principal'); ?></h2>
                <?php the_field('texte_cabinet'); ?>
                <a href="<?php the_field('lien_page_cabinet'); ?>"><?php the_field('texte_lien_page_cabinet'); ?></a>
            </article>
        </div>
    </section>
</main>
<?php get_footer(); ?>