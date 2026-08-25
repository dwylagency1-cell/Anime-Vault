import img from './img/animewault.png'
import { Search } from "lucide-react";
import SideBar from './sidebar';

function Browse() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden pb-[64px] md:pb-0">
            <div className="w-full h-[70px] flex justify-between items-center gap-3 px-3 md:px-0 z-100">
                <div className="w-[110px] sm:w-[160px] md:w-[300px] h-[70px] flex justify-center items-center shrink-0">
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
            <SideBar />
        </div>
    );
}
export default Browse