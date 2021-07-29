import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';


const Opciones = () => {
    return ( 
        <div className="seleccionDiv">
                <Container  className="seleccionContainer">
                    <Row className="justify-content-md-center rowSeleccion" align='center'>
                        <Col className="colContainer">
                            <div className="cajaSeleccion">
                                <p>¿Qué tipo de proceso realizaras?</p>
                                <div className="cajasSeleccion">
                                    <Link 
                                        to='/crear-nuevo'  
                                        className="caja"
                                            >
                                        <div>
                                            <p className="tituloCaja">Nuevo</p>
                                        </div>
                                    </Link>
                                    <Link 
                                        to='/cliente' 
                                        className="caja"
                                    >
                                        <div>
                                            <p className="tituloCaja">Registrado</p>
                                        </div>
                                    </Link>  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
     );
}
 
export default Opciones;