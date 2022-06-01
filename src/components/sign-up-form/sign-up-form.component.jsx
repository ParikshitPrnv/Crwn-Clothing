import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";

import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //   console.log(formFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { email, password, confirmPassword } = event.target;
    if (password !== confirmPassword) {
      alert("password is not confirmed");
      return;
    } //   console.log({ password, confirmPassword });

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
          required
        />

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

        <FormInput
          label="Confirm Your Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
          required
        />

        <Button type="submit" children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
