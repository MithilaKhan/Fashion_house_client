import { useEffect, useState } from "react";


const PopularInstructor = () => {
    const [popularInstructor , setPopularInstructor] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/instructorClass")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setPopularInstructor(data)
        })
    } ,[])
    return (
        <div className="grid lg:grid-cols-3 gap-y-8  justify-items-center my-14">
        {
            popularInstructor.map(popularIns=>
            <div key={popularIns._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-48" src={popularIns.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {popularIns.name}
                <div className="badge badge-secondary">Top</div>
              </h2>
              <p className="font-semibold">The number of Student: {popularIns.students}</p>
            
            </div>
          </div>)
        }
    </div>
    );
};

export default PopularInstructor;