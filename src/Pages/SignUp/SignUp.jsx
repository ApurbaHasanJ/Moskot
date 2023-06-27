import { Link } from "react-router-dom";
import signUp from "../../assets/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Components/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, userName } = useContext(AuthContext);

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        userName(name);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content lg:gap-16 gap-8 flex-col lg:flex-row">
        <div className="w-full">
          <Lottie animationData={signUp} loop={false} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className=" text-center font-semibold text-4xl">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="my-btn"
                />
              </div>
            </form>
            <h6 className="text-center">
              Already have an account?
              <Link to="/login">
                <span className="text-[#283163] font-semibold hover:underline">
                  Login
                </span>
              </Link>
            </h6>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
