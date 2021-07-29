import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Inicio from './components/Inicio';
import PaseadorRegistro from './components/Paseador';
import PaseadorState from './context/paseador/paseadorState';
import AlertasState from './context/alertas/alertasState';
import UsuarioRegistro from './components/Usuario';
import UsuarioState from './context/usuario/usuarioState'
import MascotaRegistro from './components/Mascota';
import MascotaState from './context/mascotas/mascotaState';
import AgendaState from './context/agenda/agendaState';
import Agenda from './components/Agenda';

function App() {
  return (
    <AlertasState>
      <PaseadorState>
        <UsuarioState>
          <MascotaState>
          <AgendaState>

          <Router>
              <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/inicio" component={Inicio}/>
                <Route exact path="/paseador" component={PaseadorRegistro}/>
                <Route exact path="/usuario" component={UsuarioRegistro}/>
                <Route exact path="/mascotas" component={MascotaRegistro}/>
                <Route exact path="/agenda" component={Agenda}/>
              </Switch>  
            </Router>
          </AgendaState>
            
         </MascotaState>
        </UsuarioState>
      </PaseadorState>
    </AlertasState>
    
  );
    
    
}

export default App;
