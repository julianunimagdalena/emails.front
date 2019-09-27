//@ts-check
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './views/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        };
        
    }

    render() {
        let user = this.state.authUser;

        return (
            <Router>
                <Route path="/" render={() => <Login user={user}></Login>}></Route>
            </Router>
        );
    }
}

export default App;