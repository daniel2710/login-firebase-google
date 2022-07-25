import React from 'react';
import appFirebase from '../firebase/credentials';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = () => {

  return (
    <div className="container-fluid p-0 m-0 text-center">
        <div className="row p-0 m-0 align-items-start">
            <div className="col-md-12 d-flex flex-column login">

                <h1>Logueado correctamente, <strong>✅</strong></h1>

                <div>
                  <button onClick={()=>signOut(auth)} className='btn btn-sm btn-danger'>Cerrar sesión</button>
                </div>  

                <hr/>
            </div>
        </div>
    </div>
  )
}

export default Home