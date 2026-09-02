import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import wallpapers from "./data_structure";

function Preview() {

    const { id } = useParams();
    const navigate = useNavigate();

    const wallpaper = wallpapers.find(function (element) {
        return element.id === Number(id);
    });

    // If wallpaper doesn't exist
    if (!wallpaper) {
        return (
            <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-[#A855F7]">
                    Wallpaper Not Found
                </h1>

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#A855F7] transition"
                >
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#080808] text-white p-6">

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6 cursor-pointer"
            >
                <ArrowLeft size={20} />
                Back
            </button>

            {/* Main Preview */}
            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">

                {/* Wallpaper */}
                <div className="w-full max-h-[70vh] flex justify-center">
                    <img
                        src={wallpaper.image}
                        alt={wallpaper.title}
                        className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                    />
                </div>

                {/* Details */}
                <div className="w-full max-w-[900px] mt-8 bg-[#111111] border border-[#25202F] rounded-2xl p-6">

                    <div className="flex flex-col sm:flex-row justify-between gap-6">

                        {/* Information */}
                        <div>

                            <h1 className="text-2xl sm:text-3xl font-bold">
                                {wallpaper.title}
                            </h1>

                            <p className="text-[#A855F7] mt-2">
                                {wallpaper.anime}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-400">
                                <span>
                                    Category: {wallpaper.category}
                                </span>

                                <span>
                                    Resolution: {wallpaper.resolution}
                                </span>
                            </div>

                        </div>

                        {/* Download */}
                        <a
                            href={wallpaper.image}
                            download
                            className="flex items-center justify-center gap-2 px-6 py-3 h-fit rounded-xl bg-[#8B5CF6] text-white font-semibold transition-all duration-300 hover:bg-[#A855F7] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                        >
                            <Download size={20} />
                            Download
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Preview;