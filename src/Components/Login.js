import React, { useContext } from "react";
import { DataContext } from './Aplication/DataContext'
import { auth } from "../firebaseconf"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const { email, setEmail, password, setPassword } = useContext(DataContext)


    const register = (e) => {
        e.preventDefaul();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("usuario registrado")
                console.log(userCredential);
            }).catch((error) => {
                console.log(error)
            });
    };

    const singIn = (e) => {
        e.preventDefaul();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }) 
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <div className="row mt-5">
                <div className="col-6">
                    <form onSubmit={register} className="form-group mt-3">
                        <h5>Crea una cuenta</h5>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="form-control mb-3"
                            type="email"
                            placeholder="email"
                            value={email}>
                        </input>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="form-control mb-3"
                            type="password"
                            placeholder="contraseña"
                            value={password}>
                        </input>
                        <button
                            className="btn btn-block btn-info btn-warning m-1 btn-sm"
                            type="submit">
                            Registrar
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <form onSubmit={singIn} className="form-group mt-3">
                        <h5>Inicia Sesión</h5>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="form-control mb-3"
                            type="email"
                            placeholder="email"
                            value={email}>
                        </input>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="form-control mb-3"
                            type="password"
                            placeholder="contraseña"
                            value={password}>
                        </input>
                        <button
                            className="btn btn-block btn-info btn-warning m-1 btn-sm"
                            type="submit">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;