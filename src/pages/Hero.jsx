import HeroImg from "../assets/Hero.jpg"
const openResume = ()=>{
    window.open("https://drive.google.com/file/d/1t07OC3WQd6cFzshnNVT921HYJ81Y5qtw/view?usp=sharing', '_blank'")
}

function Hero (){
    return(
        <div className="w-full  h-[80vh] sm:px-32  pt-24  ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
        {/* Text Section  */}
        <div className="md:w-3/4 lg:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Hi, I am Anshuman,<br />
            Software Developer
          </h1>
          <p className="py-5 text-gray-600 text-sm md:text-base">
            I'm a B.Tech CSE graduate and a full-stack developer specializing in the MERN stack. I'm passionate about building efficient, user-centric web applications and exploring new technologies. With 570+ LeetCode problems solved and a top 15% global ranking, I bring strong problem-solving skills, clean coding practices, and a commitment to continuous learning.
          </p>
          <button
            onClick={openResume}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded shadow transition duration-200"
          >
            Download Resume
          </button>
        </div>

        {/* Image Section */}
        <div className="mb-10 md:mb-0 flex justify-center md:justify-end md:w-1/2">
          <img
            src={HeroImg}
            alt="Anshuman"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
    
    );
}
export default Hero;