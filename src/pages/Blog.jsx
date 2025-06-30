function Blog(){
    const Blogs = [
        {
            heading : "AI Revolution is Reshaping Education",
            timing : "12 Feb 2025",
            author : "The Hindu News",
            content : "Artificial Intelligence is now deeply embedded in classrooms across the country. Adaptive learning platforms, AI tutors, and automated grading systems are helping students learn at their own pace. Experts believe that this shift not only enhances learning outcomes but also bridges educational gaps for remote and underprivileged communities."
        },
        {
            heading : "AI Startups Booming in 2025: Healthtech Leads the Way",
            timing : "12 Feb 2025",
            author : "The Hindu News",
            content : "AI-driven startups are thriving, especially in healthcare. From diagnostic tools powered by machine learning to personalized treatment plans using predictive analytics, innovation is reshaping patient care. Investors are pouring funds into healthtech ventures, recognizing the potential for real-world impact."
        },
        {
            heading : " India’s 6G Vision: Beyond Speed, Toward Smart Connectivity",
            timing : "12 Feb 2025",
            author : "The Hindu News",
            content : "Even as 5G rolls out across India, researchers and telecom companies are preparing for the next leap: 6G. With promises of ultra-low latency and AI-integrated networks, 6G could power smart cities, autonomous vehicles, and next-gen communication. Policy makers emphasize the need for early R&D investment to stay ahead."
        },
        {
            heading : "Quantum Computing: The Next Tech Frontier",
            timing : "12 Feb 2025",
            author : "The Hindu News",
            content : "Quantum computing is moving beyond labs into real-world applications. Tech giants and startups alike are racing to build scalable quantum processors that could revolutionize industries from drug discovery to cybersecurity. While still in early stages, its potential to outperform classical computers is attracting major investment."
        }

    ]
    return(
        <div className="mx-5 sm:mx-24 md:mx-28 lg:mx-48">
           <h1 className=" text-3xl font-bold ">Blog</h1>
           <div className=" mt-8">
            {Blogs.map(({heading, timing, author, content}) =>(
                <div className="space-y-2 flex  flex-col">
                   <h1 className="text-xl font-bold mt-5">{heading}</h1>
                   <h3 className="">{timing}     |         {author}</h3>
                   <p className=" pb-5">{content}</p> 
                   <div className="border-b border-gray-200 my-6"></div>

                </div>
            ))}
            </div>
        </div>
    );
}
export default Blog;