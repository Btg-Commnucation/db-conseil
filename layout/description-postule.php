<script type="text/x-template" id="description">

<div>
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a href="<?php the_field('lien_offres'); ?>"><?php the_field('texte_lien_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.label}}</h2>
                    <p>{{displayingOffer.industryLabel}}</p>
                    <span v-if="displayOffer">REF : {{displayingOffer.reference}}</span>
                </div>
                <strong>{{displayingOffer.county}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li>Ville : {{displayingOffer.city}}</li>
                    <li>Nom de l'entreprise : {{displayingOffer.company}}</li>
                    <li>Niveau d'étude requis :{{displayingOffer.educationLevel}}</li>
                </ul>
            </section>

            <section class="information">
                <div class="part-one">
                    <h3><?php the_field('titre_information_un'); ?></h3>
                    <p>{{displayingOffer.description}}</p>
                </div>
            </section>
        </div>
    </article>
    <section class="postuler-job">
        <div class="container">
            <h2>Postuler à ce poste</h2>
            <form action="<?php echo get_template_directory_uri(); ?>/../template-validate.php" class="postule-contact" method="post">
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
                        <input type="checkbox" name="consentement" id="consentement" aria-label="J'accepte le traitement de mes données" required>
                        J'accepte que mes données soient traitées par DB conseils. Elles ne seront pas revendues ou échangées avec un tiers.
                    </label>
                </div>
            </form>
        </div>
    </section>
    <section class="photo-bot">
        <div class="gradient-bottom"></div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/bottom-img.jpg" alt="DB Conseils cabinet de recrutement">
        <div class="gradient-second"></div>
    </section>
</div>


</script>