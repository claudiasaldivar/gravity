import React, { useReducer } from "react";

import clienteAxios from "../../config/axios";
import mascotaReducer from "./mascotaReducer";
import mascotaContext from "./mascotaContext";

import {CREAR_MASCOTA, AGREGAR_MASCOTA_ERROR} from '../../types/index';

const MascotaState = (props) => {
    const initialState = {
        mascota : []
      };

      //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(mascotaReducer, initialState);

  //AGREGAR mascota
  const crearMascota = async (mascota) => {
    try {
      const respuesta = await clienteAxios.post(
        "api/mascota/",
        mascota
      );
      dispatch({
        type: CREAR_MASCOTA,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: AGREGAR_MASCOTA_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <mascotaContext.Provider
      value={{
        mascota: state.mascota,
        crearMascota
      }}
    >
      {props.children}
    </mascotaContext.Provider>
  );
}

export default MascotaState;
