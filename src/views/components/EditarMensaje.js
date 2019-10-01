//@ts-check
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/styles.css';

class EditarMensaje extends React.Component {
    render() {
        return (
            <div className="container-fluid my-3">
                <form>
                    <div className="input-group mb-3 mail">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">De:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="usuario@miemail.com" name="emisor"/>
                    </div>
                    <div className="input-group mb-3 mail">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Para:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="usuario@miemail.com" name="destinatarios"/>
                    </div>
                    <div className="input-group mb-4 mail">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Asunto:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Asunto" name="asunto"/>
                    </div>
                    <hr/>
                    <div className="form-group mail">
                        <textarea name="contenido" className="form-control" placeholder="Escriba un mensaje..."></textarea>
                    </div>
                </form>
            </div>
        );
    }
}
        
export default EditarMensaje;