import PopularClass from "../../PopularClass/PopularClass";
import PopularInstructor from "../../PopularInstructor.jsx/PopularInstructor";
import Banner from "../Banner/Banner";
import TopSlider from "../Topslider/TopSlider";

const Home = () => {
    return (
        <div>
            <Banner/>
        <TopSlider/>
        <div>
            <h1 className="text-center m-6 font-bold text-purple-600 text-5xl italic">Popular Classes</h1>
            <PopularClass/>
        </div>
        <div>
            <h1 className="text-center m-6 font-bold text-pink-600 text-5xl italic">Popular Instructor</h1>
            <PopularInstructor/>
        </div>
            
        </div>
    );
};

export default Home;