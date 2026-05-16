import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const { loginUser, googleLogin } =
    useContext(AuthContext);

  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Form Reference
  const formRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {

        // Success Message
        setSuccess("Login Successful");

        // Clear Form
        formRef.current.reset();

        // Redirect Home Page
        navigate("/");

      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {

        setSuccess("Google Login Successful");

        // Redirect Home Page
        navigate("/");

      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form
          ref={formRef}
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 duration-300 text-white py-3 rounded-lg font-semibold">
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create an Account
          </Link>
        </p>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 hover:bg-red-600 duration-300 text-white py-3 rounded-lg mt-5 font-semibold"
        >
          Continue with Google
        </button>

        {/* Success Message */}
        <p className="text-green-600 mt-4 text-center">
          {success}
        </p>

      </div>
    </div>
  );
};

export default Login;