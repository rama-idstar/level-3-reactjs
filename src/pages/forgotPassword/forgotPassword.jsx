import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const formatEmail = email.toLocaleLowerCase()

    if (storedUser && storedUser.email === formatEmail) {
      setStep(2);
    } else {
      setErrorMessage("Email not found");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    storedUser = { ...storedUser, password: newPassword };
    localStorage.setItem("user", JSON.stringify(storedUser));

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>

        {step === 1 ? (
          <form onSubmit={handleEmailSubmit}>
            <input
              className="w-full p-2 mb-4 border rounded"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit}>
            <input
              className="w-full p-2 mb-4 border rounded"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Reset Password
            </button>
          </form>
        )}

        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}

        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
