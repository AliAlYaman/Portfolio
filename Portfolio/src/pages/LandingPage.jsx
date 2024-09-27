import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";


export const LandingPage = () => {
    return (<>
    <div className=" flex flex-col mx-12">
    <Navbar/>
    <HeroSection/>
    </div>
    </>);
}