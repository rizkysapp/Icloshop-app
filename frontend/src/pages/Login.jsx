import React from "react";
import { Layout, Styles } from "../style/Style";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className={`${Styles.flexCenter} h-screen bg-gradient-to-t from-gray-500 to-gray-900`}>
      <div className={` lg:w-1/3 px-10 py-8 bg-white ${Styles.boxShadow}`}>
        <h1 className={`${Styles.Heading1} mt-10`}>Log in to your account</h1>

        <form className="mt-8">
          <div>
            <label className={Layout.titleInput}>Email Address</label>
            <input type="email" placeholder="Enter Email Address" className={Layout.input} autofocus autocomplete required />
          </div>

          <div className="mt-4">
            <label className={Layout.titleInput}>Password</label>
            <input type="password" placeholder="Enter Password" minlength="6" className={Layout.input} required />
          </div>

          <div className="text-right mt-2">
            <Link className={Styles.linkPrimary}>Forgot Password?</Link>
          </div>

          <button type="submit" className={`w-full block ${Layout.BtnPrimary}`}>
            Log In
          </button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <button type="button" className={`w-full block ${Layout.BtnLigth}`}>
          <div className={Styles.flexCenter}>
            <SiGmail className="text-red-800 text-xl" />
            <span className="ml-4">Log in with Google</span>
          </div>
        </button>

        <p className="mt-8">
          Need an account?{" "}
          <Link to={"/signup"} className="text-blue-500 hover:text-blue-700 font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
