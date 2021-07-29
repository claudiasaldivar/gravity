import React, { Fragment, useState, useContext } from "react";
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
import alertasContext from "../context/alertas/alertasContext";
import usuarioContext from "../context/usuario/usuarioContext";
import Header from "./layout/Header";

const UsuarioRegistro = (props) => {
  const alertaContext = useContext(alertasContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const usuariocontext = useContext(usuarioContext);
  const { crearUsuario } = usuariocontext;

  const [usuarios, setUsuarios] = useState({
      nombre: '',
      telefono: '',
      email: '',
      password: ''
  })
  
  const onChange = (e) => {
    setUsuarios({
        ...usuarios,
        [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      telefono === "" ||
      email === "" ||
      password === ""
    ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }else {
      mostrarAlerta('Paseador creado', 'alerta-ok');
      setTimeout(() => {
        crearUsuario(usuarios);
        props.history.push("/mascotas");
    }, 1000);
    }

  }


  const {nombre, telefono, email, password} = usuarios;
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
              <p className="datosTitulo">Usuario</p>
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
                <Button type='submit'>Registrarse</Button>
                </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
     );
}
 
export default UsuarioRegistro;