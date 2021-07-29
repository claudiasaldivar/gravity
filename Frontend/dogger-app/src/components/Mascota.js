/* eslint-disable react-hooks/exhaustive-deps */
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
import alertasContext from "../context/alertas/alertasContext";
import usuarioContext from "../context/usuario/usuarioContext";
import mascotaContext from "../context/mascotas/mascotaContext";
import Header from "./layout/Header";

const MascotaRegistro = (props) => {
  const alertaContext = useContext(alertasContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const usuariocontext = useContext(usuarioContext);
  const { usuario } = usuariocontext;
    
  const mascotasContext = useContext(mascotaContext);
  const { crearMascota } = mascotasContext;

  useEffect(() => {
    usuario.forEach(u => {
        localStorage.setItem('idUsuario', u.idUsuario)
    });
  }, [])
  const id = localStorage.getItem('idUsuario');
  const [usuarios, setUsuarios] = useState({
      nombre: '',
      edad: 0,
      sexo: '',
      tamaño: '',
      observaciones: '',
      idUsuario: id
  })
  const onChange = (e) => {
    setUsuarios({
        ...usuarios,
        [e.target.name]: e.target.value,
    })
  }
  const {nombre, edad, sexo, tamaño, observaciones} = usuarios;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      sexo === "" ||
      edad === 0 ||
      tamaño === ""
    ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }else {
      mostrarAlerta('Paseador creado', 'alerta-ok');
      setTimeout(() => {
        crearMascota(usuarios);
        props.history.push("/agenda");
    }, 1000);
    }
  }


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
              <p className="datosTitulo">Mascota</p>
              <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" name="nombre" value={nombre} placeholder="with a placeholder"  onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="edad">Edad</Label>
                        <Input type="number" name="edad" value={edad} onChange={onChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="sexo">Sexo</Label>
                        <Input type="text" name="sexo" value={sexo} placeholder="Sexo" onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tamaño">Tamaño</Label>
                        <Input type="select" name="tamaño" value={tamaño}  onChange={onChange}>
                            <option>Selecciona</option>
                            <option value="Chico">Chico</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Grande">Grande</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="observaciones">Observaciones</Label>
                    <Input type="textarea" name="observaciones" onChange={onChange} value={observaciones}/>
                </FormGroup>
                <Button type='submit'>Registrar</Button>
                </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
     );
}
 
export default MascotaRegistro;