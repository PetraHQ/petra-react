# Petra React Library

> Petra Library

## Install

```bash
npm install --save petra-react
```

## Usage

```jsx
import React, {Component} from 'react'

import {PetraButton} from 'petra-react'
import 'petra-react/dist/index.css'

const checkoutPayload = {...}
const customLabel = 'Pay Now ✨'

class Example extends Component {
    render() {
        return <PetraButton data={checkoutPayload} label={customLabel}/>
    }
}
```

## Payload Example

```js
  payload: {
    amount: 100000,
        email: 'test@gmail.com',
        key: 'pk_test_P1rXrrgX9dgST9YADaGo1AVczYXkhSmC',
        button: {
        "backgroundColor": "#F7A200",
            "border": "none",
            "borderRadius": '10px',
            "color": "#FFFFFF",
            "textAlign": "center",
            "textDecoration": "none",
            "display": 'inline-flex',
            "fontSize": '14px',
            "transitionDuration": '0.4s',
            cursor: "pointer",
            padding: '10px 32px',
            opacity: 1,
            "fontFamily": 'Poppins',
            width: "250px",
            height: "50px",
            "alignItems": "center",
    },
    text :{
        marginBottom: "2px"
    }
  }
```

## License

MIT © [Emmanuel Adebayo](https://github.com/toluwaanimi/)
