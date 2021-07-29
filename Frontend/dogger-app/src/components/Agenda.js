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

import agendaContext from "../context/agenda/agendaContext";
import Header from "./layout/Header";

const Agenda = (props) => {
  const alertaContext = useContext(alertasContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const agendacontext = useContext(agendaContext);
  const { crearAgenda } = agendacontext;

  
  const idUsuario = localStorage.getItem('idUsuario');
  const idPaseador = localStorage.getItem('idPaseador');
  const idMascota = localStorage.getItem('idMascota');

  const [agenda, setAgenda] = useState({
      dia: '',
      hora: '',
      perros: 0,
      idMascota: idMascota,
      idUsuario: idUsuario,
      idPaseador: idPaseador
  })
  
  const onChange = (e) => {
    setAgenda({
        ...agenda,
        [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      dia === "" ||
      hora === "" ||
      perros === 0 || perros > 3
    ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }else {
      mostrarAlerta('Paseador creado', 'alerta-ok');
      setTimeout(() => {
        crearAgenda(agenda);
    }, 1000);
    }

  }


  const {dia, hora, perros} = agenda;
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
              <p className="datosTitulo">Agenda</p>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="exampleDate">Dia</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleTime">Hora</Label>
                                <Input
                                 type="time"
                                name="time"
                                id="exampleTime"
                                placeholder="time placeholder"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="perros">Perros</Label>
                                <Input type="number" name="perros" value={perros} onChange={onChange} maxLength={1}/>
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
 
export default Agenda;