import React from "react";
import { DataContext } from './Aplication/DataContext'
import { auth } from '../firebaseconf'

const Login = () => {

    const { email, setEmail, password, setPassword } = useContext(DataContext)

    const userRegister = (e) => {
        e.preventDefaul()
        auth.createUserWithEmailAndPassWord(email, password)
            .then((res) => alert("Usuario Registrado"))
    }
    return (
        <>
            <div className="">
                <form onSubmit="registrarUsuario" className="form-group mt-3">
                    <input onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control mb-3" type="email"
                        placeholder="email">
                    </input>
                    <input onChange={(e) => { setPassword(e.target.value) }}
                        className="form-control mb-3" type="password"
                        placeholder="contraseña">
                    </input>
                    <input type="submit"
                        className="bt btn-block btn-info btn-warning"
                        placeholder="contraseña">
                    </input>
                </form>
            </div>
        </>
    )

}

export default Login;