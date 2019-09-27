//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/styles.css';

import RegistroModal from './components/RegistroModal';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
    }

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    handleChanges(e) {
        e.preventDefault();

        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState(state => ({
            input: { ...state.input, [name]: value },
            errors: { ...state.errors, [name]: undefined }
        }));
    }

    registro() {
        $('#registroModal').modal('show');
    }

    render() {
        let errors = this.state.errors;

        return (
            <div className="cover bg-light d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <div className="rounded bg-white p-4">
                            <h3>Iniciar sesión</h3>
                            <br></br>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        onChange={e => this.handleChanges(e)}
                                    />
                                    {errors.email ? (
                                        <span className="text-danger">{errors.email}</span>
                                    ) : ''}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        className="form-control"
                                        onChange={e => this.handleChanges(e)}
                                    />
                                    {errors.password ? (
                                        <span className="text-danger">{errors.password}</span>
                                    ) : ''}
                                </div>
                                <input className="btn btn-primary" type="submit" value="Iniciar sesión" />
                                <button type="button" className="btn btn-link" onClick={() => this.registro()}>Registrate</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Modal de registro */}
                <RegistroModal></RegistroModal>
            </div>
        )
    }
}

export default Login;