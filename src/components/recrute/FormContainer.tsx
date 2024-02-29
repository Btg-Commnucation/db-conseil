import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useState } from 'react';

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
  societe: z.string().optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((value) => value, { message: 'Veuillez accepter les conditions' }),
});

type TValues = z.infer<typeof schema>;

const initialValues = {
  civilite: '',
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  societe: '',
  message: '',
  consent: false,
};

const FormContainer = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values: TValues) => {
    const formData = new FormData();
    formData.set('nom', values.nom);
    formData.set('prenom', values.prenom);
    formData.set('email', values.email);
    formData.set('telephone', values.telephone);
    formData.set('civilite', values.civilite);
    if (values.societe) {
      formData.set('societe', values.societe);
    }
    if (values.message) {
      formData.set('message', values.message);
    }
    if (values.consent) {
      formData.set('consent', values.consent.toString());
    }

    try {
      const response = await axios.post(
        `${WORDPRESS_API}/contact-form-7/v1/contact-forms/226/feedback`,
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
    <div className="wpcf7">
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="civilite">
              Civilité* :
              <span style={{ display: 'flex' }}>
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
              </span>
            </label>
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
              htmlFor="societe"
              className={errors.societe && touched.societe ? 'error' : ''}
            >
              Société :
              <Field name="societe" id="societe" />
              <ErrorMessage name="societe" />
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
            <span>
              <label
                htmlFor="consent"
                className={errors.consent && touched.consent ? 'error' : ''}
              >
                <Field type="checkbox" id="consent" name="consent" />
                <span>
                  J'accepte que mes données soient traitées par DB conseils.
                  Elles ne seront pas revendues ou échangées avec un tiers.
                </span>
              </label>
            </span>
            <label
              style={{ position: 'relative' }}
              htmlFor="submit"
              id="send-message"
            >
              Envoyer mon message
              <button
                style={{
                  height: '1px',
                  width: '1px',
                  position: 'absolute',
                  zIndex: '-1',
                  background: 'transparent',
                  border: 'none',
                }}
                type="submit"
                id="submit"
              >
                Envoyer
              </button>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContainer;
