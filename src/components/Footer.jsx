import linkdin from "../assets/linkdin.svg"
import github from "../assets/github.svg"
import leetcode from "../assets/leetcode.svg"
import { Link } from "react-router-dom";
function Footer(){
    return (
        <div className="py-12">
            <div className=" flex flex-row items-center justify-center space-x-6 pb-4">
                <Link to = "https://www.linkedin.com/in/anshumanparida/" >
                <img 
                className="h-10 w-10"
                 src={linkdin}
                  alt="Linkdin" />
                </Link>
                <Link to = "https://leetcode.com/u/Anshuman48/">
                <img
                className="h-10 w-10"
                 src={leetcode} 
                 alt="LeetCode" />
                </Link>
                 <Link to ="https://github.com/Anshuman133">
                 <img
                className="h-10 w-10" 
                src={github} 
                alt="GitHub" />
                 </Link>
                
            </div>
            <li className=" flex items-center justify-center">Copyright ©2025 All rights reserved</li>
        </div>
    );

}
export default Footer;