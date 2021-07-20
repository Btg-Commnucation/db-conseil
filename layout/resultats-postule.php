<script type="text/x-template" id="resultats">
    <div>
        <div class="container">
            <div class="job-container">
                <h2><?php the_field('titre_barre_recherche'); ?></h2>
                <form v-on:submit.prevent="onSubmit">
                    <select v-model="searchCategorie" name="categorie">
                        aria-label="Quelle catégorie de poste ?">
                        <option value="">Catégorie</option>
                        <option v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}
                        </option>
                    </select>
                    <select v-model="searchRegion" name="region"
                        aria-label="Dans quelle région recherchez-vous ?">
                        <option value="">Région</option>
                        <option v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                    </select>
                    <input v-model="searchJobType" type="text" name="post-type" id="post-type"
                        placeholder="Intitulé du poste" aria-label="Intitulé du poste">
                    <router-link class="rechercher-job" :to="{ name: 'Resultats', params: { searchCategorie, searchRegion, searchJobType }
                    }"><?php the_field('texte_bouton_rechercher'); ?></router-link>
                </form>
            </div>
        </div>
        <section class="job">
            <div class="container">
                <h2><?php the_field('titre_carte_description'); ?></h2>
                <h4 v-if="filteredList.length >= 1" class="success">{{ filteredList.length }} offre<span v-if="filteredList.length >= 2">s</span> correspond <span v-if="filteredList.length >= 2" >ent</span> à votre demande</h4>
                <h4 v-if="filteredList.length < 1" class="error">Désolé, nous n'avons trouvé aucun résultat pour votre recherche</h4>
                <div class="card-container">
                    <div v-for='job in filteredList.slice(sliceA, sliceB)' class="card">
                        <strong>{{job.gender}}</strong>
                        <div class="card-detail">
                            <p class="categorie">{{job.race}}</p>
                            <h3>{{job.name}}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend
                                efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui.
                                Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.</p>
                            <router-link class="card-link" :to="{ name: 'Description', param: { job } }">En savoir plus</router-link>
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