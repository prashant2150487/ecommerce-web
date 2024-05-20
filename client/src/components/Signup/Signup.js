import React, { useState } from "react";
import { MdQuestionMark } from "react-icons/md";
import { Link } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  console.log(name, email, password, avatar);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the fields");
    }
  };
  function handleFileInputChange() {

  }
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12">
      <div className="m-auto flex items-center justify-center flex-col mt-10  w-[100%] max-w-[420px] p-4  font-medium shadow-stone-700">
        <h2 className="text-3xl font-extrabold text-[#121212] ">
          Register a new user
        </h2>
        <form
          className="bg-white  w-full p-6 mt-7 flex flex-col gap-3 rounded-md shadow-xl"
          onSubmit={handlesubmit}
        >
          <div className="flex flex-col gap-1 ">
            <label
              htmlFor="email"
              className="text-gray-700 font-medium text-[15px] "
            >
              Full Name
            </label>
            <input
              type="text"
              name="text"
              autoComplete="name"
              required
              placeholder="Enter your name"
              className=" flex-1 rounded-md p-1 shadow-md border border-slate-900 broder border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm  font-medium text-[15px]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder=" Enter your email"
              className=" flex-1 rounded-md p-1 shadow-md border border-slate-900 broder border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-gray-700 font-medium text-sm text-[15px]"
            >
              Password
            </label>
            <div className="flex justify-between items-center flex-1  p-1 shadow-slate-500 relative">
              <input
                type={!visible ? "password" : "text"}
                name="password"
                required
                autoComplete="password"
                placeholder="Enter your password"
                className=" flex-1 rounded-md p-1 shadow-md border border-slate-900 broder border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!visible ? <AiOutlineEye onClick={() => setVisible(!visible)} size={25} className="cursor-pointer absolute top-3 right-4" /> : <AiOutlineEyeInvisible onClick={() => setVisible(!visible)} size={25} className="cursor-pointer absolute top-3 right-4" />}
            </div>
          </div>
          <div className="flex justify-left items-center">
            <RxAvatar className="w-10 h-7" />
            <label>
              <span className="shadow-md px-2 py-1 ml-2 border-sm">Upload file</span>
              <input type="file" accept=".jpg,.png,.png" className="hidden" onChange={handleFileInputChange} />
            </label>

          </div>
          <button className=" flex justify-center items-center m-auto bg-blue-700 w-full p-2 rounded-md text-white ">
            Submit
          </button>
          <div className="flex items-center ">
            <div className="flex justify-center items-center">
              <h1 className="text-gray text-[15px]">Already have an account ?</h1>
              <MdQuestionMark />
            </div>
            <Link to="/login" className="text-blue-600 text-[13px] tracking-wide font-normal">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
