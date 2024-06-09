"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Card({
    heading,
    description,
    repoUrl,
    imageUrl,
}: {
    heading: string;
    description: string;
    repoUrl: string;
    imageUrl: StaticImageData;
}) {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl text-black"
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            viewport={{ once: true }}
        >
            <Image src={imageUrl} alt={heading} className="rounded-t-xl" />
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link
                        href={repoUrl}
                        className="bg-primary py-2 w-full rounded-full text-white hover:bg-primary-dark duration-300 mt-2"
                    >
                        <button className="w-full">See More</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
