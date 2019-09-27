//@ts-check
import React from 'react';

class LoginForm extends React.Component {
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

    /**
     * @param {React.FormEvent<HTMLFormElement>} event
     */
    handleSubmit(event) {
        event.preventDefault();
        let input = this.state.input;

        console.log(input);
    }

    render() {
        let errors = this.state.errors;

        return (
            <div className="rounded bg-white p-4">
                <h3>Iniciar sesión</h3>
                <br></br>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="email"
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
                    <button type="button" className="btn btn-link" onClick={() => this.props.registro()}>Registrate</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;