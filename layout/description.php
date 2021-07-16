<script type="text/x-template" id="description">

<div>
    <aside class="hero-banner">
        <div class="background-image"></div>
        <div class="gradient">
            <div class="container">
                <h1><?php the_field('main_title'); ?></h1>
                <div class="job-container">
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
    <article class="job-description">
        <div class="container">
            <router-link to="/"><?php the_field('retour_aux_offres'); ?></router-link>
            <section class="title">
                <div class="title-container">
                    <h2>{{displayingOffer.name}}</h2>
                    <p>{{displayingOffer.race}}</p>
                </div>
                <strong>{{displayingOffer.gender}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li>Type : {{displayingOffer.gender}}</li>
                    <li>Nom de l'entreprise : {{displayingOffer.spouse}}</li>
                    <li>Localisation :{{displayingOffer.birk}}</li>
                </ul>
            </section>

            <section class="information">
                <div class="part-one">
                    <h3><?php the_field('titre_information_un'); ?></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.</p>
                </div>
                <div class="part-two">
                    <h3><?php the_field('titre_information_deux'); ?></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mi vitae eleifend efficitur. Nullam eu ipsum libero. Fusce vitae augue eu odio porta sollicitudin ut non dui. Vivamus mollis diam vel diam consequat, quis posuere felis suscipit.</p>
                </div>
            </section>
        </div>
    </article>
</div>

</script>