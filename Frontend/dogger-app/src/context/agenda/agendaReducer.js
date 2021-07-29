/* eslint-disable import/no-anonymous-default-export */

import {CREAR_AGENDA, OBTENER_AGENDA, AGREGAR_AGENDA_ERROR} from '../../types/index';

export default (state, action) =>{
    switch (action.type) {
        case CREAR_AGENDA: {
            return {
              ...state,
              agenda: [...state.agenda, action.payload]
            };
          }
          case OBTENER_AGENDA: {
            return {
              ...state,
              agenda: action.payload
            };
          }
        default:
            return state;
    }
    
}