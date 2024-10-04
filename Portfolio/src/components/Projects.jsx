import { Link } from "react-router-dom";

const projects = [
    {
      title: "Real Estate Platform Full Stack",
      description: "Welcome to our Real Estate website, a modern platform designed to simplify property buying, selling, and renting. With a user-friendly interface and powerful search features, you can easily explore a wide range of properties tailored to your needs. Whether you're looking for residential homes, commercial spaces, or investment opportunities, our platform offers detailed listings, high-quality images, and up-to-date market information to help you make informed decisions.",
      image: "assets/projects/Estatein.png", // You can adjust the image path if needed
      type: "Full Stack",
      year: "October 2024",
      href: "https://estatein-frontend.vercel.app/",
      github:"https://github.com/AliAlYaman/Estatein-Fullstack"
    },
    {
      title: "Collaborative E-Learning Platform",
      description: "Along with a team of four, developed a comprehensive e-learning platform aimed at enhancing online education. I handled the backend development using Laravel, ensuring a smooth, secure, and scalable system for course management, user authentication, and real-time data handling. Our platform provides students and instructors with a seamless experience, from enrolling in courses to tracking progress, all within an intuitive and efficient environment.",
      image: "assets/projects/Estatein.png",
      type: "Backend Development",
      year: "November 2024",
    },
    {
      title: "Boxcars Car Website",
      description: "I developed a dynamic Mercedes car website utilizing React for the front end and Laravel for the back end. The website is powered by a PostgreSQL database to manage and store data, ensuring scalability and security. It features a modern, responsive design showcasing the full range of Mercedes cars, with detailed product pages, car specifications, and an intuitive user interface for seamless navigation. The project is hosted on Vercel for the front-end deployment and AWS for backend services, ensuring reliable and fast performance. This setup allows users to explore and learn more about Mercedes cars with a smooth and engaging experience.",
      image: "assets/projects/Cars.png",
      type: "Fullstack",
      year: "November 2024",
      href: "https://boxcars-frontend.vercel.app/",
      github: "https://github.com/AliAlYaman/Boxcars-Frontend"
    },
  ];
  
  export const FeaturedProjects = () => {
    return (
      <div className="bg-black text-white py-16">
        <div className="">
          <h2 className="text-4xl font-bold mb-2">FEATURED PROJECTS</h2>
          <p className="text-gray-400 mb-12">
            We've had the opportunity to work on some great projects. Here are a few of our favorites.
          </p>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex space-x-4 font-semibold">
                    <a href={project.href} rel="noopener noreferrer" target="_blank" className="bg-[#D3E97A] text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors xl:text-base">
                      <span>LIVE DEMO</span>
                      {/* Inline SVG for ArrowUpRight Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 7l-10 10M7 7h10v10"
                        />
                      </svg>
                    </a>
                    <a href={project.github} rel="noopener noreferrer" target="_blank" className="border border-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-white hover:text-black transition-colors">
                      <span>SEE ON GITHUB</span>
                      {/* Inline SVG for ArrowUpRight Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 7l-10 10M7 7h10v10"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  