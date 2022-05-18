import "./sign-in.styles.scss";
import { Link } from "react-router-dom";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis.js";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlis.js";
import { doc } from "firebase/firestore";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
      <SignUp />
    </div>
  );
}

export default SignIn;
