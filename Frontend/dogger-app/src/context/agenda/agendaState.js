import React, { useReducer } from "react";

import clienteAxios from "../../config/axios";
import agendaReducer from "./agendaReducer";
import agendaContext from "./agendaContext";

import {CREAR_AGENDA, AGREGAR_AGENDA_ERROR} from '../../types/index';

const AgendaState = (props) => {
    const initialState = {
        agenda : []
      };

      //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(agendaReducer, initialState);

  //AGREGAR mascota
  const crearAgenda = async (datos) => {
    try {
      const respuesta = await clienteAxios.post(
        "api/agenda/",
        datos
      );
      dispatch({
        type: CREAR_AGENDA,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: AGREGAR_AGENDA_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <agendaContext.Provider
      value={{
        agenda: state.agenda,
        crearAgenda
      }}
    >
      {props.children}
    </agendaContext.Provider>
  );
}

export default AgendaState;
