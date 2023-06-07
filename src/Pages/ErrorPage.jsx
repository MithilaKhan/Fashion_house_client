import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
//   UseTitle("Error Page")
  return (
    <div>
<div className="text-center text-red-600 font-bold text-2xl mx-auto " id="error-page">
      <img className="mx-auto w-96 h-1/2" src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1919.jpg?w=740&t=st=1686154258~exp=1686154858~hmac=c452fcea33667142eb997355fea509efb3d6628b887351948c47333e6e8a3105" alt="" />
      <h1>Oops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-6">
        <i>{error.statusText || error.message}</i>

      </p>
      <Link  to="/"><button className='btn bg-gradient-to-br from-pink-500  to-purple-600 border-0 ps-8 pe-8'>Back to Home</button></Link>
    </div>

    </div>
    
  );
}