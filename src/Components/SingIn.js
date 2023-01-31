import { Form } from "react-bootstrap";
import firebaseDb from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(firebaseDb)

const SingIn = () => {

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.formEmail1.value;
    const password = e.target.formPassword1.value;
    console.log(email, password);

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
        alert("Has iniciado sesión correctamente")
        e.target.reset();
      })
      .catch(err => {
          alert(err.message)
        });
    };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Form.Group controlId="formEmail1">
          <div className="w-75  mb-3 ms-5">
          <h5 className="mb-3">Inicia Sesión</h5>
            <Form.Control type="email" placeholder="Correo electrónico" />
          </div>
        </Form.Group>
        <Form.Group controlId="formPassword1">
          <div className="w-75  mb-3 ms-5">
            <Form.Control required type="password" placeholder="Contraseña" />
          </div>
        </Form.Group>
        <div className="w-75 mb-3 ms-5">
        <button
             className="btn btn-block btn-info btn-warning m-1 btn-sm"
             type="submit">
            Ingresar
            </button>
        </div>
      </form>
  </>
  )
}

export default SingIn;