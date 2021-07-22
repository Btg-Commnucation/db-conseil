<form action="" class="postule-contact" method="post">
                    <div class="civilite">
                        <p>Civilité :</p>
                        <div class="civilite-container">
                            <label for="madame">
                                <input name="civilite" id="madame" aria-label="Madame" value="madame" type="radio">
                                Madame
                            </label>
                            <label for="monsieur">
                                <input name="civilite" id="monsieur" aria-label="monsieur" value="monsieur" type="radio">
                                Monsieur
                            </label>
                        </div>

                    </div>
                    <label for="name">
                        Nom* :
                        <input name="name" id="name" placeholder="Le Port" aria-label="Votre nom" type="text" required>
                    </label>
                    <label for="prenom">
                        Prénom* :
                        <input name="prenom" id="prenom" aria-label="Votre Prénom" placeholder="Le Port" type="text" required>
                    </label>
                    <label for="email">
                        Email* :
                        <input name="email" id="email" aria-label="Votre e-mail" placeholder="guillaume@btg-communication.fr" type="email" required>
                    </label>
                    <label for="telephone">
                        Téléphone* :
                        <input name="telephone" id="telephone" aria-label="Votre numéro de téléphone" placeholder="0246655115" type="tel" required>
                    </label>
                    <label for="adresse">
                        Adresse* :
                        <input name="adresse" id="adresse" aria-label="Votre adresse" placeholder="12 rue de l'exemple" type="text">
                    </label>
                    <label for="town">
                        Ville* :
                        <input name="town" id="town" aria-label="Ville où vous résidez" placeholder="Tours" type="text">
                    </label>
                    <label for="postal">
                        Code Postal* :
                        <input id="postal" name="postal" aria-label="Votre code postal" placeholder="37000" type="text">
                    </label>
                    <label for="poste">
                        Poste recherché* :
                        <input id="poste" name="poste" aria-label="Le poste recherché" placeholder="Conducteur de travaux" type="text">
                    </label>
                    <label for="zonegeo">
                        Zone géographique* :
                        <input name="zonegeo" id="zonegeo" aria-label="Votre zone géographique pour le poste" placeholder="Indre-et-loire" type="text">
                    </label>
                    <label for="etudes">
                        Années d'études* :
                        <input name="etudes" id="etudes" aria-label="Nombres d'années d'études" placeholder="8" type="number">
                    </label>
                    <label for="message">
                        Message* :
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </label>
                    <label for="cv">
                        <input type="file" name="cv" id="cv" aria-label="Envoyer un fichier" accept=".doc,.docx,.pdf">
                        (Fichiers de maximum 2mo - Formats acceptés : pdf / doc / docx.)
                    </label>
                    <div class="send">
                        <label for="envoyer">
                            Envoyer ma candidature
                            <input type="submit" id="envoyer" name="envoyer" value="Envoyer">
                        </label>
                        <label for="consentement">
                            <input type="checkbox" name="consentement" id="consentement" aria-label="J'accepte le traitement de mes données">
                            J'accepte que mes données soient traitées par DB conseils. Elles ne seront pas revendues ou échangées avec un tiers.
                        </label>
                    </div>
                </form>