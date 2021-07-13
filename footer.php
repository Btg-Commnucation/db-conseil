<footer>
    <div class="container">
        <section class="hero-footer">
            <div class="widget-container">
                <img src="<?php echo get_template_directory_uri(); ?>/img/top-logo.svg" alt="DB conseil, un accompagnement sur-mesure">
                <?php dynamic_sidebar( 'footer-address' ); ?>
            </div>
            <div class="widget-container">
                <?php dynamic_sidebar( 'footer-socials' ); ?>
            </div>
            <div class="widget-container">
                <?php dynamic_sidebar( 'nav-menu' ); ?>
            </div>
            <div class="widget-container">
                <?php dynamic_sidebar( 'footer-text' ); ?>
            </div>
        </section>
    </div>
    <section class="mentions">
        <?php dynamic_sidebar( 'mentions-footer' ); ?>
    </section>
</footer>

<?php wp_footer();  ?>
</body>
</html>