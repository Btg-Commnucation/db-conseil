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
                        <select v-model="searchCategorie" name="categorie" id="categorie" aria-label="Quelle catégorie de poste ?">
                            <option value="">Catégorie</option>
                            <option v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}</option>
                        </select>
                        <select v-model="searchRegion" name="region" id="region" aria-label="Dans quelle région recherchez-vous ?">
                            <option value="">Région</option>
                            <option v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                        </select>
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
            <a class="back-offre" href="http://localhost/db-conseil/nos-offres"><?php the_field('retour_aux_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.label}}</h2>
                    <p>{{displayingOffer.industryLabel}}</p>
                    <span v-if="displayingOffer.reference">REF : {{displayingOffer.reference}}</span>
                </div>
                <strong>{{displayingOffer.county}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li>Ville : {{displayingOffer.city}}</li>
                    <li>Nom de l'entreprise : {{displayingOffer.company}}</li>
                    <li>Niveau d'étude requis : {{displayingOffer.educationLevel}}</li>
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
        <div class="gradient-second"></div>
    </section>
</div>

</script>