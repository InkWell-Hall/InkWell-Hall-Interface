import React from "react";
import logoblack from "../assets/images/logoblack.jpg";
import logowhite from "../assets/images/logowhite.png";
const Login = () => {
  return (
    <div className="flex">
      <div className="left-side flex flex-col w-[50%]">
        <img className="w-40 rounded-4xl ml-65 mt-10" src={logowhite} alt="" />
        <h1 className="text-5xl text-center font-lead-font ">Welcome Back !!</h1>
        <h3 className="text-center mt-10 font-body-font">
          Please enter your credentials to log in
        </h3>
<form className="flex flex-col justify-center items-center">
        <input
          type="Username"
          placeholder="Username"
          className="mt-10 rounded-2xl border px-3 py-3 w-80"
        />
        <input
          type="Password"
          required
          minLength="8"
          maxLength="16"
          placeholder="Password"
          className="mt-5 rounded-2xl border px-3 py-3 w-80"
        />
        </form>

        <p className="ml-40 mt-5 font-body-font">Forgot Password?</p>
        <button className="bg-black text-white rounded-4xl px-3 py-3 mt-10 w-80 ml-40 font-bold">
          SIGN IN
        </button>
      </div>

      <div className="right-side bg-black w-[50%] flex h-[100vh]">
        <div className=" flex flex-col text-white justify-center items-center">
          <img
            className="w-40 rounded-4xl ml-35 mt-10"
            src={logoblack}
            alt=""
          />
          <h1 className=" text-5xl ml-35 font-lead-font">InkWell-Hall</h1>
          <h1 className=" text-xl ml-35 font-lead-font ">LIBRARY</h1>
          <p className="mt-25 ml-50 text-xl font-lead-font">
            New to our platform? Sign Up now.
          </p>
          <button className="ml-55 border rounded-4xl px-3 py-3 w-50 mt-20 font-bold">
             <a href="/signup">SIGN UP</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
