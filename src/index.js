import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row
} from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Service from './services/send_form';
import { FormValidator } from './helpers/form_validator';
import CustomModal from './components/CustomModal';

const initialValues={
  name: '',
  email: '',
  company: '',
  message: '',
}


class DynamicForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalMessage: ''
    }
  }

  openModal(messageOptions){
    this.setState({
      modalMessage: messageOptions,
      showModal: true
    })
  }

  render() {
    return(
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={FormValidator}
          onSubmit={(values, { setSubmitting, resetForm }) => {

            Service.sendForm(values, this.props.endPoint)
              .then(
                () => {
                  setSubmitting(false);
                  this.openModal(this.props.onSuccess);
                  resetForm(initialValues);
                },
                err => {
                  setSubmitting(false)
                  this.openModal(this.props.onError);
                }
              )
          }}
        >
          {({ values, errors, isSubmitting, touched, setFieldValue, setFieldTouched }) => (
            <Form className="px-3 py-4">
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="name" className="font-weight-bold">Nombre: *</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      tag={Field}
                      invalid={Boolean(touched.name && errors.name)}
                      aria-required
                    />
                    <ErrorMessage name="name" component={FormFeedback} />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email" className="font-weight-bold">Correo electrónico: *</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  tag={Field}
                  invalid={Boolean(touched.email && errors.email)}
                  aria-required
                />
                <ErrorMessage name="email" component={FormFeedback} />
              </FormGroup>
              <FormGroup>
                <Label for="company" className="font-weight-bold">Company: </Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  tag={Field}
                  invalid={Boolean(touched.company && errors.company)}
                  aria-required
                />
                <ErrorMessage name="company" component={FormFeedback} />
              </FormGroup>
              <FormGroup>
                <Label for="message" className="font-weight-bold">Message: *</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="company"
                  tag={Field}
                  invalid={Boolean(touched.message && errors.message)}
                  aria-required
                  component='textarea'
                />
                <ErrorMessage name="message" component={FormFeedback} />
              </FormGroup>
              <Button color="danger" type="submit" className="mt-4 px-5" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        { this.state.showModal &&
          <CustomModal 
            show={this.state.showModal}
            toggle={() => this.setState({ showModal: false })}
            title={this.state.modalMessage['title']}
            body={this.state.modalMessage['body']}
            centered
            closeButtonText='Close'
          />
        }
      </div>
    );
  }
}


DynamicForms.propTypes = {
  endPoint: PropTypes.string,
  onSuccess: PropTypes.object,
  onError: PropTypes.object
};

export default DynamicForms;
