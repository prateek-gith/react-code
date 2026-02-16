import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    // console.log(data)
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userDataa = await authService.getCurrentUser();
        useDispatch(login(userDataa));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <span>
            <Logo />
          </span>
        </div>

        <h2>Sign Up To Create Account</h2>
        <p>
          Already Have An Account
          <Link to="/login">Sign In</Link>
        </p>
        {error && <p>{error}</p>}
      </div>

      <form onSubmit={handleSubmit(signup)}>
        <div>
          <Input
            label="Name : "
            placeholder="Enter FullName"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            placeholder="Enter Email"
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
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
}
