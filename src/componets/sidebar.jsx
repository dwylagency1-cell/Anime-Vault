import { Link } from "react-router-dom";
import { House, Users, Bookmark } from "lucide-react";

function SideBar() {
    return (
        <div className="fixed left-0 top-[70px] w-[220px] h-[calc(100vh-70px)] bg-[#0B0B0F] border-r border-[#25202F] p-5">

            <div className="flex flex-col gap-3">

                {/* Home */}
                <Link
                    to="/"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>

                    <House
                        size={20}
                        className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110"
                    />

                    <span className="transition-all duration-300 group-hover:translate-x-1">
                        Home
                    </span>
                </Link>

                {/* Social */}
                <Link
                    to="/social"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>

                    <Users
                        size={20}
                        className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110"
                    />

                    <span className="transition-all duration-300 group-hover:translate-x-1">
                        Social
                    </span>
                </Link>

                {/* Saved */}
                <Link
                    to="/saved"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-white hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:h-[65%]"></span>

                    <Bookmark
                        size={20}
                        className="transition-all duration-300 group-hover:text-[#A855F7] group-hover:scale-110"
                    />

                    <span className="transition-all duration-300 group-hover:translate-x-1">
                        Saved
                    </span>
                </Link>

            </div>

        </div>
    );
}

export default SideBar;