import { useEffect, useState } from "react";

const PopularClass = () => {
    const [popularClasses , setPopularClasses] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/popularClass")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setPopularClasses(data)
        })
    } ,[])
    return (
        <div className="grid lg:grid-cols-3 gap-y-8  justify-items-center my-14">
            {
                popularClasses.map(popularClass=>
                <div key={popularClass._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={popularClass.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {popularClass.class_name}
                    <div className="badge badge-secondary">Top</div>
                  </h2>
                  <p className="font-semibold">The number of Student: {popularClass.students}</p>
                
                </div>
              </div>)
            }
        </div>
    );
};

export default PopularClass;