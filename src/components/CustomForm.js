import React from 'react'
import { getForm, submitForm } from '../services/CustomForm';
import Form from "react-jsonschema-form";

class CustomForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      json_schema: {},
      ui_schema: {}
    };
    this.getSchema = this.getSchema.bind(this);
  }

  componentDidMount() {
    this.getSchema();
  }

  getSchema() {
    getForm(this.props.formUrl).then((response) => {
      this.setState({ json_schema: response.data.json_schema });
      this.setState({ ui_schema: response.data.ui_schema });
    });
  }

  handleSubmit(data){
    submitForm(this.props.formUrl, data).then(res => {
      this.props.onSubmit(data);
    }).catch(error => {
      this.props.onError(error)
    });
  }

  render() {
    return (
      <div>
        <Form
          schema={this.state.json_schema}
          uiSchema={this.state.ui_schema}
          onSubmit={(data) => this.handleSubmit(data.formData)}
          onError={(error) => this.props.onError(error)}
        />
      </div>
    )
  }
}

export default CustomForm;