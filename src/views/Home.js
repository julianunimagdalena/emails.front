//@ts-check
import React from 'react';
import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Nav from './components/Nav';
import Bandeja from './components/Bandeja';

async function fetchMensajes(isBandejaEntrada) {
    return [{
        titulo: 'Work',
        persona: 'Camilo'
    }];
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBandejaEntrada: true,
            mensajes: []
        };
    }

    componentDidMount() {
        let { isBandejaEntrada } = this.state;
        let mensajes;

        fetchMensajes(isBandejaEntrada).then(mensajes => {

        });
        this.setState({
            mensajes: 
        });
    }

    toggleBandejaEntrada(value) {
        this.setState({
            isBandejaEntrada: value === 'true'
        });
    }

    verCorreo(mensaje) {

    }

    render() {
        let { isBandejaEntrada } = this.state;
        let { user } = this.props;
        let mensajes = this.state.mensajes;

        if (!user) return <Redirect to="/"></Redirect>;

        return (
            <div className="d-flex h-100 flex-column">
                <Nav
                    isBandejaEntrada={isBandejaEntrada}
                    user={user}
                    toggle={value => this.toggleBandejaEntrada(value)}
                    handleClick={() => this.verCorreo()}
                    cerrarSesion={() => this.props.cerrarSesion()}
                ></Nav>
                <div className="row h-100 mr-0">
                    <div className="col-md-3 p-0 border-right">
                        <Bandeja mensajes={mensajes} handleClick={msj => this.verCorreo(msj)}></Bandeja>
                    </div>
                    <div className="col-md-9 p-0">
                        b
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;