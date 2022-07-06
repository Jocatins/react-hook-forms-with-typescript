import React from "react";
import { useForm } from "react-hook-form";
// styles
import Headers from "./Header";
import "../styles.css";

let renderCount = 0;

// type formValues = {
//   firstName: string;
//   lastName: string;
//   age: string;
//   pets: { name: string }[];
// };

const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      pets: [],
      // nested data
      // yourDetails: {
      //   nickname: " ",
      // },
    },
  });

  console.log(errors);
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
      <input
        {...register("firstName", { required: "Enter your name" })}
        id="firstName"
      />
      <p>{errors?.firstName?.message}</p>
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        {...register("lastName", { required: "Enter your last name" })}
      />
      <p>{errors?.lastName?.message}</p>
      {/* <label htmlFor="NickName">Nick Name:</label>
      <input
        id="nickName"
        {...register("yourDetails.nickname", {
          required: "Enter your Nick Name",
        })}
      />
      <p>{errors?.yourDetails?.nickname?.message}</p> */}
      <label htmlFor="age">Age</label>
      <input
        max="60"
        type="number"
        id="age"
        {...register("age", {
          valueAsNumber: true,
          required: "Enter your age",
        })}
      />

      {/* <label htmlFor="gender"></label>
      <select id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input value="true" type="checkbox" /> */}

      <input type="submit" disabled={!isValid} />
    </form>
  );
};

export default LoginForm;
