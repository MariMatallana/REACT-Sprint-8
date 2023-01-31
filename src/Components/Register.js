import { Form } from "react-bootstrap";
import firebaseDb from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SingIn from "./SingIn";
const auth = getAuth(firebaseDb)

const Register = () => {

    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.formEmail.value;
        const password = e.target.formPassword.value;
        console.log(email, password);

        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
                alert("Usuario registrado")
                e.target.reset();
            })
            .catch(err => {
                alert(err.message)
            });
    };

    return (
        <>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <form onSubmit={submitHandler}>
                        <Form.Group controlId="formEmail">
                            <div className="w-75 mx-auto mb-3">
                                <h5 className="mb-3">Crea una cuenta</h5>
                                <Form.Control type="email" placeholder="Correo electrónico" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <div className="w-75 mx-auto mb-3">
                                <Form.Control required type="password" placeholder="Contraseña" />
                            </div>
                        </Form.Group>
                        <div className="w-75 mx-auto mb-3">
                            <button
                                className="btn btn-block btn-info btn-warning m-1 btn-sm"
                                type="submit">
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <SingIn></SingIn>
                </div>
            </div>
        </>
    )
}

export default Register