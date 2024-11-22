import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../utils/Button.jsx";
import Input from "../utils/Input.jsx";
import Logo from "../utils/Logo.jsx";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login", // Update URL as needed
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );
      alert(response.data.message);
      console.log(response);

      if (response) {
        dispatch(authLogin());
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 my-20`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[50px]">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Login in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <NavLink
            to="/sign-up"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login Up
          </NavLink>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form
          method="POST"
          action="/api/v1/users/login"
          onSubmit={handleSubmit(login)}
          className="mt-8"
        >
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
