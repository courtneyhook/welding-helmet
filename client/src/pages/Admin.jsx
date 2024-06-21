import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Admin = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const loginResponse = await login({
      variables: { email: formState.email, password: formState.password },
    });
    const token = loginResponse.data.login.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Admin;
