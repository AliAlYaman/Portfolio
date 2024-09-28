import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { FeaturedProjects } from "../components/Projects";


export const LandingPage = () => {
    return (<>
    <div className=" flex flex-col mx-24">
    <Navbar/>
    <HeroSection/>
    <FeaturedProjects/>
    </div>
    </>);
}