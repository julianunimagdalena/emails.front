//@ts-check
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/styles.css';

class Bandeja extends React.Component {
    /**
     * @param {React.MouseEvent<HTMLLIElement, MouseEvent>} event
     * @param {any} mensaje
     */
    handleClick(event, mensaje) {
        let className = 'activo';
        let liList = document.querySelectorAll('li.mensaje');
        liList.forEach(li => li.classList.remove(className));

        let li = event.target;
        li.classList.add(className);

        this.props.handleClick(mensaje);
    }

    render() {
        let mensajes = this.props.mensajes;
        let { actualizar, isBandejaEntrada } = this.props;

        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-link" onClick={() => actualizar()}>Actualizar</button>
                </li>
                {mensajes.length > 0 ? mensajes.map(msj => (
                    <li key={msj.id} className="list-group-item mensaje" onClick={e => this.handleClick(e, msj)}>
                        <span className="font-weight-bold">{msj.titulo}</span>
                        <br />
                        <small className="text-muted">
                            <span className="font-weight-bold">{isBandejaEntrada ? 'De:' : 'Para:'} </span>
                            {msj.persona}
                        </small>
                    </li>
                )) : ''}
            </ul>
        );
    }
}

export default Bandeja;