import { useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

function Login() {
  const userPasswordRef = useRef(null);
  const userNameRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const inputUser = {
      username: userNameRef.current.value,
      password: userPasswordRef.current.value,
    };
    if (
      storedUser &&
      storedUser.username === inputUser.username &&
      storedUser.password === inputUser.password
    ) {
      navigate("/");
      localStorage.setItem("token", "true");
    } else {
      alert("Please enter Name or Password correctly");
    }
  }

  function handleClick() {
    localStorage.setItem("token", "true");
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <section className="bg-gray-900 p-10 rounded-lg shadow-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold mb-6 text-white">
            Log in
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
            Sign in
          </button>
          <Link to="/">
            <button
              className="w-full py-3 mb-4 text-black bg-[#F1F1F1] hover:bg-gray-300 rounded-lg font-bold uppercase"
              type="button"
              onClick={handleClick}
            >
              Guest user
            </button>
          </Link>
          <p className="text-center text-gray-200">
            A new member?
            <NavLink
              to="/"
              className="ml-2 text-[#D87D4A] hover:text-[#FBAF85] underline"
            >
              Register
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
