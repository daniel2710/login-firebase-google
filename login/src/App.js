import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Home from './components/Home';
import Login from './components/login/Login';

//Firebase
import appFirebase from './firebase/credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(appFirebase);


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

  return (
    <Fragment>
      {usuario ? <Home/> : <Login/>}
    </Fragment>
  );
}

export default App;
