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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
  });

  const firstName = watch("firstName");
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
      <p>{firstName}</p>
      <p>{errors.firstName?.message}</p>

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        {...register("lastName", {
          required: "This is required",
          minLength: {
            value: 4,
            message: "The min length should be 4 characters",
          },
        })}
      />
      <p>{errors.lastName?.message}</p>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" {...register("age")} />

      {/* <label htmlFor="gender"></label>
      <select id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input value="yes" type="checkbox" /> */}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
