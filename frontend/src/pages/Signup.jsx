import { Styles, Layout } from "../style/Style";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className={`${Styles.flexCenter} h-screen bg-gradient-to-t from-gray-500 to-gray-900`}>
      <div className={` lg:w-1/3 px-10 py-5 bg-white ${Styles.boxShadow}`}>
        <h1 className={`${Styles.Heading1} mt-8`}>Register to your account</h1>

        <form className="mt-2">
          <div className="mt-7 space-y-2">
            <div>
              <label className={Layout.titleInput}>Name</label>
              <input type="text" placeholder="Enter Name" className={Layout.input} required />
            </div>

            <div>
              <label className={Layout.titleInput}>Email Address</label>
              <input type="email" placeholder="Enter Email Address" className={Layout.input} required />
            </div>

            <div>
              <label className={Layout.titleInput}>Password</label>
              <input type="password" placeholder="Enter Password" className={Layout.input} required />
            </div>

            <div>
              <label className={Layout.titleInput}>Confirm Password</label>
              <input type="password" placeholder="Enter Confirm Password" className={Layout.input} required />
            </div>
          </div>

          <div class="flex mt-8 items-start">
            <div class="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" class={Styles.checkbox} required="" />
            </div>
            <div class="ml-3 text-sm">
              <label for="terms" class="font-light text-gray-800">
                I accept the{" "}
                <Link class="font-medium text-blue-500 hover:underline" href="l">
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>

          <button type="submit" className={`w-full block ${Layout.BtnPrimary}`}>
            Create an account
          </button>
        </form>

        <hr className="my-5 border-gray-300 w-full" />

        <p className="my-5">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:text-blue-700 font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
