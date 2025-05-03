"use client"
import {motion} from "framer-motion";
import ArrowIcon from "../icons/arrow-w.svg";

export const Hero = () => {

        
    return (
        <div className="bg-black text-white hero-bg-custom-gradient py-[72px] sm:py-24 relative overflow-clip">
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] xl:w-[3000px] xl:h-[1500px] 2xl:w-[3600px] 2xl:h-[1800px] rounded-[100%] bg-black right-1/2 translate-x-1/2 border border-[#B48CDE] hero_bg_radial_custom_gradient top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
            <div className="p-[1rem] relative ">
                <div className="flex items-center justify-center">
                    <a
                        href="#"
                        className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
                    >
                        <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
                            Version 2.0 is here
                        </span>
                        <div className="inline-flex items-center gap-1">
                            <span>Read more</span>
                            <ArrowIcon />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="inline-flex relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighte text-center  inline-flex">
                            One Task <br /> at a Time
                        </h1>
                        <motion.div className="absolute right-[495px] top-[108px] hidden sm:inline-flex" 
                        drag
                        dragSnapToOrigin
                        >
                            <img
                                src="/images/cursor.png"
                                alt="cursor image"
                                height={200}
                                width={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>
                        <motion.div className="absolute top-[56px] left-[498px] hidden sm:inline-flex"
                        drag
                        dragSnapToOrigin
                        >
                            <img
                                src="/images/message.png"
                                alt="message image"
                                height={200}
                                width={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="text-center text-xl mt-8 max-w-md">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress, motivate your efforts, and
                        celebrate your successes.
                    </p>
                </div>

                <div className="flex justify-center mt-4 ">
                    <button className="text-black bg-white py-3 px-5 rounded-lg font-medium">
                        Get for free
                    </button>
                </div>
            </div>
        </div>
    );
};
