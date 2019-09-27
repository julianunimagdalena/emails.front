//@ts-check
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Nav extends React.Component {
    /**
     * @param {React.MouseEvent<HTMLSpanElement, MouseEvent>} event
     */
    toggleValue(event) {
        let target = event.target;
        let value = target.dataset.value;

        this.props.toggle(value);
    }

    render() {
        let isBandejaEntrada = this.props.isBandejaEntrada;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Navbar</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                id="tipoBandejaLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Viendo: bandeja de {isBandejaEntrada ? 'entrada' : 'salida'}
                            </span>
                            <div className="dropdown-menu" aria-labelledby="tipoBandejaLink">
                                <span className="dropdown-item" data-value={true} onClick={e => this.toggleValue(e)}>
                                    Bandeja de entrada
                                </span>
                                <span className="dropdown-item" data-value={false} onClick={e => this.toggleValue(e)}>
                                    Bandeja de salida
                                </span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.props.mensaje()}>Nuevo mensaje</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;