import React from "react";

import Ectoplasma from "@assets/Ectoplasma.png";

export default function LoginPage() {
  return (
    <div className="px-6 h-full text-slate-800 mt-36">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src={Ectoplasma} className="mx-auto" alt="Gengar Best Pokemon" />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Email address"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Password"
              />
            </div>

            <div className="flex flex-row justify-around items-center mb-6 text-center lg:text-left">
              <button
                type="button"
                className="border-2 px-2 py-2 m-1 w-36 rounded-md border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition duration-75 shadow-lg"
              >
                Login
              </button>
              <div>
                <p className="text-sm font-semibold mt-2 pt-1 text-slate-600">
                  Don&apos;t have an account?
                </p>
                <a
                  href="#!"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
