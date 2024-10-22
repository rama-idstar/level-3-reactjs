import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // const storedUser = JSON.parse(localStorage.getItem("user"));
    // const formatEmail = email.toLocaleLowerCase()
    // if (
    //   storedUser &&
    //   storedUser.email === formatEmail &&
    //   storedUser.password === password
    // ) {
      navigate("/karyawan");
    // } else {
    //   setErrorMessage("Invalid email or password");
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            className="w-full p-2 mb-4 border rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 mb-4 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}
        <div className="mt-4 text-center">
          <Link to="/register" className="text-blue-500">
            Register
          </Link>{" "}
          |
          <Link to="/forgot-password" className="text-blue-500">
            {" "}
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
