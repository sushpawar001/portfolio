"use client";
import React from "react";
import Card from "./Card";
import DiabetesManagement from "../assets/DiabetesManagement.png";
import EmployeeTracking from "../assets/EmployeeTracking.png";
import TimeTable from "../assets/TimeTable.gif";
import WarmUpCalc from "../assets/WarmUpCalc.png";
import EducodeIndia from "../assets/educodeindia.png";
import Link from "next/link";
import { motion } from "framer-motion";

const projectsList = [
    {
        heading: "Diabetes Management System",
        description:
            "Log your blood glucose and insulin doses with ease. Monitor your progress with real-time charts.",
        repoUrl: "",
        imageUrl: DiabetesManagement,
    },
    {
        heading: "College TimeTable Generator",
        description:
            "With features of AI, create your college's timetable with ease.",
        repoUrl: "https://github.com/sushpawar001/PyAutoScheduler",
        imageUrl: TimeTable,
    },
    {
        heading: "Employee Tracking System",
        description:
            "Track your employees and their work with ease. Improve performance, and productivity",
        repoUrl: "https://empower-pro.onrender.com/",
        imageUrl: EmployeeTracking,
    },
    {
        heading: "Warm Up calculator",
        description:
            "Calculate your warm up set weight and plates to load each set. Workout stress free!",
        repoUrl: "https://github.com/sushpawar001/flutter-warmup-calculator",
        imageUrl: WarmUpCalc,
    },
    {
        heading: "EducodeIndia",
        description:
            "Learn coding with user friendly LMS, and improve your coding skills.",
        repoUrl: "https://educodeindia.com/",
        imageUrl: EducodeIndia,
    },
];

export default function Projects() {
    return (
        <div className="bg-secondary flex items-center justify-center min-h-screen">
            <div className="w-5/6 md:w-3/4 mx-auto text-white py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">My Projects</h2>
                <p className="text-xl mb-8 font-light">
                    Some Things I&apos;ve Built So Far
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                    {projectsList.map((project) => (
                        <Card
                            key={project.heading}
                            heading={project.heading}
                            description={project.description}
                            repoUrl={project.repoUrl}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                    <motion.div
                        className="card bg-grayNav shadow-xl text-white p-5"
                        initial={{ scale: 0.7 }}
                        whileInView={{ scale: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <div className="m-auto flex flex-col items-center gap-3">
                            <p className="text-xl text-center">
                                Check out more projects on github
                            </p>
                            <Link
                                href={"https://github.com/sushpawar001"}
                                className="bg-grayNav border-2 border-primary w-1/2 p-2 rounded-full text-white hover:bg-primary duration-300 text-center"
                            >
                                <button>See More</button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
