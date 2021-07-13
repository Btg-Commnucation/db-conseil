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
            <div class="widget-container"></div>
            <div class="widget-container"></div>
        </section>
        <section class="mentions"></section>
    </div>
</footer>

<?php wp_footer();  ?>
</body>
</html>