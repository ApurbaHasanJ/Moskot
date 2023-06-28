import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/community";
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mb-3">
       <div className="divider">OR</div>
      <div className="form-control mt-4 ">
        <button
          onClick={handleGoogleSignIn}
          className=" w-full flex justify-center items-center gap-3 blue-btn-dis border-[#4C54F8]  text-[#4C54F8] hover:bg-[#cacdfc] ">
          <img
            className="w-6 h-6"
            src="https://i.postimg.cc/4NhHcV5v/google.png"
            alt=""
          />
          <span className="capitalize ">Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
