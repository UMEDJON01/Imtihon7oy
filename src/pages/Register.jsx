import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const userNameRef = useRef(null);
  const userPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const username = userNameRef.current.value.trim();
    const password = userPasswordRef.current.value.trim();
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    const newUser = {
      username: username,
      password: password,
    };
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === newUser.username) {
      setError("User already exists");
    } else {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <section className="bg-gray-900 p-10 rounded-lg shadow-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold mb-6 text-white">
            Register
          </h4>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-200">
              User Name
            </label>
            <input
              ref={userNameRef}
              type="text"
              className="w-full p-3 text-gray-900 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              ref={userPasswordRef}
              type="password"
              className="w-full p-3 text-gray-900 rounded-lg"
              required
            />
          </div>
          <button
            className="w-full py-3 mb-4 text-white bg-[#D87D4A] hover:bg-[#FBAF85] rounded-lg font-bold uppercase"
            type="submit"
          >
            Sign up
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <p className="text-center text-gray-200">
            Already a member?
            <NavLink
              to="/"
              className="ml-2 text-[#D87D4A] hover:text-[#FBAF85] underline"
            >
              Login
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Register;
