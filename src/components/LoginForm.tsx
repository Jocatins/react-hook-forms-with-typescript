import React from "react";
import { useForm } from "react-hook-form";

// Schema validation library
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// styles
import Headers from "./Header";
import "../styles.css";

let renderCount = 0;

const schema = z.object({
  firstName: z.string().nonempty({ message: "This field is required" }),
  lastName: z.string(),
  age: z.number().min(10),
});

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: true,
  });
  renderCount++;
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
      <input {...register("firstName")} id="firstName" />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" {...register("lastName")} />

      <label htmlFor="age">Age</label>
      <input
        max="60"
        type="number"
        id="age"
        {...register("age", { valueAsNumber: true })}
      />

      {/* <label htmlFor="gender"></label>
      <select id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input value="true" type="checkbox" /> */}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
