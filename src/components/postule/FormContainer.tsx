import { ErrorMessage, Field, Form, Formik } from 'formik';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import axios from 'axios';

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const schema = z.object({
  civilite: z.string(),
  nom: z.string({ required_error: 'Veuillez renseigner votre nom' }),
  prenom: z.string({ required_error: 'Veuillez renseigner votre prénom' }),
  email: z
    .string({ required_error: 'Veuillez renseigner votre email' })
    .email('Veuillez renseigner un email valide'),
  telephone: z
    .string({ required_error: 'Veuillez renseigner votre numéro de téléphone' })
    .length(10, 'Veuillez renseigner un numéro de téléphone valide'),
  adresse: z.string({ required_error: 'Veuillez renseigner votre adresse' }),
  ville: z.string({ required_error: 'Veuillez renseigner votre ville' }),
  code_postal: z
    .string({ required_error: 'Veuillez renseigner votre code postal' })
    .length(5, 'Veuillez renseigner un code postal valide'),
  desirePoste: z.string().optional(),
  area: z.string().optional(),
  studies: z.string().optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: 'Vous devez accepter les conditions' }),
  files: z.any().optional(),
});

type TValues = z.infer<typeof schema>;

const initialValues = {
  civilite: '',
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  adresse: '',
  ville: '',
  code_postal: '',
  desirePoste: '',
  area: '',
  studies: '',
  message: '',
  files: [],
  consent: false,
};

const FormContainer = () => {
  const handleSubmit = async (values: TValues) => {
    const formData = new FormData();
    formData.set('Nom', values.nom);
    formData.set('Prnom', values.prenom);
    formData.set('email', values.email);
    formData.set('telephone', values.telephone);
    formData.set('civilite', values.civilite);
    formData.set('text-97', values.adresse);
    formData.set('ville', values.ville);
    formData.set('number-102', values.code_postal);
    if (values.desirePoste) {
      formData.set('desirePoste', values.desirePoste);
    }
    if (values.area) {
      formData.set('text-610', values.area);
    }
    if (values.studies) {
      formData.set('etudes', values.studies);
    }
    if (values.message) {
      formData.set('textarea-999', values.message);
    }
    if (values.files) {
      formData.set('Joindredesfichiers', values.files[0]);
    }
    if (values.consent) {
      formData.set('checkbox-411', values.consent.toString());
    }

    try {
      const response = await axios.post(
        `${WORDPRESS_API}/contact-form-7/v1/contact-forms/226/feedback`,
        formData,
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wpcf7">
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="civilité">
              Civilité* :
              <div
                className="civilite-container"
                style={{ flexDirection: 'row' }}
              >
                <span className="first">
                  <label htmlFor="civilite">
                    <Field type="radio" name="civilite" value="Madame" />
                    <span>Madame</span>
                  </label>
                </span>
                <span className="last">
                  <label htmlFor="civilite">
                    <Field type="radio" name="civilite" value="Monsieur" />
                    <span>Monsieur</span>
                  </label>
                </span>
              </div>
            </div>
            <label
              htmlFor="nom"
              className={errors.nom && touched.nom ? 'error' : ''}
            >
              Nom* :
              <Field name="nom" id="nom" />
              <ErrorMessage name="nom" />
            </label>
            <label
              htmlFor="prenom"
              className={errors.prenom && touched.prenom ? 'error' : ''}
            >
              Prénom* :
              <Field name="prenom" id="prenom" />
              <ErrorMessage name="prenom" />
            </label>
            <label
              htmlFor="email"
              className={errors.email && touched.email ? 'error' : ''}
            >
              Email* :
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" />
            </label>
            <label
              htmlFor="telephone"
              className={errors.telephone && touched.telephone ? 'error' : ''}
            >
              Téléphone* :
              <Field type="tel" name="telephone" id="telephone" />
              <ErrorMessage name="telephone" />
            </label>
            <label
              htmlFor="adresse"
              className={errors.adresse && touched.adresse ? 'error' : ''}
            >
              Adresse* :
              <Field name="adresse" id="adresse" />
              <ErrorMessage name="adresse" />
            </label>
            <label
              htmlFor="ville"
              className={errors.ville && touched.ville ? 'error' : ''}
            >
              Ville* :
              <Field name="ville" id="ville" />
              <ErrorMessage name="ville" />
            </label>
            <label
              htmlFor="code_postal"
              className={
                errors.code_postal && touched.code_postal ? 'error' : ''
              }
            >
              Code Postal* :
              <Field name="code_postal" id="code_postal" />
              <ErrorMessage name="code_postal" />
            </label>
            <label
              htmlFor="desirePoste"
              className={
                errors.desirePoste && touched.desirePoste ? 'error' : ''
              }
            >
              Poste recherché :
              <Field name="desirePoste" id="desirePoste" />
              <ErrorMessage name="desirePoste" />
            </label>
            <label
              htmlFor="area"
              className={errors.area && touched.area ? 'error' : ''}
            >
              Zone géographique :
              <Field name="area" id="area" />
              <ErrorMessage name="area" />
            </label>
            <label
              htmlFor="studies"
              className={errors.studies && touched.studies ? 'error' : ''}
            >
              Année d'études :
              <Field name="studies" id="studies" />
              <ErrorMessage name="studies" />
            </label>
            <label
              htmlFor="message"
              className={
                errors.message && touched.message ? 'error message' : 'message'
              }
            >
              Message* :
              <Field
                style={{ minHeight: '336px' }}
                as="textarea"
                name="message"
                id="message"
              />
              <ErrorMessage name="textarea" />
            </label>
            <div className="cv">
              <label
                htmlFor="files"
                className={errors.files && touched.files ? 'error cv' : 'cv'}
              >
                <input
                  type="file"
                  id="files"
                  name="files"
                  accept=".pdf, .doc, .docs. .xls. .xlsx, .ppt, .pptx"
                />
                (Fichier de maximum 2mo - Formats acceptés : pdf / doc / docx /
                ppt / pptx / xls / xlsx.)
                <ErrorMessage name="files" />
              </label>
              <div className="consentement">
                <label
                  htmlFor="consent"
                  className={
                    errors.consent && touched.consent
                      ? 'error consent'
                      : 'consent'
                  }
                >
                  <Field type="checkbox" name="consent" id="consent" />
                  J'accepte que mes données soient traitées par DB conseils.
                  Elles ne seront pas revendues ou échangées avec un tiers*.
                  <ErrorMessage name="consent" />
                </label>
                <div className="send">
                  <label
                    htmlFor="submit"
                    className="envoyer"
                    style={{ position: 'relative' }}
                  >
                    Envoyer ma candidature spontanée
                    <button
                      type="submit"
                      id="submit"
                      style={{
                        height: '1px',
                        width: '1px',
                        position: 'absolute',
                        zIndex: '-1',
                        background: 'transparent',
                        border: 'none',
                      }}
                    >
                      Envoyer
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContainer;
