import React, { useReducer } from "react";

import clienteAxios from "../../config/axios";
import usuarioReducer from "./usuarioReducer";
import usuarioContext from "./usuarioContext";

import {CREAR_USUARIO, AGREGAR_USUARIO_ERROR, OBTENER_USUARIO} from '../../types/index';

const UsuarioState = (props) => {
    const initialState = {
        usuario : []
      };

      //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(usuarioReducer, initialState);

  //AGREGAR usuario
  const crearUsuario = async (usuario) => {
    try {
      const respuesta = await clienteAxios.post(
        "api/usuarios/",
        usuario
      );
      dispatch({
        type: CREAR_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: AGREGAR_USUARIO_ERROR,
        payload: alerta,
      });
    }
  };

  const obtenerUsuario = async (usuario) =>{
    try {
      const respuesta = await clienteAxios.get(
        "api/usuarios/",
        {params: usuario}
      );
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: AGREGAR_USUARIO_ERROR,
        payload: alerta,
      });
    }
  }
  return (
    <usuarioContext.Provider
      value={{
        usuario: state.usuario,
        crearUsuario,
        obtenerUsuario
      }}
    >
      {props.children}
    </usuarioContext.Provider>
  );
}

export default UsuarioState;
