import { userContext } from "../../Component/Context/user-context";
import { useContext, useEffect } from "react";
import SignIn from "../../Component/Sign-In/sign-in.component";
import SignUp from "../../Component/SignUp/sign-up.component";
import "./auth.styles.scss";

export default function Authentication() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}
