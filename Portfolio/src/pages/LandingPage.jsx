import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { FeaturedProjects } from "../components/Projects";


export const LandingPage = () => {
    return (<>
    <div className=" flex flex-col mx-24">
    <Navbar/>
    <HeroSection/>
    <FeaturedProjects/>
    <About/>  
    <Contact/>
    </div>
    </>);
}