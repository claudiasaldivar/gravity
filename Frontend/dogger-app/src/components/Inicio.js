import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';


const Inicio = () => {
    return ( 
        <div className="seleccionDiv">
        <Container  className="seleccionContainer">
            <Row className="justify-content-md-center rowSeleccion" align='center'>
                <Col className="colContainer">
                    <div className="cajaSeleccion">
                        <h1>REGISTRO</h1>
                        <div className="cajasSeleccion">
                            <Link 
                                to='/paseador'  
                                className="caja"
                                    >
                                <div>
                                    <p className="tituloCaja">Pasaeador</p>
                                </div>
                            </Link>
                            <Link 
                                to='/usuario' 
                                className="caja"
                            >
                                <div>
                                    <p className="tituloCaja">Usuario</p>
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
 
export default Inicio;