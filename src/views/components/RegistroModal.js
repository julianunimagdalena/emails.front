//@ts-check
import React from 'react';
import { userInfo } from 'os';

class RegistroModal extends React.Component {
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
    };

    render() {
        let errors = this.state.errors;

        return (
            <div className="modal fade" id="registroModal" role="dialog" aria-labelledby="registroModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registroModalLabel">REGISTRO</h5>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="nombre"
                                        onChange={e => this.handleChanges(e)}
                                    />
                                    {errors.nombre ? (
                                        <span className="text-danger">{errors.nombre}</span>
                                    ) : ''}
                                </div>
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                        name="email"
                                        onChange={e => this.handleChanges(e)}
                                    />
                                    {errors.email ? (
                                        <span className="text-danger">{errors.email}</span>
                                    ) : ''}
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                        name="password"
                                        onChange={e => this.handleChanges(e)}
                                    />
                                    {errors.password ? (
                                        <span className="text-danger">{errors.password}</span>
                                    ) : ''}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-success">Registrarme !</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistroModal; 