import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../helpers/setAuthToken";

const Login = () => {
  const navigate = useNavigate();
  //reqres registered sample user
  const loginPayload = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://reqres.in/api/login",
        loginPayload
      );

      const token = data?.token;

      //set JWT token to local
      localStorage.setItem("token", token);

      //set token to axios common header
      setAuthToken(token);


      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" name="password" />
      <br></br>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Login;
