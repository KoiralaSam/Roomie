import React, { useState } from "react";
import { useEffect, useContext } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../Utils/firebase-utils";

import { userContext } from "../Context/user-context";

import { useNavigate } from "react-router-dom";

import "./sign-in.styles.scss";

import FormInput from "../Form/form-component";

const defaultFormFields = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { currentUser } = useContext(userContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInAuthWithEmailAndPassword(email, password);
    resetFormFields();
    navigate("/home");
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/home");
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <button className="submitButton" type="submit">
          Sign In
        </button>

        <button className="googleButton" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
