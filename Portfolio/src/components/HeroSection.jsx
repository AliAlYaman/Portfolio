export const HeroSection = () => {
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-between lg:px-10 items-center h-full gap-6 mt-16 animate-fadeIn">
          {/* Left Section */}
          <div className="flex flex-col gap-1 animate-slideInFromLeft">
            <p className="text-6xl font-bebas">
              HI, I AM <br />
              ALI AL YAMAN
            </p>
            <p className="text-[#C7C7C7] text-base">
              Passionate backend Laravel developer specializing in building robust,
              <br />
              scalable, and efficient server-side applications using cutting-edge
              technologies.
            </p>
            <div className="flex mt-4 justify-start items-center gap-4 w-fit">
              <a
                className="text-sm text-black bg-[#D3E97A] font-semibold rounded-full py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                href="#"
              >
                CONTACT ME
              </a>
              <a
                className="rounded-full py-3 bg-[#222222] text-[#D3E97A] px-3 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-[#333333]"
                href="#"
              >
                <img src="assets/icons/bxl-linkedin.svg.png" alt="LinkedIn" />
              </a>
              <a
                className="rounded-full py-3 bg-[#222222] text-[#D3E97A] px-3 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-[#333333]"
                href="#"
              >
                <img src="assets/icons/bxl-github.svg.png" alt="GitHub" />
              </a>
            </div>
          </div>
          
          {/* Right Section (Image) */}
          <div className="animate-scaleUp">
            <img
              src="assets/profile.jpg"
              alt="Profile"
              className="rounded-lg max-[640px]:w-[550px] transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </>
    );
  };
  