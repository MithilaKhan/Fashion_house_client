import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="mt-5 mb-20">
       {/* <div className=" w-full mx-auto ">  */}

<iframe className="mx-auto w-96 " src="https://embed.lottiefiles.com/animation/84918"></iframe>
{/* </div>  */}
 <h2 className="font-bold text-center text-pink-700 text-6xl">404</h2>
      <p className="my-3 text-xl font-semibold text-center text-orange-600">
        This Page Not Found
      </p>
      <div className="mt-5 text-center">
        <button className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white px-5 py-2 text-lg font-bold border-2 border-gray-400 rounded-full flex items-center mx-auto" onClick={handleBackHome}>
        <FaArrowLeft className="mr-2"></FaArrowLeft> Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
