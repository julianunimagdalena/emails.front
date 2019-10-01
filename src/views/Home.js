//@ts-check
import React from 'react';
import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Nav from './components/Nav';
import Bandeja from './components/Bandeja';
import EditarMensaje from './components/EditarMensaje';

/**
 * @param {boolean} isBandejaEntrada
 */
async function fetchMensajes(isBandejaEntrada) {
    let mensajes = [];

    if (isBandejaEntrada) {
        mensajes = [{
            id: 1,
            titulo: 'Work',
            persona: 'Camilo'
        }];
    }
    else {
        mensajes = [{
            id: 2,
            titulo: 'Bad things...',
            persona: 'el york'
        }];
    }

    return mensajes;
}

async function fetchMensaje(id) {
    let mensaje;

    if (id === 1) mensaje = {
        id: 1,
        titulo: 'Work',
        emisor: {
            nombre: 'CAMILO',
            email: 'camilo@miemail.com'
        },
        destinatarios: [{
            nombre: 'JULIAN',
            email: 'julian@miemail.com'
        }]
    }
    else if (id === 2) mensaje = {
        id: 1,
        titulo: 'Bad things...',
        emisor: {
            nombre: 'JULIAN',
            email: 'julian@miemail.com'
        },
        destinatarios: [{
            nombre: 'el york',
            email: 'elyork@miemail.com'
        }]
    }

    return mensaje;
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBandejaEntrada: true,
            mensajes: [],
            mensajeActual: null
        };
    }

    componentDidMount() {
        this.actualizarCorreo();
    }

    actualizarCorreo() {
        let { isBandejaEntrada } = this.state;

        fetchMensajes(isBandejaEntrada).then(mensajes => this.setState({
            mensajes: mensajes
        }));
    }

    toggleBandejaEntrada(value) {
        let isBandejaEntrada = value === 'true';

        fetchMensajes(isBandejaEntrada).then(mensajes => this.setState({
            isBandejaEntrada: isBandejaEntrada,
            mensajes: mensajes
        }));
    }

    verCorreo(mensaje) {
        let { user } = this.props;

        if (!mensaje) this.setState({
            mensajeActual: { emisor: user }
        });
        else fetchMensaje(mensaje.id).then(msj => this.setState({
            mensajeActual: msj
        }));
    }

    render() {
        let { isBandejaEntrada, mensajes, mensajeActual } = this.state;
        let { user } = this.props;

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
                        <Bandeja
                            mensajes={mensajes}
                            isBandejaEntrada={isBandejaEntrada}
                            handleClick={msj => this.verCorreo(msj)}
                            actualizar={() => this.actualizarCorreo()}
                        ></Bandeja>
                    </div>
                    <div className="col-md-9 p-0">
                        <EditarMensaje mensaje={mensajeActual}></EditarMensaje>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;