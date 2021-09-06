<script type="text/x-template" id="description">

<div>
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a rel="noopener noreferrer" href="<?php the_field('lien_offres'); ?>"><?php the_field('texte_lien_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.label}}</h2>
                    <p>{{industriesCategory(displayingOffer.industry)}}</p>
                    <span v-if="displayingOffer.reference">REF : {{displayingOffer.reference}}</span>
                </div>
                <strong>{{displayingOffer.address_state}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li v-if="displayingOffer.city">Ville : {{displayingOffer.city}}</li>
                    <li v-if="displayingOffer.educationLevel">Niveau d'étude requis : {{displayingOffer.educationLevel}}</li>
                    <li v-if="displayingOffer.contract_type">
                        Type de contract : <span v-if="displayingOffer.contract_type == 1">CDI</span><span v-if="displayingOffer.contract_type == 2">Freelance</span><span v-if="displayingOffer.contract_type == 3">Stage</span><span v-if="displayingOffer.contract_type == 4">CDD</span>
                    </li>
                    <li v-if="displayingOffer.contract_durationid">Durée du contract : {{displayingOffer.contract_durationid}} mois</li>
                    <li v-if="displayingOffer.employment_type">
                        Horaires : <span v-if="displayingOffer.employment_type == 99">Mi-temps</span><span v-if="displayingOffer.employment_type == 1">Temps plein</span><span v-if="displayingOffer.employment_type == 100">3 / 4 temps</span>
                    </li>
                    <li v-if="displayingOffer.mobilityid || displayingOffer.mobilityid != 999">
                        Mobilité : <span v-if="displayingOffer.mobilityid == 1">Départementale</span><span v-if="displayingOffer.mobilityid == 2">Régionale</span><span v-if="displayingOffer.mobilityid == 3">Nationale</span><span v-if="displayingOffer.mobilityid == 4">Union européenne</span><span v-if="displayingOffer.mobilityid == 5">Internationale</span><span v-if="displayingOffer.mobilityid == 999">Pas de déplacement</span>
                    </li>
                </ul>
            </section>

            <section class="information">
                <div class="part-one">
                    <h3><?php the_field('titre_information_un'); ?></h3>
                    <p v-html="displayingOffer.description"></p>
                </div>
                <div v-if="displayingOffer.requirements" class="part-one">
                    <h3>Exigences</h3>
                    <p v-html="displayingOffer.requirements"></p>
                </div>
                <div v-if="displayingOffer.benefits" class="part-one">
                    <h3>Avantages</h3>
                    <p v-html="displayingOffer.benefits"></p>
                </div>
                <div v-if="displayingOffer.salary_left || displayingOffer.salary_right" class="part-one">
                    <h3>Salaire</h3>
                    <p>{{displayingOffer.salary_left}} - {{displayingOffer.salary_right}} {{displayingOffer.currency}} par<span v-if="displayingOffer.salary_time_unit == 3 "> an</span> <span v-if="displayingOffer.salary_time_unit == 4"> heure</span><span v-if="displayingOffer.salary_time_unit == 2"> jour</span><span v-if="displayingOffer.salary_time_unit == 1"> mois</span></p>
                </div>
            </section>
        </div>
    </article>
    <section class="postuler-job">
        <div class="container">
            <h2>Postuler à cette offre</h2>
            <?php echo do_shortcode('[contact-form-7 id="223" title="Postuler au poste"]'); ?>
        </div>
    </section>
    <section class="photo-bot">
        <div class="gradient-bottom"></div>
        <div class="gradient-second"></div>
    </section>
</div>


</script>