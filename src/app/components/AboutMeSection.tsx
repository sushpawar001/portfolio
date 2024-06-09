"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutMeSection() {
    return (
        <div className="bg-secondary flex items-center justify-center min-h-[60vh]">
            <div className="w-5/6 md:w-3/4 mx-auto text-white py-20 grid grid-cols-3 gap-7 md:gap-10">
                <motion.div
                    className="h-full w-full polka"
                    initial={{ translateX: "-20%" }}
                    whileInView={{ translateX: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    viewport={{ once: true }}
                ></motion.div>
                <motion.div
                    className="col-span-2"
                    initial={{ translateX: "20%" }}
                    whileInView={{ translateX: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">
                        About Me
                    </h2>
                    <p className="text-lg md:text-justify">
                        I am Sushant Pawar, a dedicated web and mobile developer
                        with expertise in Python, JavaScript, Dart, and various
                        frameworks like React, Next.js, and Flutter. My journey
                        in tech began with a fascination for how things work,
                        which quickly evolved into a love for coding and
                        problem-solving. With over five months of professional
                        experience, I have successfully delivered numerous
                        projects, ranging from dynamic websites to robust mobile
                        applications. I believe in the{" "}
                        <span className="text-primary">
                            power of technology to solve real-world problems
                        </span>{" "}
                        and strive to create impactful solutions that enhance
                        user experiences.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
