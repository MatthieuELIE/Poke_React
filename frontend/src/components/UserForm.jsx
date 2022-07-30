import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from "@components/UserContextProvider";
import { signin } from "@services/api";

import Charizard from "@assets/Charizard.png";

export default function UserForm() {
  const navigate = useNavigate();

  const [error, setError] = useState();
  const { setUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    try {
      const newUser = await signin(formData);

      setUser(newUser);
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  return (
    <div className="px-6 h-full text-slate-800 mt-24 bg-amber-100">
      <div className="flex flex-col xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img
            src={Charizard}
            className="mx-auto w-1/2 md:w-4/5"
            alt="Gengar Best Pokemon"
          />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 my-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-12">
              <input
                type="text"
                className="form-control mb-6 block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Email address"
                {...register("email")}
              />
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Confirm Email address"
                {...register("emailConfirm")}
              />
            </div>

            <div className="mb-12">
              <input
                type="password"
                className="form-control mb-6 block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Password"
                {...register("password")}
              />
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-slate bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:border-2 focus:bg-slate focus:border-slate-600 focus:outline-none shadow-lg"
                placeholder="Confirm Password"
                {...register("passwordConfirm")}
              />

              {error && (
                <p className="mb-8 text-xl text-center text-red-700 my-6">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-row justify-around items-center mb-6 text-center lg:text-left">
              <button
                type="submit"
                className="border-2 px-2 py-2 m-1 w-36 rounded-md border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition duration-75 shadow-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
