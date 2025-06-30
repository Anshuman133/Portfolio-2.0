import Portfolio from "../assets/Portfolio.png"
import Yoom from "../assets/Yoom.png"
import LiveDocs from "../assets/livedocs.avif"
import Demo  from "../assets/pimg1.jpg"

function Work () {
   const Works = [
           {   
               id : 0,
               image : Portfolio,
               heading : "Portfolio",
               timing : "Live",
               webType : "Code",
               live : "",
               code : "",
               content : "A modern and responsive personal portfolio website to showcase your work, skills, and contact info. Designed with clean UI using React and Tailwind CSS, it's a professional space to present yourself as a developer."
           },
           { 
               id :1,
               image : Yoom,
               heading : "Yoom ",
               timing : "Live",
               webType : "Code",
               live : "",
               code : "",
               content : "Yoom is a full-stack video conferencing platform featuring meeting scheduling, video call reminders, and seamless real-time communication. Built with React, Tailwind CSS, Node.js, and MongoDB, and powered by Clerk for secure authentication. Fully responsive and optimized for a smooth user experience across devices."
           },
           {
               id : 2,
               image : LiveDocs,
               heading : "LiveDocs",
               timing : "Live",
               webType : "Code",
               live : "",
               code : "",
               content : "Live Docs is a real-time document collaboration tool, similar to Google Docs. It allows users to edit documents simultaneously, share links, and manage user sessions. Developed using React, Tailwind CSS, Node.js, and MongoDB, with Clerk integration for authentication. Fully responsive and ideal for productivity on the go."
           },
           {
               id : 3,
               image : Demo,
               heading : "This a new hot topic",
               timing : " Live",
               webType : "Code",
               live : "",
               code : "",
               content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab est aut officiis ea numquam inventore enim delectus quisquam magnam?"
           }
   
       ]
  return(
    <div className="mx-5 sm:mx-24 md:mx-28 lg:mx-48 ">
           <h1 className=" text-3xl font-bold ">Work</h1>
           <div className=" mt-8  ">
            {Works.map(({id,image, heading, timing,webType, content},index) =>(
              <div key={id}>
                <div  className="flex  flex-col md:flex-row gap-5 pt-5 ">
                  {/* image */}
                  <div className=" flex-shrink-0 md:w-44">
                    <img src={image} alt="Error"
                    className="w-full h-auto rounded-lg  object-cover md:w-44 md:h-44" />
                  </div>
                  
                    <div className="space-y-2">
                     <h1 className="text-xl font-bold">{heading}</h1>
                    <div className="flex items-center gap-4">
                       <span className="bg-gray-800 text-white text-sm font-semibold rounded-full px-3 py-0.5">
                            {timing}
                     </span>
                     <span className="text-gray-500">{webType}</span>
                   </div>
                     <p className="text-gray-700">{content}</p>
                     
                  </div> 
                </div>
                {index !== Works.length - 1 && (
                  <div className="border-b border-gray-300 my-6"></div>
                )}
                </div>
                
            ))}
             

            </div>
        </div>
  );
}

export default Work