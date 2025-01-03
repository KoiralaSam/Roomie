import "./signUp.styles.scss";
import FormInput from "../Form/form-component";
import { useState } from "react";

const defaultFormFields = { email: "", password: "" };
export default function SignUp() {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {};

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
