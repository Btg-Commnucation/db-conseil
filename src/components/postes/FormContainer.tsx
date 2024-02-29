import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useState } from 'react';

const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;

const schema = z.object({
  nom: z.string({ required_error: 'Veuillez entrer votre nom' }),
  prenom: z.string({ required_error: 'Veuillez entrer votre prénom' }),
  email: z
    .string({ required_error: 'Veuillez saisir votre mail' })
    .email({ message: 'Veuillez saisir un mail valide' }),
  telephone: z
    .string({ required_error: 'Veuillez saisir votre numéro de téléphone' })
    .min(10, { message: 'Veuillez saisir un numéro de téléphone valide' }),
  ref: z
    .string({ required_error: 'Veuillez entrer la référence du poste' })
    .optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: 'Vous devez accepter les conditions' }),
  files: z.any().optional(),
});

const initialValues = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  ref: '',
  message: '',
  files: [],
  consent: false,
};

type TValues = z.infer<typeof schema>;

const FormContainer = ({ slug }: { slug: string }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values: TValues) => {
    const formData = new FormData();
    formData.set('nom', values.nom);
    formData.set('prenom', values.prenom);
    formData.set('email', values.email);
    formData.set('telephone', values.telephone);
    if (values.ref) {
      formData.set('ref', values.ref);
    }
    if (values.message) {
      formData.set('message', values.message);
    }
    if (values.consent) {
      formData.set('consent', values.consent.toString());
    }
    if (values.files) {
      formData.append('files', values.files);
    }

    try {
      const response = await axios.post(
        `${WORDPRESS_API}/contact-form-7/v1/contact-forms/223/feedback`,
        formData,
      );

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (isSuccess) {
    return (
      <div className="wpcf7 sucessMessage">
        <h1>Merci pour votre message</h1>
        <strong>Nous reviendrons bientôt vers vous</strong>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wpcf7 errorMessage">
        <h1>Une erreur est survenue</h1>
        <strong>
          Nous nous excusons de la gêne occasionnée. Vous pouvez réessayer plus
          tard
        </strong>
      </div>
    );
  }

  return (
    <div className="container vueform">
      <h2>Postuler à cette offre</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
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
              htmlFor="ref"
              className={errors.ref && touched.ref ? 'error' : ''}
            >
              Ref du poste* :
              <Field name="ref" id="ref" value={slug} />
              <ErrorMessage name="ref" />
            </label>
            <label
              htmlFor="message"
              className={
                errors.message && touched.message ? 'error message' : 'message'
              }
            >
              Message* :
              <Field as="textarea" name="message" id="message" />
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
                <ErrorMessage name="files" />
              </label>
              <div className="consent-container">
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
                  <label htmlFor="submit" className="envoyer">
                    Envoyer ma candidature
                    <button type="submit" id="submit">
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
