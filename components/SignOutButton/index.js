import styles from "./SignOutButton.module.scss";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useAuth} from "../../context/AuthUserContext";

const SignOutButton = () => {
  const {authUser, loading, signOut} = useAuth();
  const router = useRouter();
  useEffect(
    () => {
      if (!loading && !authUser) router.push("/");
    },
    [authUser, loading, router]
  );

  return (
    <button className={styles.button} onClick={signOut}>
      Sign out
    </button>
  );
};

export default SignOutButton;
