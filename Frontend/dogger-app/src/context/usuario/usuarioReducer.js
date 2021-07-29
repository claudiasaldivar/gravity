/* eslint-disable import/no-anonymous-default-export */

import {CREAR_USUARIO, OBTENER_USUARIO} from '../../types/index';

export default (state, action) =>{
    switch (action.type) {
        case CREAR_USUARIO: {
            return {
              ...state,
              usuario: [...state.usuario, action.payload]
            };
          }
          case OBTENER_USUARIO: {
            return {
              ...state,
              usuario: action.payload
            };
          }
        default:
            return state;
    }
    
}