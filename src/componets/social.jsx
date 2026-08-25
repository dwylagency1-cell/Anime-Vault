import { Search } from "lucide-react";
import img from './img/animewault.png'
import SideBar from './sidebar'
import gojo from './img/gojo.png'
import YouTubeCard from './youtubecard.jsx'
import LinkedInCard from "./linkedincard.jsx";

function Social() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden pb-[64px] md:pb-0">
            <div className="w-full h-[70px] flex justify-between items-center gap-3 px-3 md:px-0 z-100">
                <div className="w-[110px] sm:w-[160px] md:w-[300px] h-[70px] flex justify-end items-center shrink-0">
                    <img
                        className="w-[110px] h-[55px] sm:w-[160px] sm:h-[80px] md:w-[300px] md:h-[150px]"
                        src={img}
                    />
                </div>
                <div className="flex-1 md:w-[700px] md:flex-none h-[70px] flex items-center">
                    <div className="w-full h-[44px] md:h-[52px] flex items-center bg-[#111111] border border-[#2A2A2A] rounded-xl px-3 md:px-4 transition-all duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] focus-within:border-[#8B5CF6] focus-within:shadow-[0_0_18px_rgba(139,92,246,0.35)]">
                        <Search size={21} className="text-gray-500 mr-3 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search anime wallpapers..."
                            className="flex-1 min-w-0 bg-transparent outline-none text-white placeholder:text-gray-500"
                        />
                    </div>
                </div>
                <div className="hidden md:block w-[300px] h-[70px]"></div>
            </div>

            <div className="fixed top-[70px] bottom-[64px] md:bottom-0 left-0 md:left-[220px] right-0 flex justify-center items-start md:items-center overflow-y-auto md:overflow-hidden overflow-x-hidden py-6 px-4">
                <div className="w-full max-w-[1100px] max-h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 mx-auto my-auto md:my-0">
                    {/* Gojo — desktop only, height capped to viewport so it never overflows */}
                    <div className="hidden md:block relative md:h-[min(590px,70vh)] md:aspect-[500/590] overflow-hidden shrink-0">
                        <img 
                            src={gojo}
                            alt="Gojo"
                            className="absolute bottom-0 right-25 w-full h-full object-contain object-bottom scale-190 origin-bottom-left"
                        />
                    </div>
                    <div className="w-full md:w-[600px] flex flex-col sm:flex-row md:flex-row justify-center items-center gap-4 md:gap-6">
                        <YouTubeCard />
                        <LinkedInCard />
                    </div>
                </div>
            </div>
            <SideBar />
        </div>
    );
}
export default Social