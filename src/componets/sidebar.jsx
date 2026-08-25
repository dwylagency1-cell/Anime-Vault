import { Link } from "react-router-dom";
import { House, Users, Bookmark } from "lucide-react";

function SideBar() {
    return (
        <>
            {/* Desktop sidebar — unchanged from original, just hidden below md */}
            <div className="hidden md:flex md:flex-col fixed left-0 top-[70px] w-[220px] h-[calc(100vh-70px)] bg-[#0B0B0F] border-r border-[#25202F] p-5 gap-3">
                <Link
                    to="/"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>
                    <House size={20} className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:translate-x-1">Home</span>
                </Link>
                <Link
                    to="/social"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>
                    <Users size={20} className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:translate-x-1">Social</span>
                </Link>
                <Link
                    to="/saved"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>
                    <Bookmark size={20} className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:translate-x-1">Saved</span>
                </Link>
            </div>

            {/* Mobile bottom nav — new, only shows below md */}
            <div className="flex md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-[#0B0B0F] border-t border-[#25202F] items-center justify-around z-50">
                <Link to="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#A855F7] transition-colors duration-300">
                    <House size={22} />
                    <span className="text-[10px]">Home</span>
                </Link>
                <Link to="/social" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#A855F7] transition-colors duration-300">
                    <Users size={22} />
                    <span className="text-[10px]">Social</span>
                </Link>
                <Link to="/saved" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#A855F7] transition-colors duration-300">
                    <Bookmark size={22} />
                    <span className="text-[10px]">Saved</span>
                </Link>
            </div>
        </>
    );
}
export default SideBar;