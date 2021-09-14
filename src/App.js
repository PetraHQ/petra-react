import './App.css';
import {PetraButton} from "./lib/PetraButton";

const checkoutPayload = {
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

const customLabel = 'Pay Now  with Petra✨'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PetraButton data={checkoutPayload} label={customLabel}/>
            </header>
        </div>
    );
}

export default App;
