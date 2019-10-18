# dynamic-forms-react

> 

[![NPM](https://img.shields.io/npm/v/dynamic-forms-react.svg)](https://www.npmjs.com/package/dynamic-forms-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add https://github.com/densitylabs/dynamic-forms-react
```

## Usage

```jsx
import React, { Component } from 'react';

import DynamicForms from 'dynamic-forms-react';

class Example extends Component {
  render () {
    return (
      <DynamicForms 
        endPoint="your-dynamic-form-endpoint"
        onSuccess={{'title': 'Successful', 'body': 'Your data was sent successfully.'}}
        onError={{'title': 'Error', 'body': 'An error has ocurred.'}}
      />
    )
  }
}
```

## License

MIT © [Density Labs](https://github.com/densitylabs)
