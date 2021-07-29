import React, { useReducer } from "react";

import clienteAxios from "../../config/axios";
import paseadorReducer from "./paseadorReducer";
import paseadorContext from "./paseadorContext";

import {CREAR_PASEADOR, AGREGAR_PASEADOR_ERROR} from '../../types/index';

const PaseadorState = (props) => {
    const initialState = {
        paseador : []
      };

      //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(paseadorReducer, initialState);

  //AGREGAR paseador
  const crearPaseador = async (paseador) => {
    try {
      const respuesta = await clienteAxios.post(
        "api/paseador/",
        paseador
      );
      dispatch({
        type: CREAR_PASEADOR,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: AGREGAR_PASEADOR_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <paseadorContext.Provider
      value={{
        paseador: state.paseador,
        crearPaseador
      }}
    >
      {props.children}
    </paseadorContext.Provider>
  );
}

export default PaseadorState;
