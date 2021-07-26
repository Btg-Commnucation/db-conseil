<script type="text/x-template" id="home">
    <div>
        <section class="hero-banner">
            <div class="background-image"></div>
            <div class="gradient">
                <div class="container">
                    <h1><?php the_field('main_title'); ?></h1>
                    <div class="job-container">
                        <h2><?php the_field('titre_barre_recherche'); ?></h2>
                        <form v-on:submit.prevent="onSubmit">
                            <select v-model="searchCategorie" name="categorie" id="categorie"
                                aria-label="Quelle catégorie de poste ?">
                                <option value="">Catégorie</option>
                                <option v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}
                                </option>
                            </select>
                            <select v-model="searchRegion" name="region" id="region"
                                aria-label="Dans quelle région recherchez-vous ?">
                                <option value="">Région</option>
                                <option v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                            </select>
                            <input v-model="searchJobType" type="text" name="post-type" id="post-type"
                                placeholder="Intitulé du poste" aria-label="Intitulé du poste" autocomplete="off">
                            <router-link
                                :to="{ name: 'Resultats', params: { searchCategorie, searchRegion, searchJobType }}"
                                class="rechercher-job"><?php the_field('texte_bouton_rechercher'); ?></router-link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="job">
            <div class="container">
                <h2><?php the_field('titre_carte'); ?></h2>
                <div class="card-container">
                    <div v-for='job in slicePost' class="card">
                        <strong>{{job.county}}</strong>
                        <div class="card-detail">
                            <p class="categorie">{{job.industryLabel}}</p>
                            <h3>{{job.label}}</h3>
                            <p>{{job.description}}</p>
                            <router-link class="card-link" :to="{ name: 'Description', params: { job } }"><?php the_field('texte_bouton_en_savoir_plus'); ?>
                            </router-link>
                        </div>
                    </div>
                </div>
                <a class="offres-link" href="<?php the_field('lien_toutes_offres'); ?>"><?php the_field('texte_toutes_offres'); ?></a>
            </div>
        </section>
    </div>
</script>