<script type="text/x-template" id="description">

<div>
    <aside class="hero-banner">
        <div class="background-image"></div>
        <div class="gradient">
            <div class="container">
                <h1><?php the_field('main_title'); ?></h1>
                <div class="job-container" :class="!startSearching && dimension">
                    <h2><?php the_field('titre_barre_recherche'); ?></h2>
                    <form v-if="startSearching" v-on:submit.prevent="onSubmit">
                        <div class="select">
                            <select v-model="searchCategorie" name="categorie" id="categorie" aria-label="Quelle catégorie de poste ?">
                                <option value="">Catégorie</option>
                                <option class="deroulant" v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}</option>
                            </select>
                        </div>
                        <div class="select">
                            <select v-model="searchRegion" name="region" id="region" aria-label="Dans quelle région recherchez-vous ?">
                                <option value="">Région</option>
                                <option class="deroulant" v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                            </select>
                        </div>
                        <input v-model="searchJobType" type="text" name="post-type" id="post-type" placeholder="Intitulé du poste" aria-label="Intitulé du poste" autocomplete="off">
                        <router-link :to="{ name: 'Resultats', params: { searchCategorie, searchRegion, searchJobType }}" class="rechercher-job" ><?php the_field('texte_bouton_rechercher'); ?></router-link>
                    </form>
                </div>
                <div v-if="!startSearching" v-on:click="showSearchForm" class="plus">
                    <strong>+</strong>
                </div>
            </div>
        </div>
    </aside>
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a class="back-offre" href="/db-conseils/nos-offres"><?php the_field('retour_aux_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.label}}</h2>
                    <p>{{displayingOffer.industryLabel}}</p>
                    <span v-if="displayingOffer.reference">REF : {{displayingOffer.reference}}</span>
                </div>
                <strong>{{displayingOffer.address_state}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li v-if="displayingOffer.city">Ville : {{displayingOffer.city}}</li>
                    <li v-if="displayingOffer.company">Nom de l'entreprise : {{displayingOffer.company}}</li>
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
                    <p>{{displayingOffer.description}}</p>
                </div>
                <div v-if="displayingOffer.requirements" class="part-one">
                    <h3>Exigences</h3>
                    <p>{{displayingOffer.requirements}}</p>
                </div>
                <div v-if="displayingOffer.benefits" class="part-one">
                    <h3>Avantages</h3>
                    <p>{{displayingOffer.benefits}}</p>
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