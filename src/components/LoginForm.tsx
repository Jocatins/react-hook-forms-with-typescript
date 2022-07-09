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
    watch,
    formState,
    reset,
    trigger,
    setError,
    formState: { errors, isValid, isDirty, isSubmitted, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,

      // nested data
      // yourDetails: {
      //   nickname: " ",
      // },
    },
    criteriaMode: "all",
  });
  renderCount++;

  // console.log(errors);
  // console.log("isDirty", isDirty);
  // console.log("is Submitted", isSubmitted);
  // console.log("isSubmitSuccessful", isSubmitSuccessful);
  // watch in an array
  // console.log(watch(["firstName", "lastName"]));

  // const firstName = watch("firstName");

  // watch for useEffect
  // React.useEffect(() => {
  //   const subscription = watch((data) => {
  //     console.log(data);
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [watch]);

  // useEffect formState
  // React.useEffect(() => {
  //   console.log("useEffect form state", formState.isDirty);
  // }, [formState]);

  // useEffect for reset
  // React.useEffect(() => {
  //   if (formState.isSubmitted) {
  //     reset({
  //       firstName: "jocatins",
  //       lastName: "titan",
  //       age: 30,
  //     });
  //   }
  // }, [formState, reset]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("Data on the form", data);
      })}
    >
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      {/* <p>
        {firstName === "titan"
          ? "this is the real titan"
          : "this is the fake titan"}
      </p> */}
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

      {/* Reset API */}

      {/* <button
        type="submit"
        onClick={() => {
          reset({
            firstName: "titan",
            lastName: "'Fidel",
            age: 34,
          });
        }}
      >
        Reset
      </button> */}

      {/* trigger API */}
      {/* <button
        type="button"
        onClick={async () => {
          const output = await trigger("firstName", { shouldFocus: true });
          console.log("output", output);
        }}
      >
        trigger
      </button> */}
      {/* SetError API */}
      <button
        type="button"
        onClick={() =>
          setError("firstName", {
            types: { testMsg: "test message ", testMsg1: "test message 1" },
          })
        }
      >
        setError
      </button>

      <p>{errors.firstName?.types?.testMsg}</p>
      <p>{errors.firstName?.types?.test1Msg1}</p>

      <input type="submit" disabled={!isValid} />
    </form>
  );
};

export default LoginForm;
