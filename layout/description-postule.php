<script type="text/x-template" id="description">

<div>
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a href="<?php the_field('lien_offres'); ?>"><?php the_field('texte_lien_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.label}}</h2>
                    <p>{{displayingOffer.industryLabel}}</p>
                    <span v-if="displayOffer.reference">REF : {{displayingOffer.reference}}</span>
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
            <?php echo do_shortcode('[contact-form-7 id="223" title="Postuler au poste"]'); ?>
        </div>
    </section>
    <section class="photo-bot">
        <div class="gradient-bottom"></div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/bottom-img.jpg" alt="DB Conseils cabinet de recrutement">
        <div class="gradient-second"></div>
    </section>
</div>


</script>