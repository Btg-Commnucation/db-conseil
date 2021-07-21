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
        <span class="telescope"></span>
    </section>
    <section class="post-recruit">
        <div class="postule">
            <h2><?php the_field('titre_fond_bleu'); ?></h2>
            <div class="texte-fond">
                <?php the_field('texte_fond_bleu'); ?>
            </div>
            <a href="<?php the_field('lien_fond_bleu'); ?>"><?php the_field('texte_lien_fond_bleu'); ?></a>
        </div>
        <div class="recrute">
            <h2><?php the_field('titre_fond_blanc'); ?></h2>
            <div class="texte-fond">
                <?php the_field('texte_fond_blanc'); ?>
            </div>
            <a href="<?php the_field('lien_fond_blanc'); ?>"><?php the_field('texte_lien_fond_blanc'); ?></a>
        </div>
    </section>
    <section class="temoignages">
        <div class="container">
            <h2><?php the_field('titre_temoignages'); ?></h2>
            <?php if ( have_rows('temoignages') ) : ?>
                <div class="splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <?php while ( have_rows('temoignages') ) : the_row(); ?>
                                <li class="splide__slide">
                                    <div class="temoignages-container">
                                        <?php $imagePremierTemoin = get_sub_field('photo_premier_temoignage'); ?>
                                        <div class="slider-image__container">
                                            <img src="<?php echo esc_url($imagePremierTemoin['url']); ?>" alt="<?php echo esc_attr($imagePremierTemoin['alt']); ?>">
                                        </div>
                                        <article>
                                            <p><?php the_sub_field('texte_premier_temoignage'); ?></p>
                                            <strong><?php the_sub_field('nom_et_profession_premier_temoignage'); ?></strong>
                                        </article>
                                    </div>
                                    <span class="separator"></span>
                                    <div class="temoignages-container">
                                        <?php $imageDeuxiemeTemoin = get_sub_field('photo_deuxieme_temoignage'); ?>
                                        <div class="slider-image__container">
                                            <img src="<?php echo esc_url($imageDeuxiemeTemoin['url']) ?>" alt="<?php echo esc_attr($imageDeuxiemeTemoin['alt']); ?>">
                                        </div>
                                        <article>
                                            <p><?php the_sub_field('texte_deuxieme_temoignage'); ?></p>
                                            <strong><?php the_sub_field('nom_et_profession_deuxieme_temoignage'); ?></strong>
                                        </article> 
                                    </div>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>
<?php get_footer(); ?>