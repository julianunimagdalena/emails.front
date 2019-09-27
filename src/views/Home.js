//@ts-check
import React from 'react';
import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Nav from './components/Nav';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBandejaEntrada: true
        }
    }

    toggleBandejaEntrada(value) {
        this.setState({
            isBandejaEntrada: value
        });
    }

    verCorreo() {

    }

    render() {
        let { isBandejaEntrada } = this.state;
        let user = this.props.user;
        if (!user) return <Redirect to="/"></Redirect>;

        return (
            <div>
                <Nav
                    isBandejaEntrada={isBandejaEntrada}
                    toggle={value => this.toggleBandejaEntrada(value)}
                    mensaje={() => this.verCorreo()}
                ></Nav>
            </div>
        );
    }
}

export default Home;