//@ts-check
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // authUser: null
            authUser: {
                nombre: 'JULIAN PITRE',
                email: 'julian@miemail.com'
            }
        };
    }

    cerrarSesion() {
        this.setState({
            authUser: null
        });
    }

    render() {
        let user = this.state.authUser;

        return (
            <Router>
                <Route path="/" exact render={() => <Login user={user}></Login>}></Route>
                <Route path="/home" render={() => <Home user={user} cerrarSesion={() => this.cerrarSesion()}></Home>}></Route>
            </Router>
        );
    }
}

export default App;