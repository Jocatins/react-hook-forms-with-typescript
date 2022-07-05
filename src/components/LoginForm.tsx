import React from "react";
import { useForm } from "react-hook-form";
import "../styles.css";
import Headers from "./Header";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  developer: string;
};

const LoginForm = () => {
  renderCount++;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        {...register("firstName", { required: "This is required" })}
      />
      {errors.firstName && <p>This is required</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        {...register("lastName", {
          required: "This is required",
          minLength: {
            value: 4,
            message: "The min length should be at least 4 characters",
          },
        })}
      />
      {errors.lastName?.message}

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        {...register("age", { valueAsNumber: true, required: true })}
      />
      {errors.age && <p>Enter a numeric value</p>}

      <label htmlFor="gender"></label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input {...register("developer")} value="true" type="checkbox" />

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
