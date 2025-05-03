"use client"
import { log } from "console";
import {motion, useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
    const appImage = useRef<HTMLImageElement>(null)
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: [
            "start end" , "end end"
        ],
    });
    // useEffect(() => {
    //     scrollYProgress.on("change", (latestValue) => 
    //     console.log("latest value", latestValue)
        
    //     );
    // }, []);  create to test the Yscroll

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]) // [0, 1] -Yscroll, [15, 0] -Xrotation
const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]) // [0, 1] -Yscroll, [0.5, 1] -opacity

  return (
      <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
          <div className=" p-[1rem]">
              <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
                  Intuitive interface
              </h2>
              <div className="mx-auto max-w-xl">
                  <p className="text-xl text-center text-white/70 mt-5">
                      Celebrate the joy of accomplishment with an app designed
                      to track your progress, motivate your efforts, and
                      celebrate your successes, one task at a time.
                  </p>
              </div>

              <div className="flex justify-center">
                  <motion.div
                      style={{
                          opacity: opacity,
                          rotateX: rotateX,
                          transformPerspective: "800px",
                      }}
                  >
                      <img
                          src="/images/app-screen.png"
                          alt="The product screenshot"
                          className="mt-14"
                          ref={appImage}
                      />
                  </motion.div>
              </div>
          </div>
      </div>
  );
};
