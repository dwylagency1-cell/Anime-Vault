import Sukuna from "./img/sukunaongrass.png";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

function NotFound() {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background */}
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src={Sukuna}
                alt="Sukuna standing in grass"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">

                {/* 404 */}
                <h1 className="text-[180px] font-black text-transparent text-center [-webkit-text-stroke:5px_rgba(168,85,247,0.75)] opacity-80 leading-none">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-white text-[32px] font-bold mt-[-10px] drop-shadow-lg">
                    Go touch some <span className="text-[#A855F7]">grass</span>
                </h2>

                {/* Home Button */}
                <Link
                    to="/"
                    className="group mt-7 flex items-center gap-2 px-6 py-3 rounded-xl border border-[#A855F7] text-white bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-[#8B5CF6] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]"
                >
                    <House
                        size={19}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    <span>
                        Go Home
                    </span>
                </Link>

            </div>

        </div>
    );
}

export default NotFound;