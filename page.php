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
</main>
<?php get_footer(); ?>