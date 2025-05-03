"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    // useEffect(() => {
    //     scrollYProgress.on('change', value => console.log('value', value)
    //     )
    // })  used to check wether the scrollYprogress working or not

    const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]) // [0, 1]- Yscroll, [-40, 40] translate along y scroll. 
    return (
        <div
            className="bg-black text-white py-[72px] sm:py-24 text-center "
            ref={containerRef}
        >
            <div className=" p-[1rem] max-w-xl w-full mx-auto relative">
                <motion.div style={{ translateY }}>
                    <img
                        src="/images/helix2.png"
                        alt="helix image"
                        className=" absolute top-6 left-[calc(100%+36px)]"
                    />
                </motion.div>
                <motion.div
                style={{translateY}}
                >
                    <img
                        src="/images/emojistar.png"
                        alt="emojistar image"
                        className=" absolute -top-[120px] right-[calc(100%+24px)]"
                    />
                </motion.div>
                <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
                    Get instant access
                </h2>
                <p className="text-xl text-white/70 mt-5">
                    Celebrate the joy of accomplishment with an app designed to
                    track your progress and motivate your efforts.
                </p>
                {/* email form */}
                <form
                    action="#"
                    method="post"
                    className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto"
                >
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 bg-white/20 rounded-lg px-5  font-medium placeholder:text-[#9CA3AF] sm:flex-1"
                    />
                    <button className="bg-white text-black h-12 rounded-lg px-5">
                        Get access
                    </button>
                </form>
            </div>
        </div>
    );
};
