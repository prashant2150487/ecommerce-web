import React, { useState } from "react";
import { MdQuestionMark } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email || !password) {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <div className="m-auto flex items-center justify-center flex-col mt-10  w-[100%] max-w-[420px] p-4  font-medium shadow-stone-700">
        <h2 className="text-3xl font-bold text-[#121212] ">
          Register a new user
        </h2>
        <form
          className="bg-white  w-full p-6 mt-7 flex flex-col gap-3 rounded-md shadow-xl"
          onSubmit={handlesubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="email" className="text- gray text-[15px]">
              Full Name
            </label>
            <input
              type="email "
              placeholder="Enter your name"
              className=" flex-1 rounded-md p-1 shadow-md outline-none border border-slate-600"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text- gray text-[15px]">
              Email Address
            </label>
            <input
              type="email "
              placeholder=" Enter your email"
              className=" flex-1 rounded-md p-1 shadow-md outline-none border border-slate-600"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-gray text-[15px]">
              Password
            </label>
            <div className="flex justify-between items-center flex-1  p-1 shadow-slate-500 ">
              <input
                type="password"
                placeholder=" Enter your password"
                className=" flex-1 p-1  rounded-md shadow-md outline-none border border-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CgProfile className="w-10 h-7" />
          </div>
          <button className=" flex justify-center items-center m-auto bg-blue-700 w-full p-2 rounded-md text-white">
            Submit
          </button>
          <div className="flex items-center ">
            <div className="flex justify-center items-center">
              <h1 className="text-gray text-[15px]">Not have any account</h1>
              <MdQuestionMark />
            </div>
            <h1 className="text-blue-800 text-[13px] tracking-wide font-normal">
              Sign Up
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
