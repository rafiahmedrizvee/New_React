import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const {
    createUser,
    updateUser,
    googleLogin,
  } = useContext(AuthContext);

  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Form Reference
  const formRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {

        // Update User Name
        updateUser(name)
          .then(() => {

            // Success Message
            setSuccess("Signup Successful");

            // Clear Form
            formRef.current.reset();

            // Go Home Page
            navigate("/");

          })
          .catch((error) => console.log(error));

      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {

        // Redirect Home
        navigate("/");

      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Signup
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSignup}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold duration-300">
            Signup
          </button>

        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-5 font-semibold duration-300"
        >
          Continue with Google
        </button>

        <p className="text-green-600 mt-4 text-center">
          {success}
        </p>

      </div>
    </div>
  );
};

export default SignUp;