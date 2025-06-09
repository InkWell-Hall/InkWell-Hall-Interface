import React from "react";
import logoblack from "../assets/images/logoblack.jpg";
import logowhite from "../assets/images/logowhite.png";

const SignUp = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col left-side  bg-black w-[50%] h-[100vh] text-white justify-center items-center">
        <img className="w-40 rounded-4xl mt-10" src={logoblack} alt="" />
        <h1 className=" text-5xl  font-lead-font">InkWell-Hall</h1>
        <h1 className=" text-xl font-lead-font ">LIBRARY</h1>
        <p className="mt-25 text-xl font-lead-font">
          Already have an Account? Sign In now.
        </p>
        <button className=" border rounded-4xl px-3 py-3 w-50 mt-20 font-bold">
         <a href="/login">SIGN IN</a>
        </button>
      </div>

      <div className="flex right-side flex-col w-[50%]">
        <div className="flex gap-1 justify-center items-center">
            <h1 className=" flex text-5xl font-lead-font">Sign Up</h1>
        <img className="w-40 rounded-4xl mt-10" src={logowhite} alt="" />
        </div>
        <h3 className="text-center mt-5 font-lead-font">
          Please provide your infomation to sign up.
        </h3>
        <form className="flex flex-col justify-center items-center">
          <input
            type="Name"
            placeholder="Username"
            className="mt-7 rounded-2xl border px-2 py-2 w-80"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="mt-7 rounded-2xl border px-2 py-2 w-80"
          />
          <div className="flex gap-5">
            <input
              type="Age"
              placeholder="Age"
              className="mt-7 rounded-2xl border px-2 py-2 w-50"
            />
            <input
              type="Password"
              required
              minLength="8"
              maxLength="16"
              placeholder="Password"
              className="mt-7 rounded-2xl border px-2 py-2 w-50 "
            />
          </div>
          <button className="border rounded-4xl px-3 py-3 w-50 mt-15 font-bold bg-black text-white">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
