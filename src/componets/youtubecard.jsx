import { ArrowUpRight } from "lucide-react";

function YouTubeCard() {
    return (
        <a
            href="https://www.youtube.com/@BroBuilds-k1p/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-[280px] bg-[#111111] border border-[#25202F] rounded-xl p-[22px] transition-all duration-300 hover:border-[#8B5CF6] hover:bg-[#141119] hover:shadow-[0_0_25px_rgba(139,92,246,0.16)]"
        >

            {/* Top */}
            <div className="flex items-center justify-between">

                <div className="w-[42px] h-[42px] rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#8B5CF6]/20">

                    <svg
                        viewBox="0 0 24 24"
                        className="w-[22px] h-[22px] fill-[#A855F7] transition-all duration-300 group-hover:scale-110 group-hover:fill-[#C084FC]"
                    >
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6-6.4 3.6Z" />
                    </svg>

                </div>

                <ArrowUpRight
                    size={18}
                    className="text-gray-500 transition-all duration-300 group-hover:text-[#A855F7] group-hover:-translate-y-1 group-hover:translate-x-1"
                />

            </div>

            {/* Content */}
            <div className="mt-[18px]">

                <h2 className="text-white text-[20px] font-semibold">
                    YouTube
                </h2>

                <p className="text-gray-400 text-[13px] leading-5 mt-2">
                    Watch my coding journey, projects, and Anime Vault builds.
                </p>

            </div>

            {/* Bottom */}
            <div className="mt-[18px]">

                <span className="text-[#A855F7] text-[14px] font-medium transition-all duration-300 group-hover:text-[#C084FC]">
                    Visit Channel →
                </span>

            </div>

        </a>
    );
}

export default YouTubeCard;