import FeaturedWorks from "../components/FeaturedWork";
import RecentPost from "../components/RecentPost";
import Hero from "./Hero";
import Work from "./Work";

function Home () {
    return(
        <div>
            <Hero/>
            <RecentPost/>
            <FeaturedWorks/>
        </div>
    );
}
export default Home;