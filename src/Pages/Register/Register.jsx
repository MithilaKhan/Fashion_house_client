
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SignWithGoogle from "../../Components/SignWithGoogle";
import Swal from "sweetalert2";

export default function Register() {
  const [show , setShow]= useState(false)
  const [cshow , setCshow] = useState(false)
  const { register, handleSubmit,getValues , formState: { errors } } = useForm();
  const {signUp , updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = data => { 
    console.log(data) 
    signUp(data.email , data.password)
    .then(result => {

      const loggedUser = result.user;
      console.log(loggedUser);
      
    updateUserProfile(data.name , data.photoUrl)
    .then(() => {
      const user ={name:data.name , email:data.email}
        console.log('user profile info updated')
        
        fetch("http://localhost:5000/user" ,{
          method:"POST" ,
          headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User created successfully.',
              showConfirmButton: false,
              timer: 1500
          });
          navigate('/');
          }
        })
       

    })
      })
    .catch(error => console.log(error))

  };

  

  const ShowPasswordHandle= ()=>{
    setShow(!show)
  }
  const CShowPassword =() =>{
    setCshow(!cshow)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=740&t=st=1686166059~exp=1686166659~hmac=83f70ca8706e0e1d774381ec9962532ba35c71b7b1896da1d9f1997f0f8c3006" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold p-6 bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">Create a new account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            {/* Name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">This name is required</span>}
            </div>

            {/* email  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">This email is required</span>}
            </div>

            {/* PhotoUrl  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo </span>
              </label>
              <input type="url" name="photoUrl" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
              {errors.photoUrl && <span className="text-red-600">This email is required</span>}
            </div>

            {/* password  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex">
              <input type={show ? "text" : "password"} {...register("password", { required: true , minLength:{ value: 6,
            message: "Password is less than 6 characters"} , validate: (value) => {
              return (
                [/[A-Z]/ , /[!@#$%^&*(),.?":{}|<>]/ , /[0-9]/ ].every((pattern) =>
                  pattern.test(value)
                ) || "don't have a capital letter and don't have special character "
              );
            }, maxLength: 20  })} name="password" placeholder="password" className="input input-bordered w-full" />
              <p onClick={ShowPasswordHandle} className=" -mx-10 my-5"> {show?<FaEyeSlash/> : <FaEye/>}  </p>
              </div>
              {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
            </div>

              {/* confirm PassWord  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex">
              <input type={cshow ? "text" : "password"} {...register("cpassword", { required: true ,  validate: (value) => {
              const { password } = getValues();
              return password === value || " Passwords does not match";
            }  } )} name="cpassword" placeholder="confirm password" className="input input-bordered w-full" /> 
            <p onClick={CShowPassword} className=" -mx-10 my-5"> {cshow?<FaEyeSlash/> : <FaEye/>}  </p>
              </div>
              
              {errors.cpassword && <span className="text-red-600">{errors.cpassword.message}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Register</button>
            </div>
          </form>
          <p className="p-6 pt-2">Already have an Account?? <span className="bg-gradient-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text font-semibold"> <Link to="/login">Login</Link></span> </p> 
          <SignWithGoogle/>
          
        </div>
      </div>
    </div>
  );
}
