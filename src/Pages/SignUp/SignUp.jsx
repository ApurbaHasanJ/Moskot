import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Components/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, userProfile } = useContext(AuthContext);

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value; // Add this line
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        userProfile(name, photoURL);
        const user = result.user;
        navigate("/community");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="w-[130px]">
          <img src="https://i.postimg.cc/wBK4zF19/image-396.png" alt="" />
        </div>

        <h2 className="font-medium flex items-center gap-2 text-[40px] ">
          <span>Welcome to</span>
          <span className="font-bold text-[40px] text-[#1E2D40] text-center">
            Back!
          </span>
        </h2>
        <div className="card flex-shrink-0 w-full">
          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-4 w-[430px]">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input rounded-md text-[#5242F0] border-[#5242F0]"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input rounded-md text-[#5242F0] border-[#5242F0]"
              />
            </div>
            <div className="form-control ">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input rounded-md text-[#5242F0] border-[#5242F0]"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input rounded-md text-[#5242F0] border-[#5242F0]"
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="reg-btn" />
            </div>
          </form>
          <h6 className="text-center flex gap-1 mt-2 justify-center">
            Already have an account?
            <Link to="/login">
              <span className="text-gray-400  font-semibold hover:underline">
                Login
              </span>
            </Link>
          </h6>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
