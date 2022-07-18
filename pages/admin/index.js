import {useEffect} from "react";
import {useAuth} from "../../context/AuthUserContext";
import {useRouter} from "next/router";
import SignOutButton from "../../components/SignOutButton";
import Loading from "../../components/Loading";
import React from "react";

const Admin = () => {
  const {authUser, loading} = useAuth();
  const router = useRouter();

  useEffect(
    () => {
      if (!loading && !authUser) router.push("/");
    },
    [authUser, loading, router]
  );

  return (
    <React.Fragment>
      {authUser
        ? <div>
            <SignOutButton />
            <div>ADMIN PANEL</div>
          </div>
        : <Loading />}
    </React.Fragment>
  );
};

export default Admin;
