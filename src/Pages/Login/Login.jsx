import React, { useContext,useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';


const Login = () => {

  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    signInUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      setError("");
      Swal.fire({
        title: "Success!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate(from, { replace: true });
    })
    .catch(error =>{
      setError(error.message)
    });
  };


  return (

<div className="mt-12">
      <div className="border-2 border-[#ABABAB] px-4 md:px-12 py-4 md:py-6 md:w-1/2 mx-auto rounded-[10px]">
        <h2 className="mb-8 text-3xl p-5 text-pink-500 font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="email"
              {...register("email", { required: "Email is required" })}
              id=""
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type={show ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              id=""
              placeholder="Enter Password"
            />
            <p className="cursor-pointer absolute top-11 right-3 text-lg" onClick={() => setShow(!show)}>
              {show ? <span><FaEyeSlash></FaEyeSlash></span> : <span><FaEye></FaEye></span>}
            </p>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
            <p className="text-red-500">{error}</p>
          </div>
          <input
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-2 text-center">
          Don not have an account?{" "}
          <Link className="font-semibold text-pink-600" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="w-1/3 mx-auto mb-2 divider">Or</div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;