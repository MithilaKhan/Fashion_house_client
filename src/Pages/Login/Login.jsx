import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SignWithGoogle from "../../Components/SignWithGoogle";

export default function Login() {
  const [show , setShow]= useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {logIn}= useContext(AuthContext)
  const onSubmit = data => {
    console.log(data);
    logIn(data.email , data.password)
    .then(result => {

      const loggedUser = result.user;
      console.log(loggedUser);
      
    })
    .catch(error => console.log(error))
  }

  console.log(watch("example")); // watch input value by passing the name of it

  const ShowPasswordHandle= ()=>{
    setShow(!show)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1686165937~exp=1686166537~hmac=a70d0a1f5ec62aef64bd24ef1ec3b9d13f1aff93491ee76ca27496d4a2a066c2" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold p-6 bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text">Login Now</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">This email is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex">
              <input type={show ? "text" : "password"} {...register("password", { required: true , minLength:6 , maxLength: 20  })} name="password" placeholder="password" className="input input-bordered w-full"  />
              <p onClick={ShowPasswordHandle} className=" -mx-10 my-5"> {show?<FaEyeSlash/> : <FaEye/>}  </p>
              </div>
              
              {errors.password && <span className="text-red-600">This password is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white ">Login Now</button>
            </div>
          </form>
          <p className="p-6">New to Fashion House?? Please <span className="bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text font-semibold" ><Link to="/register">Create an account</Link> </span> </p>
          <SignWithGoogle/>
        </div>
      </div>
    </div>
  );
}