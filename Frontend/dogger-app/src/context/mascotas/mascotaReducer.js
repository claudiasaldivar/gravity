/* eslint-disable import/no-anonymous-default-export */

import {CREAR_MASCOTA, AGREGAR_MASCOTA_ERROR} from '../../types/index';

export default (state, action) =>{
    switch (action.type) {
        case CREAR_MASCOTA: {
            return {
              ...state,
              mascota: [...state.mascota, action.payload]
            };
          }
        default:
            return state;
    }
    
}