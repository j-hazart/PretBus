import { useRef, useState } from "react";
import axios from "axios";

function CreateAccount() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (password === passwordConfirm) {
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/user`)
            .then
            // reponse
            ();
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

export default CreateAccount;
