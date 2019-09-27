//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/styles.css';

import RegistroModal from './components/RegistroModal';
import LoginForm from './components/LoginForm';

class Login extends React.Component {
    registro() {
        $('#registroModal').modal('show');
    }

    render() {
        return (
            <div className="cover bg-light d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <LoginForm registro={() => this.registro()}></LoginForm>
                    </div>
                </div>

                {/* Modal de registro */}
                <RegistroModal></RegistroModal>
            </div>
        )
    }
}

export default Login;