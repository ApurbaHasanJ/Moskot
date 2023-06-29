import Lottie from "lottie-react";
import errorAni from "../../assets/84885-404-sleep-cat.json";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <>
      <Helmet>
        <title>Error | Moskot</title>
      </Helmet>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Lottie animationData={errorAni} loop={true} />
            <p className="text-2xl text-red-400 drop-shadow-xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/community" className=" my-btn rounded drop-shadow-xl ">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
