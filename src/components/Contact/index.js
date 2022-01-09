import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Form,
  Row,
  Col,
} from 'react-bootstrap';

// import PropTypes from 'prop-types';

import './contact.scss';

const Contact = () => {
  const [mailSent, setMailSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_cyqnuss', 'template_9gzzbu7', event.target, 'user_z15umhuwZpWaHFHD3OoOy')
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          setMailSent(true);
        }
      },
      (error) => {
        console.log(error.text);
      });
    event.target.reset();
  };
  const handleSubmit = (event) => {
    sendEmail(event);
  };
  return (
    <Form
      className="contact"
      id="contact"
      noValidate
      onSubmit={handleSubmit}
      sm="auto"
      md="auto"
      lg="auto"
    >
      <div className="contact__banner title">
        ME CONTACTER
      </div>
      <div className="contact__intro intro">
        Vous pouvez me contacter en remplissant le formulaire ci-dessous.
        Je vous répondrai dans les meilleurs délais.
      </div>
      <Row
        className="contact__row row"
      >
        <div className="contact__row__lastname lastname">
          <Form.Group
            as={Col}
            sm="auto"
            md="auto"
            lg="auto"
            controlId="validationLastName"
          >
            <Form.Label>Nom</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Votre nom"
              name="lastname"
            />
            <Form.Control.Feedback type="invalid">Veuillez saisir votre nom.</Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="contact__row__firstname firstname">
          <Form.Group
            as={Col}
            sm="auto"
            md="auto"
            lg="auto"
            controlId="validationFirstName"
          >
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Votre prénom"
              name="firstname"
            />
            <Form.Control.Feedback type="invalid">Veuillez saisir votre prénom.</Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="contact__row__mail mail">
          <Form.Group
            as={Col}
            sm="auto"
            md="auto"
            lg="auto"
            controlId="validationEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Votre email"
              name="email"
            />
            <Form.Control.Feedback type="invalid">Veuillez saisir un email valide.</Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="contact__row__message message">
          <Form.Group
            as={Col}
            sm="auto"
            md="auto"
            lg="auto"
            controlId="validationMessage"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              type="text"
              placeholder="Votre message"
              name="message"
              style={{ height: '180px' }}
            />
            <Form.Control.Feedback type="invalid">Veuillez saisir votre message.</Form.Control.Feedback>
          </Form.Group>
        </div>
      </Row>
      <div className={mailSent ? 'contact__mail__sent' : 'contact__mail__no__sent'}>
        Votre message à bien été envoyé.
      </div>
      <div className="contact__button button">
        <button
          className="contact__button__send"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </Form>
  );
};

// Contact.propTypes = {
// };

export default Contact;
