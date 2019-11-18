# dynamic-forms-react

> 

[![NPM](https://img.shields.io/npm/v/dynamic-forms-react.svg)](https://www.npmjs.com/package/dynamic-forms-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add https://github.com/densitylabs/dynamic-forms-react
```

## Usage

*Contact Us Form*
```jsx
import React, { Component } from 'react';

import { ContactUsForm } from 'dynamic-forms-react';

class Example extends Component {
  render () {
    return (
      <ContactUsForm
        endPoint="your-dynamic-form-endpoint"
        onSuccess={{'title': 'Successful', 'body': 'Your data was sent successfully.'}}
        onError={{'title': 'Error', 'body': 'An error has ocurred.'}}
      />
    )
  }
}
```

*Custom Form using json schema and UI schema*
```jsx
import React, { Component } from 'react';

import { CustomForm } from 'dynamic-forms-react';

class Example extends Component {
  render () {
    return (
      <CustomForm
        formUrl={this.paramUrl('id')}
        onSubmit={(res) => (alert(res))}
        onError={(error) => alert(error)}
      />
    )
  }
}
```

The URL should contain the next structure
```JSON
{
  "json_schema":{
    ...
  },
  "ui_schema":{
    ...
  }
}
```

Here is an example:

```JSON
{
  "json_schema":{
    "title": "Name Form",
    "description": "A simple name form ",
    "type": "object",
    "required": [
      "name",
    ],
    "additionalProperties": false,
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      }
    }
  },
  "ui_schema":{
    "name": {
      "ui:autofocus": true,
      "ui:title": "First and Last Name",
      "ui:emptyValue": ""
    },
  }
}
```

## License

MIT © [Density Labs](https://github.com/densitylabs)
