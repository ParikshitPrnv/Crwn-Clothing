import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //   console.log(formFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

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
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create New Account</h1>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
          required
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />

        <label>Create Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
          required
        />

        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
};

export default SignUp;
