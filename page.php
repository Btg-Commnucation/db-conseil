<?php get_header(); ?>
<main class="cabinet">
    <section class="hero-banner">
        <div class="container">
            <div class="article-container">
                <div class="left-side">
                    <h1><?php the_title(); ?></h1>
                    <h2><?php the_field('cabinet'); ?></h2>
                    <div class="short-text"><?php the_field('texte_court'); ?></div>
                    <div class="paragraphe">
                        <?php the_field('texte_long_first'); ?>
                    </div>
                </div>
                <div class="right-side">
                    <?php $image_premiere = get_field('image_first'); ?>
                    <img src="<?php echo esc_url($image_premiere['url']); ?>" alt="<?php echo esc_attr($image_premiere['alt']); ?>">
                </div>
            </div>
            <div class="article-container bottom-article">
                <div class="left-side">
                    <?php $image_second = get_field('image_second'); ?>
                    <img src="<?php echo esc_url($image_second['url']); ?>" alt="<?php echo esc_attr($image_second['alt']); ?>">
                </div>
                <div class="right-side">
                    <?php the_field('texte_long_second'); ?>
                </div>
            </div>
        </div>
    </section>
    <section class="the-team">
        <div class="container">
            <h2><?php the_field('titre_qui_sommes_nous'); ?></h2>
            <aside>
                <div id="pauline">
                   <div class="img-container">
                       <?php $image_pauline = get_field('image_pauline'); ?>
                       <img src="<?php echo esc_url($image_pauline['url']); ?>" alt="<?php echo esc_attr($image_pauline['alt']); ?>">
                   </div> 
                   <a href="<?php the_field('linkedin_pauline'); ?>" rel="noopener noreferrer" target="_blank"><?php the_field('pauline'); ?></a>
                </div>
                <div id="sephanie">
                    <div class="img-container">
                        <?php $image_stephanie = get_field('image_stephanie'); ?>
                        <img src="<?php echo esc_url($image_stephanie['url']); ?>" alt="<?php echo esc_attr($image_stephanie['alt']); ?>">
                    </div>
                    <a href="<?php the_field('linkedin_stephanie'); ?>" rel="noopener noreferrer" target="_blank"><?php the_field('stephanie'); ?></a>
                </div>
            </aside>
            <article>
                <?php the_field('texte_qui_sommes_nous'); ?>
            </article>
        </div>
    </section>
</main>
<?php get_footer(); ?>