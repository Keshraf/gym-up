import { useState } from "react";

const Form = (props) => {
  const [type, setType] = useState("Business");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    let data;
    if (props.title === "Sign Up") {
      data = {
        type,
        email,
        password,
        code,
      };
    } else {
      data = {
        type,
        email,
        password,
      };
    }
    props.formSubmitHandler(data);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const codeChangeHandler = (event) => {
    setCode(event.currentTarget.value);
  };
  const typeChangeHandler = (event) => {
    setType(event.currentTarget.value);
  };
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center">
      <form
        className="w-96 h-fit bg-third rounded flex flex-col py-12 px-8 items-center font-prim"
        onSubmit={formSubmitHandler}
      >
        <h1 className="font-prim text-2xl text-white mb-4">{props.title}</h1>
        <div className="w-4/12 h-px bg-sec mb-3"></div>
        <p className="mr-auto font-prim text-prim mb-2">Role:</p>
        <select
          name="type"
          id="type"
          className="w-full h-12 pl-4 rounded mb-2 bg-sec"
          onChange={typeChangeHandler}
        >
          <option value="business">Business</option>
          <option value="trainer">Trainer</option>
          <option value="member">Member</option>
        </select>
        <p className="mr-auto font-prim text-prim mb-2">Email:</p>
        <input
          className="w-full h-12 pl-4 rounded mb-2 bg-sec"
          type="email"
          onChange={emailChangeHandler}
        />
        <p className="mr-auto font-prim text-prim mb-2">Password:</p>
        <input
          className="w-full h-12 pl-4 rounded mb-2 bg-sec"
          type="password"
          onChange={passwordChangeHandler}
        />
        {props.title !== "Sign Up" ? (
          <></>
        ) : (
          <>
            <p className="mr-auto font-prim text-prim mb-2">Code:</p>
            <input
              className="w-full h-12 pl-4 rounded mb-2 bg-sec"
              type="text"
              onChange={codeChangeHandler}
            />
          </>
        )}
        <button
          type="submit"
          className="w-full h-12 pl-2 rounded mb-2 outline outline-prim outline-1 mt-6 hover:bg-cover hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
