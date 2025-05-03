"use client"
import {motion} from "framer-motion";

const logos = [
    { src: "/images/acme.png", alt: "Acme logo" },
    { src: "/images/quantum.png", alt: "Quantum Logo" },
    { src: "/images/echo.png", alt: "Echo Logo" },
    { src: "/images/celestial.png", alt: "Celestial Logo" },
    { src: "/images/pulse.png", alt: "Pulse Logo" },
    { src: "/images/apex.png", alt: "Apex Logo" },
];

export const LogoTicker = () => {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="p-[1rem]">
                <h2 className="text-xl text-center text-white/70">
                    Trusted by the world’s most innovative teams
                </h2>
                {/* fadding effect on left and right side of horizontal scroll */}
                <div className="flex overflow-hidden mt-9 relative">
                    {/* leftside fade */}
                    <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 " />

                    {/* right side fade */}
                    <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />
                    {/* motion div */}
                    <motion.div 
                    transition={{
                        duration: 20,
                        ease:"linear",
                        repeat: Infinity
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: "-50%" }}
                    className="flex gap-16 flex-non pr-16">
                        {logos.map(({ src, alt }, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={alt}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                        {/* duplicating the image to get  the feel of inifinty */}
                        {logos.map(({ src, alt }, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={alt}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
