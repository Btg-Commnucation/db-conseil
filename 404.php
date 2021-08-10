<?php get_header(); ?>

<main class="error404">
    <article>
        <h1>Erreur 404</h1>
        <h2>Nous n'avons pas trouvé la page que vous demandiez</h2>
        <a href="<?php home_url(); ?>">Retourner à l'accueil</a>
        <img src="<?php echo get_template_directory_uri(); ?>/img/top-logo.svg" alt="Logo DB conseils, D et B majuscule de couleur bleu">
    </article>
</main>

<?php get_footer(); ?>