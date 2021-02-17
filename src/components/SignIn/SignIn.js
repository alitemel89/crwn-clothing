import React, { useReducer } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";
import { signInWithGoogle } from '../../firebase/FirebaseUtils';

const SignIn = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }), // <--reducer
    {
      email: "", // <--initial state
      password: "", // <--initial state
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={userInput.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={userInput.password}
          required
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
