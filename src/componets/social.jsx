import { Search } from "lucide-react";
import img from './img/animewault.png'
import SideBar from './sidebar'
import gojo from './img/gojo.png'
import YouTubeCard from './youtubecard.jsx'
import LinkedInCard from "./linkedincard.jsx";
function Social(){
    return<div>
        <div className=" w-full h-[70px] flex justify-between items-center z-100">
            <div className=" w-[300px] h-[70px] flex justify-center items-center">
                <img className='w-[300px] h-[150px]' src={img}></img>
            </div>
            <div className=" w-[700px] h-[70px] flex items-center">
                <div className="w-full h-[52px] flex items-center bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 transition-all duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] focus-within:border-[#8B5CF6] focus-within:shadow-[0_0_18px_rgba(139,92,246,0.35)]">

            <Search
                size={21}
                className="text-gray-500 mr-3"
            />

            <input
                type="text"
                placeholder="Search anime wallpapers..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

        </div>
            </div>
            <div className=" w-[300px] h-[70px]">

            </div>
        </div>
        
        <div className="fixed top-[70px] bottom-0 left-[220px] right-0 flex justify-center items-center">
            <div className="  w-[1100px] h-[590px] flex justify-between items-center">
                <div className="relative  w-[500px] h-[590px] overflow-hidden">
                    <img
                        src={gojo}
                        alt="Gojo"
                        className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom scale-150 origin-bottom-left"
                    />
                </div>
                <div className=" w-[600px] h-[590px] flex justify-between items-center" >
                    <YouTubeCard></YouTubeCard>
                    <LinkedInCard></LinkedInCard>
                </div>
            </div>
        </div>
        <SideBar></SideBar>
    </div>
}
export default Social