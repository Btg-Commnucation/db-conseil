<script type="text/x-template" id="resultats">
    <div>
        <section class="hero-banner">
            <div class="background-image"></div>
            <div class="gradient">
                <div class="container">
                    <h1><?php the_field('main_title'); ?></h1>
                    <div class="job-container">
                        <h2><?php the_field('titre_barre_recherche'); ?></h2>
                        <form v-on:submit.prevent="onSubmit">
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
                            <input v-model="searchJobType" type="text" name="post-type" id="post-type"
                                placeholder="Intitulé du poste" aria-label="Intitulé du poste">
                            <router-link class="rechercher-job" :to="{ name: 'Resultats', params: { searchCategorie, searchRegion, searchJobType }
                            }"><?php the_field('texte_bouton_rechercher'); ?></router-link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="job">
            <div class="container">
                <h4 v-if="filteredList.length >= 1" class="success">{{ filteredList.length }} offre<span v-if="filteredList.length >= 2">s</span> correspond<span v-if="filteredList.length >= 2">ent</span> à votre demande</h4>
                <h4 v-if="filteredList.length < 1" class="error">Désolé, nous n'avons trouvé aucun résultat pour votre recherche</h4>
                <div class="card-container">
                    <div v-for='job in filteredList.slice(sliceA, sliceB)' class="card">
                        <strong>{{job.address_state}}</strong>
                        <div class="card-detail">
                            <p class="categorie">{{industriesCategory(job.industy)}}</p>
                            <h3>{{job.label}}</h3>
                            <p v-if="job.description.length<208" v-html="job.description"></p>
                            <p v-else v-html="job.description.substring(0, 208) + '...'"></p>
                            <router-link class="card-link" :to="{ name: 'Description', params: { job } }">En savoir plus</router-link>
                        </div>
                    </div>
                </div>
                <ul class="pagination">
                    <li v-for="page in pageCount" v-on:click="nextPage(page)" :class="activePage(page)">{{page}}</li>
                </ul>
            </div>
        </section>
    </div>
</script>