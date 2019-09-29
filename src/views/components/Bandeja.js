//@ts-check
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/styles.css';

class Bandeja extends React.Component {
    handleClick(mensaje) {
        this.props.handleClick(mensaje);
    }

    render() {
        let mensajes = this.props.mensajes;

        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-link">Actualizar</button>
                </li>
                {mensajes.length > 0 ? mensajes.map(msj => (
                    <li className="list-group-item" onClick={() => this.handleClick(msj)}>{msj.titulo}</li>
                )) : ''}
            </ul>
        );
    }
}

export default Bandeja;