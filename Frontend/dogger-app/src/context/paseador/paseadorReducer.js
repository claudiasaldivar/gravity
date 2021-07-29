/* eslint-disable import/no-anonymous-default-export */
import {CREAR_PASEADOR, AGREGAR_PASEADOR_ERROR} from '../../types/index';

export default (state, action) =>{
    switch (action.type) {
        case CREAR_PASEADOR: {
            return {
              ...state,
              paseador: [...state.paseador, action.payload]
            };
          }
        default:
            return state;
    }
    
}