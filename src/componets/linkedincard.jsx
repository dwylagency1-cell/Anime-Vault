import { ArrowUpRight } from "lucide-react";

function LinkedInCard() {
    return (
        <a
            href="https://www.linkedin.com/in/saksham-kumar-922b603a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-[280px] bg-[#111111] border border-[#25202F] rounded-xl p-[22px] transition-all duration-300 hover:border-[#8B5CF6] hover:bg-[#141119] hover:shadow-[0_0_25px_rgba(139,92,246,0.16)]"
        >

            {/* Top */}
            <div className="flex items-center justify-between">

                {/* LinkedIn Icon */}
                <div className="w-[42px] h-[42px] rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#8B5CF6]/20">

                    <svg
                        viewBox="0 0 24 24"
                        className="w-[22px] h-[22px] fill-[#A855F7] transition-all duration-300 group-hover:scale-110 group-hover:fill-[#C084FC]"
                    >
                        <path d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.62v4.71h-3v-4.18c0-1 0-2.3-1.4-2.3-1.4 0-1.61 1.09-1.61 2.23v4.25h-3v-9.0Z" />
                    </svg>

                </div>

                {/* Arrow */}
                <ArrowUpRight
                    size={18}
                    className="text-gray-500 transition-all duration-300 group-hover:text-[#A855F7] group-hover:-translate-y-1 group-hover:translate-x-1"
                />

            </div>

            {/* Content */}
            <div className="mt-[18px]">

                <h2 className="text-white text-[20px] font-semibold">
                    LinkedIn
                </h2>

                <p className="text-gray-400 text-[13px] leading-5 mt-2">
                    Follow my developer journey, projects, and building updates.
                </p>

            </div>

            {/* Bottom */}
            <div className="mt-[18px]">

                <span className="text-[#A855F7] text-[14px] font-medium transition-all duration-300 group-hover:text-[#C084FC]">
                    Visit Profile →
                </span>

            </div>

        </a>
    );
}

export default LinkedInCard;