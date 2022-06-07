import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utlis";
// import { UserContext } from "../../contexts/user.context";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// import { async } from "@firebase/util";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  //   console.log(formFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Please Check Your Password Again");
          break;
        case "auth/user-not-found":
          alert("No user is associated with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          required
        />

        <div className="buttons-container">
          <Button type="submit" children="Sign In" />
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
