import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center flex-col">
      <div className="w-[130px]">
        <img src="https://i.postimg.cc/wBK4zF19/image-396.png" alt="" />
      </div>
      <div className="text[#1E2D40] text-center font-medium text-xl mt-4">
        <h2>Welcome to Agile3 Team</h2>
        <h3>Login with your account to continue</h3>
      </div>
      <div className="flex mt-4 gap-4">
        <Link to="/login">
          <button className="py-[6px] px-4 font-medium bg-[#533FF0] hover:bg-[#3925d2] hover:shadow-2xl shadow-blue-800 rounded-lg text-white">
            Login
          </button>
        </Link>
        <Link to="signup">
          <button className="py-[6px] px-4 font-medium bg-[#533FF0] hover:bg-[#3925d2] hover:shadow-2xl shadow-blue-800 rounded-lg text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
