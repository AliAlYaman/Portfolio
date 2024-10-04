import { Link } from "react-router-dom";

export const About = () => {
    return(<>
    <div className="flex justify-between items-start py-20 max-md:flex-col w-full">
        
        <p className="font-bebas text-6xl w-full">ABOUT ME</p>
        <div className="flex flex-col justify-between items-start w-1/2  gap-3 w-full">
            <p className="text-2xl font-semibold">I am a fullstack developer based in Lebanon. Has Computer Science background. </p>
            <p className="text-base text-gray-500">I am a Fullstack developer based in Lebanon looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m developing projects Reactjs, Laravel, and PostgreSQL. While I am not programming, I enjoy discussing tech news and updates with my colleagues. Learning more to improve my skills.</p>
            <Link className="text-[#D3E97A] underline font-semibold">More About Me</Link>
        </div>
    </div>
    </>);
}