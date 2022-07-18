import {useState} from "react";
import {useRouter} from "next/router";
import LoginForm from "../../components/LoginForm";

import {useAuth} from "../../context/AuthUserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const {signInWithEmailAndPassword} = useAuth();

  const onSubmit = event => {
    event.preventDefault();
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push("/admin");
      })
      .catch(error => {
        console.log("error ", error.code);
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          setError(
            "There seems to be a problem with your credentials, please contact an admin."
          );
        } else {
          setError(error.message);
        }
      });
    event.preventDefault();
  };

  return (
    <LoginForm
      email={email}
      error={error}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
}
