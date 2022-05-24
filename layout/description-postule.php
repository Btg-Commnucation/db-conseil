<script type="text/x-template" id="description">

<div v-if="!loading">
    <article class="job-description" :class="startSearching && 'openSearch'">
        <div class="container">
            <a rel="noopener noreferrer" href="<?php the_field('lien_offres'); ?>"><?php the_field('texte_lien_offres'); ?></a>
            <section class="title">
                <div class="title-container">
                    <h2>{{job.label}}</h2>
                    <p>{{industriesCategory(job.industry)}}</p>
                    <span v-if="job.reference">REF : {{job.reference}}</span>
                </div>
                <strong>{{job.address_state}}</strong>
            </section>
            <section class="details">
                <h3><?php the_field('type_doffre'); ?></h3>
                <ul>
                    <li v-if="job.city">Ville : {{job.city}}</li>
                    <li v-if="job.educationLevel">Niveau d'étude requis : {{job.educationLevel}}</li>
                    <li v-if="job.contract_type">
                        Type de contract : <span v-if="job.contract_type == 1">CDI</span><span v-if="job.contract_type == 2">Freelance</span><span v-if="job.contract_type == 3">Stage</span><span v-if="job.contract_type == 4">CDD</span>
                    </li>
                    <li v-if="job.contract_durationid">Durée du contract : {{job.contract_durationid}} mois</li>
                    <li v-if="job.employment_type">
                        Horaires : <span v-if="job.employment_type == 99">Mi-temps</span><span v-if="job.employment_type == 1">Temps plein</span><span v-if="job.employment_type == 100">3 / 4 temps</span>
                    </li>
                    <li v-if="job.mobilityid || job.mobilityid != 999">
                        Mobilité : <span v-if="job.mobilityid == 1">Départementale</span><span v-if="job.mobilityid == 2">Régionale</span><span v-if="job.mobilityid == 3">Nationale</span><span v-if="job.mobilityid == 4">Union européenne</span><span v-if="job.mobilityid == 5">Internationale</span><span v-if="job.mobilityid == 999">Pas de déplacement</span>
                    </li>
                </ul>
            </section>

            <section class="information">
                <div class="part-one">
                    <h3><?php the_field('titre_information_un'); ?></h3>
                    <p v-html="job.description"></p>
                </div>
                <div v-if="job.requirements" class="part-one">
                    <h3>Exigences</h3>
                    <p v-html="job.requirements"></p>
                </div>
                <div v-if="job.benefits" class="part-one">
                    <h3>Avantages</h3>
                    <p v-html="job.benefits"></p>
                </div>
                <div v-if="job.salary_left || job.salary_right" class="part-one">
                    <h3>Salaire</h3>
                    <p>{{job.salary_left}} - {{job.salary_right}} {{job.currency}} par<span v-if="job.salary_time_unit == 3 "> an</span> <span v-if="job.salary_time_unit == 4"> heure</span><span v-if="job.salary_time_unit == 2"> jour</span><span v-if="job.salary_time_unit == 1"> mois</span></p>
                </div>
            </section>
        </div>
    </article>
    <section class="postuler-job">
        <div class="container vueform">
            <h2>Postuler à cette offre</h2>
            <article v-if="sent" class="response">
                <h3>{{response}}</h3>
                <p v-if="invalid" class="invalid">{{invalid}}</p>
            </article>
           <form v-if="!sent" @submit="checkForm">
               <label for="nom">
                   Nom* :
                   <input v-model="nom" type="text" name="nom" required="required" id="nom">
                </label>
               <label for="prenom">
                   Prénom* :
                   <input v-model="prenom" type="text" name="prenom" required="required" id="prenom">
                </label>
               <label for="email">
                   Email* :
                   <input v-model="email" type="email" name="email" required="required" id="email">
                </label>
               <label for="tel">
                   Téléphone :
                   <input v-model="telephone" type="tel" name="tel" id="tel">
                </label>
               <label for="ref">
                   Réf du poste* :
                   <input :value="job.reference" type="text" name="ref" id="ref">
                </label>
                <label for="message" class="message">
                    Message :
                    <textarea v-model="formMessage" name="message" id="message"></textarea>
                </label>
                <div class="cv">
                    <label for="files" class="cv">
                      <input v-on:change="handleFileUpload()" ref="file" type="file" name="files" id="files" accept=".doc,.docx,.pdf,.jpg,.jpeg,.png,.gif,.svg,.webp">  
                    </label>
                    <div class="consent-container">
                        <label class="consent" for="consent">
                            <input v-model="consent" type="checkbox" name="consent" required="required" id="consent">
                            J'accepte que mes données soient traitées par DB conseils. Elles ne seront pas revendues ou échangées avec un tiers*.
                        </label>
                        <div class="send">
                            <label for="submit" class="envoyer">
                                Envoyer ma candidature
                                <input type="submit" value="Enovyer" name="submit" id="submit">
                            </label>
                        </div>
                    </div>
                </div>
           </form>
        </div>
    </section>
    <section class="photo-bot">
        <div class="gradient-bottom"></div>
        <div class="gradient-second"></div>
    </section>
</div>


</script>