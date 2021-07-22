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
        <section class="postuler-job">
            <div class="container">
                <h2><?php the_field('titre_envoi_candidature'); ?></h2>
                <form action="" class="postule-contact" method="post">
                    <div class="civilite">
                        <p>Civilité :</p>
                        <div class="civilite-container">
                            <label for="madame">
                                <input name="civilite" id="madame" aria-label="Madame" value="madame" type="radio">
                                Madame
                            </label>
                            <label for="monsieur">
                                <input name="civilite" id="monsieur" aria-label="monsieur" value="monsieur" type="radio">
                                Monsieur
                            </label>
                        </div>

                    </div>
                    <label for="name">
                        Nom* :
                        <input name="name" id="name" placeholder="Le Port" aria-label="Votre nom" type="text" required>
                    </label>
                    <label for="prenom">
                        Prénom* :
                        <input name="prenom" id="prenom" aria-label="Votre Prénom" placeholder="Le Port" type="text" required>
                    </label>
                    <label for="email">
                        Email* :
                        <input name="email" id="email" aria-label="Votre e-mail" placeholder="guillaume@btg-communication.fr" type="email" required>
                    </label>
                    <label for="telephone">
                        Téléphone* :
                        <input name="telephone" id="telephone" aria-label="Votre numéro de téléphone" placeholder="0246655115" type="tel" required>
                    </label>
                    <label for="adresse">
                        Adresse* :
                        <input name="adresse" id="adresse" aria-label="Votre adresse" placeholder="12 rue de l'exemple" type="text">
                    </label>
                    <label for="town">
                        Ville* :
                        <input name="town" id="town" aria-label="Ville où vous résidez" placeholder="Tours" type="text">
                    </label>
                    <label for="postal">
                        Code Postal* :
                        <input id="postal" name="postal" aria-label="Votre code postal" placeholder="37000" type="text">
                    </label>
                    <label for="poste">
                        Poste recherché* :
                        <input id="poste" name="poste" aria-label="Le poste recherché" placeholder="Conducteur de travaux" type="text">
                    </label>
                    <label for="zonegeo">
                        Zone géographique* :
                        <input name="zonegeo" id="zonegeo" aria-label="Votre zone géographique pour le poste" placeholder="Indre-et-loire" type="text">
                    </label>
                    <label for="etudes">
                        Années d'études* :
                        <input name="etudes" id="etudes" aria-label="Nombres d'années d'études" placeholder="8" type="number">
                    </label>
                    <label for="message">
                        Message* :
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </label>
                    <label for="cv">
                        <input type="file" name="cv" id="cv" aria-label="Envoyer un fichier" accept=".doc,.docx,.pdf">
                        (Fichiers de maximum 2mo - Formats acceptés : pdf / doc / docx.)
                    </label>
                    <div class="send">
                        <label for="envoyer">
                            Envoyer ma candidature
                            <input type="submit" id="envoyer" name="envoyer" value="Envoyer">
                        </label>
                        <label for="consentement">
                            <input type="checkbox" name="consentement" id="consentement" aria-label="J'accepte le traitement de mes données">
                            J'accepte que mes données soient traitées par DB conseils. Elles ne seront pas revendues ou échangées avec un tiers.
                        </label>
                    </div>
                </form>
            </div>
        </section>
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
        <?php get_template_part('layout/description-postule'); ?>
    </main>
    
    <?php get_footer(); ?>