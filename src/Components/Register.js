import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig'
import { useState } from "react";

function Register() {

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const singUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            alert("Usuario registrado correctamente")
            // ...
        })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     //const errorMessage = error.message;
        //     alert(errorCode)
        //     // ..
        // });
    }

    return (

        <>
            <div className="row mt-5">
                <div className="col-6">
                    <form className="form-group mt-3">
                        <h5>Crea una cuenta</h5>
                        <input
                            onChange={(e) =>  setEmail(e.target.value) }
                            className="form-control mb-3"
                            type="email"
                            placeholder="email"
                            // value={email}
                            >
                        </input>
                        <input
                             onChange={(e) =>  setPassword(e.target.value)}
                            className="form-control mb-3"
                            type="password"
                            placeholder="contraseña"
                            // value={password}
                            >
                        </input>
                        <button
                            className="btn btn-block btn-info btn-warning m-1 btn-sm"
                            onClick={singUp}>
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );

}
export default Register;


// import { createUserWithEmailAndPassword} from 'firebase/auth'
// import { auth } from "../firebaseConfig"
// import { createContext, useContext } from 'react';

// export 

// const Register = () => {

//   async function registra() {
//         e.preventDefaul();
//         const email = "mari@marim.com"
//         const password = "12365844"
//         console.log(email, password)
//         await createUserWithEmailAndPassword(auth, email, password)
//             .then((res) => {
//                 alert("usuario registrado")
//                 console.log(res);
//             })
//             // .catch((error) => {
//             //     console.log(error)
//             // });
//     };

//     // const singIn = (e) => {
//     //     e.preventDefaul();
//     //     signInWithEmailAndPassword(auth, email, password)
//     //     .then((userCredential) => {
//     //         console.log(userCredential)
//     //     }) 
//     //     .catch((err) => {
//     //         console.log(err)
//     //     })
//     // }


//     return (
//         <>
//             <div className="row mt-5">
//                 <div className="col-6">
//                     <form  className="form-group mt-3">
//                         <h5>Crea una cuenta</h5>
//                         {/* <input
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             className="form-control mb-3"
//                             type="email"
//                             placeholder="email"
//                             value={email}>
//                         </input>
//                         <input
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             className="form-control mb-3"
//                             type="password"
//                             placeholder="contraseña"
//                             value={password}>
//                         </input> */}
//                         <button
//                             className="btn btn-block btn-info btn-warning m-1 btn-sm"
//                            onClick={() => registra}>
//                             Registrar
//                         </button>
//                     </form>
//                 </div>
//                 <div className="col-6">
//                     {/* <form onSubmit={singIn} className="form-group mt-3">
//                         <h5>Inicia Sesión</h5>
//                         <input
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             className="form-control mb-3"
//                             type="email"
//                             placeholder="email"
//                             value={email}>
//                         </input>
//                         <input
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             className="form-control mb-3"
//                             type="password"
//                             placeholder="contraseña"
//                             value={password}>
//                         </input>
//                         <button
//                             className="btn btn-block btn-info btn-warning m-1 btn-sm"
//                             type="submit">
//                             Ingresar
//                         </button>
//                     </form> */}
//                 </div>
//             </div>
//         </>
//     )

// }

// export default Register;