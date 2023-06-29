import { Link, useNavigate } from "react-router-dom";
// import "../../index.SCSS"
import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Components/Shared/SocialLogin/SocialLogin";


const Login = () => {
  const navigate = useNavigate()
  const { signIn } = useContext(AuthContext);

  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        console.log(user);
        navigate("/agile3")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero h-screen">
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

          <div className="card flex-shrink-0 w-full  ">
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 w-[430px]">
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
                <label className="label flex justify-center">
                  <Link href="#" className=" text-center link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-1">
                <input type="submit" value="Continue" className="reg-btn  " />
              </div>
            </form>
            <h6 className="text-center flex gap-1 mt-2 justify-center">
              <span>Don&apos;t have an account?</span>
              <Link to="/signup">
                <span className="text-gray-400  font-semibold hover:underline">
                  Sign Up
                </span>
              </Link>
            </h6>
            <SocialLogin />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;
