import React, {useState, Fragment} from 'react';
import logo from '../assets/logo.jpg';
import Spinner from './layout/Spinner';

const Welcome = () => {
  const [cargando, guardarCargando] = useState(false);

  const spinner =() => {
    guardarCargando(true);

    setTimeout(() => {
      window.open('/inicio',"_self")
    }, 3000);
  }

    return ( 
    <Fragment>
      <div className="cajaBienvenida">
        <div className="jumbotronBienvenida">
            
            {cargando ? <Spinner /> : 
              <div className="doggerLogo" onClick={spinner}>
                <img src={logo} alt="Dogger" className="doggerImagen"/>
                <h1>Bienvenido a Dogger App</h1>
              </div>
            }
      </div>

    </div>
    </Fragment>
     );
}
 
export default Welcome;