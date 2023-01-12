import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormCreateAccount() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="createAccount"
      onSubmit={(e) => {
        e.preventDefault();

        if (password === passwordConfirm && password.length > 5) {
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
              name: nameRef.current.value,
              email: emailRef.current.value,
              password,
            })
            .then((rep) => {
              if (rep.status === 201) {
                navigate("/");
              } else {
                setPassword("");
                setPasswordConfirm("");
              }
            });
        }
      }}
    >
      <input ref={nameRef} type="text" placeholder="Prénom" />
      <input ref={emailRef} type="email" placeholder="adresse@email.fr" />
      <input
        type="password"
        placeholder="Mot de passe "
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmer mot de passe "
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button type="submit">Creer</button>
    </form>
  );
}

export default FormCreateAccount;
