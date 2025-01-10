import "./signUp.styles.scss";
import FormInput from "../Form/form-component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../Utils/firebase-utils";
import { createUserDocumentFromAuth } from "../../Utils/firebase-utils";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName: "",
};
export default function SignUp() {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords donot match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      createUserDocumentFromAuth(user, { displayName, email, location });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(error);
    }
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword, displayName } = formFields;

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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
          type="text"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="confirmPassword"
          type="text"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <select
          name="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          <option value="Select Location">Select Location</option>
          <option value="ULM">University of Louisiana Monroe</option>
          <option value="UTA">University of Texas at Arlington</option>
          <option value="LATECH">La Tech University</option>
          <option value="DCC">Dallas Community College</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
