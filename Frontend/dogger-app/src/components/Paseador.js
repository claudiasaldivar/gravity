import React, { Fragment, useState, useContext, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Header from "./layout/Header";
import alertasContext from "../context/alertas/alertasContext";
import paseadorContext from "../context/paseador/paseadorContext";

const PaseadorRegistro = (props) => {
  const alertaContext = useContext(alertasContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const paseadorcontext = useContext(paseadorContext);
  const { crearPaseador } = paseadorcontext;

  const [paseador, setPaseador] = useState({
      nombre: '',
      telefono: '',
      address: '',
      email: '',
      password: ''
  })

  useEffect(() => {
    paseadorcontext.paseador.forEach(p => {
        localStorage.setItem('idPaseador', p.idPaseador)
    });
  }, [])
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      telefono === "" ||
      address === "" ||
      email === "" ||
      password === ""
    ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }else {
      mostrarAlerta('Paseador creado', 'alerta-ok');
      setTimeout(() => {
        crearPaseador(paseador);
        props.history.push("/inicio");
    }, 1000);
    }
  }

  const onChange = (e) => {
    setPaseador({
        ...paseador,
        [e.target.name]: e.target.value,
    })
  }
  const {nombre, telefono, address, email, password} = paseador;
    return ( 
        <Fragment>
        <Header />
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <Container className="crearNuevoContainer">
        <Row className="justify-content-md-center rowPropuesta" align="center">
          <Col className="colCrearPropuesta">
            <div className="contenedorCrearNuevoDiv">
              <p className="datosTitulo">Paseador</p>
              <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" value={email} placeholder="with a placeholder"  onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" value={password} placeholder="password placeholder"  onChange={onChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" name="nombre" value={nombre} placeholder="Nombre"  onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefono">Telefono</Label>
                        <Input type="telefono" name="telefono" value={telefono} placeholder="telefono placeholder"  onChange={onChange}/>
                    </FormGroup>
                
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" value={address} placeholder="Address" onChange={onChange}/>
                </FormGroup>
                <Button type='submit'>Registrarse</Button>
                </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
     );
}
 
export default PaseadorRegistro;