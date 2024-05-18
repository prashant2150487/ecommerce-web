import { useState } from "react";
import { MdQuestionMark } from "react-icons/md";
const Login = () => {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [inputPassword, setPassword] = useState(data);

  function handlesubmit(e) {
    e.preventDefault();
    if (!inputData || ! inputPassword) {
      alert("Please fill all the fields");
    }
  }
  console.log(inputData,inputPassword)
  return (
    <>
      <div className="m-auto flex items-center justify-center flex-col mt-10  w-[100%] max-w-[370px] p-4  font-medium">
        <h2 className="text-2xl font-bold text-[#121212] ">
          Login to your account
        </h2>
        <form
          className="bg-white  w-full p-6 mt-7 flex flex-col gap-3 rounded-md shadow-xl"
          onSubmit={handlesubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="email" className="text- gray text-[15px]">
              Email Address
            </label>
            <input
              type="Email "
              className=" flex-1 rounded-md p-1 shadow-md outline-none border border-slate-600"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-gray text-[15px]">
              Password
            </label>
            <div className="flex justify-between items-center flex-1  p-1 shadow-slate-500 ">
              <input
                type="password"
                placeholder="password"
                className=" flex-1 p-1  rounded-md shadow-md outline-none border border-slate-600"
                value={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex  items-center  justify-center gap-1">
              <input
                type="checkbox"
                id="remerber"
                name="me"
                value="Bike"
                className=" mt-0 p-0"
              />
              <label htmlFor="remerber" className="p-0 mt-0 text-[14px]">
                Remerber me
              </label>
            </div>
            <div className="flex  items-center justify-center ">
              <a
                href="link"
                alt="#"
                className="text-blue-800 text-[13px] tracking-wide font-normal"
              >
                Forget Password
              </a>
              <MdQuestionMark />
            </div>
          </div>
          <button className=" flex justify-center items-center m-auto bg-blue-700 w-full p-1 rounded-md text-white">
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
    </>
  );
};

export default Login;
