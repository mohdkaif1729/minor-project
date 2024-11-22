import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "../index.js";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    setError("");
    console.log(data);

    try {
      const response = await axios.post(
        "https://minor-project-backend-hcd9.onrender.com/api/v1/users/register", // Update URL as needed
        {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto my-20 w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 `}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Link to="/">
              <Logo />
            </Link>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("fullName", {
                required: true,
              })}
            />
            {/* {errors.message && (
              <p className="text-red-600">{errors.fullName.message}</p>
            )} */}
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
            {/* {errors.message && (
              <p className="text-red-600">{errors.message.password}</p>
            )} */}
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
