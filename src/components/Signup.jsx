import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = () => {
     const [mobile, setMobile] = React.useState('')
    return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <form
          action=""
          className="w-lg bg-slate-100 p-5 shadow-sm rounded-sm border-slate-200 border"
        >
          <h2 className="border-b border-indigo-700 pb-2 mb-4 text-center text-xl font-semibold">
            Signup
          </h2>
          <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full h-11 px-4 border border-slate-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full h-11 px-4 border border-slate-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full h-11 px-4 border border-slate-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-medium">
                Mobile
              </label>
              <PhoneInput
                country={"in"}
                value={mobile}
                onChange={(value) => setMobile(value)}
                enableSearch
                inputStyle={{width: '100%', height: '44px', borderRadius: '4px'}}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
