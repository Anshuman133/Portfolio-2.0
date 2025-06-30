import { Link } from "react-router-dom";

function RecentPost (){
    return(
        <div className=" bg-cyan-50 ">
            <div className=" md:flex flex-row justify-between py-4">
                <h3 className=" text-center font-semibold text-gray-800 md:text-left md:text-xl  text-lg md:pl-44 lg:pl-56 ">
                    Recent Posts
                    </h3>
               <Link to = "/blog">
               <h2 className=" text-blue-400 hidden md:block md:text-right md:mr-44 lg:mr-56">
                    View All
                    </h2>
               </Link>
            </div>
            
            <div className="px-3  space-y-3 pb-5 md:space-y-0  md:flex md:space-x-4 md:px-44 lg:px-56 ">
                <div className="bg-white flex flex-col p-3 space-y-3 ">
                    <h1 className="font-bold text-xl ">
                         India’s 6G Vision: Beyond Speed, Toward Smart Connectivity
                    </h1>
                    <p className="text-lg">
                        12 Feb 2025   |   Telecom
                    </p>
                    <p className="" >
                     Even as 5G rolls out across India, researchers and telecom companies are preparing for the next leap: 6G. With promises of ultra-low latency and AI-integrated networks, 6G could power smart cities, autonomous vehicles, and next-gen communication. Policy makers emphasize the need for early R&D investment to stay ahead.

                    </p>
                </div>
                <div className="bg-white flex flex-col p-3 space-y-3 ">
                    <h1 className="font-bold text-xl ">
                       AI-Powered Cybersecurity Is the Future of Digital Defense
                    </h1>
                    <p className="text-lg">
                        12 Feb 2025   |   Cybersecurity
                    </p>
                    <p >
                        With rising threats of data breaches and cyberattacks, AI is being used to predict, detect, and respond to threats in real-time. Security platforms now integrate machine learning to identify unusual patterns and block suspicious activity before damage occurs. However, attackers are also leveraging AI, making this an ongoing arms race.
                    </p>
                </div>

            </div>

        </div>
    );
}
export default RecentPost;