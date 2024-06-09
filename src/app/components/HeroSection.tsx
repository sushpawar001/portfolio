"use client";
import Image from "next/image";
import devImage from "../assets/Programming.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="bg-secondary">
            <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen items-center justify-center w-5/6 md:w-3/4 mx-auto text-white py-20">
                <div className="md:col-span-1 order-last md:order-first ">
                    <motion.h1
                        className="mb-4 font-light text-4xl"
                        initial={{ translateX: "-15%" }}
                        animate={{ translateX: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.6 }}
                    >
                        Hello, I&apos;m{" "}
                        <span className="md:text-5xl text-primary font-semibold">
                            Sushant Pawar
                        </span>
                        {/* , a Web & Flutter Developer. */}
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 font-light"
                        initial={{ translateX: "-15%" }}
                        animate={{ translateX: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.6 }}
                    >
                        Web & Mobile Developer. Transforming Your Ideas into
                        Reality with Modern Technologies
                    </motion.p>
                    <motion.button
                        className="bg-primary py-3 px-8 rounded-full"
                        initial={{ translateY: "100%" }}
                        animate={{ translateY: 0 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                    >
                        Contact Me
                    </motion.button>
                </div>
                <motion.div
                    className="md:col-span-1"
                    initial={{ scale: 0.7 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                >
                    <Image
                        src={devImage}
                        alt="Developer"
                        className="md:m-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
}
