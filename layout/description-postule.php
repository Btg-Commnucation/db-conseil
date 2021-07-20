<script type="text/x-template" id="description">

<div>
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a href="<?php the_field('lien_offres'); ?>"><?php the_field('texte_lien_offres'); ?></a>
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