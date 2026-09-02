import img from './img/animewault.png'
import { Search } from "lucide-react";
import SideBar from './sidebar';
import { useNavigate } from "react-router-dom";

function Browse(props) {
    const wallpaper = props.wallpapers
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full overflow-x-hidden pb-[64px] md:pb-0">
            <div className="fixed top-0 left-0 w-full h-[70px] flex justify-between items-center gap-3 px-3 md:px-0 z-50 bg-[#080808]">
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
                <div className="hidden md:block w-[300px] h-[70px]">
                    
                </div>
            </div>
            <div className='pt-[80px] w-full ml-[220px] grid grid-cols-[300px_300px_300px] gap-x-[20px] gap-y-[20px] p-[20px] pl-[70px]'>
                    {
                        wallpaper.map(function(element){
                            return (
                                <div className="bg-[#111111] w-[300px] h-[210px] rounded-2xl overflow-hidden border border-[#25202F] transition-all duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_20px_rgba(139,92,246,0.18)] hover:-translate-y-1">

                                    <div onClick={function(){
                                        navigate(`/preview/${element.id}`)

                                    }} className="w-full h-full relative cursor-pointer ">

                                        {/* Wallpaper */}
                                        <img
                                            src={element.image}
                                            alt="Anime Wallpaper"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Dark gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

                                        {/* Bottom section */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4">

                                            <div className="flex items-end justify-between gap-3">

                                                {/* Wallpaper info */}
                                                <div>
                                                    <h2 className="text-white text-lg font-semibold">
                                                        Anime Wallpaper
                                                    </h2>

                                                    <p className="text-gray-400 text-sm mt-1">
                                                        {element.anime}
                                                    </p>
                                                </div>

                                                {/* Download button */}
                                                <a
                                                    href={element.image}
                                                    download
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="shrink-0 bg-[#8B5CF6] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[#A855F7] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                                >
                                                    Download
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
            </div>
            <SideBar />
        </div>
    );
}
export default Browse