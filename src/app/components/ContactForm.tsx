"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

const leftInAnimation = {
    initial: { translateX: "-20%" },
    whileInView: { translateX: 0 },
    transition: { ease: "easeInOut", duration: 1 },
    viewport: { once: true },
};

const rightInAnimation = {
    initial: { translateX: "20%" },
    whileInView: { translateX: 0 },
    transition: { ease: "easeInOut", duration: 1 },
    viewport: { once: true },
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Validate name
        if (!name || name.trim() === "") {
            toast.error("Please enter your name.");
            return;
        }

        // Validate email
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Validate message
        if (!message || message.trim() === "" || message.trim().length < 10) {
            toast.error("Please enter a message with at least 10 characters.");
            return;
        }

        try {
            await axios.post("/api/form/submit-form", formData);
            toast.success("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again.");
        }
    };

    return (
        <>
            <div className="bg-primary relative">
                <div className="shape-divider-top">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div className="min-h-screen w-5/6 md:w-3/4 mx-auto text-white py-20 flex items-center justify-center">
                    <div className="w-full md:w-2/5">
                        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                            Contact Me
                        </h1>
                        <form
                            className="flex flex-col w-full"
                            onSubmit={handleFormSubmit}
                        >
                            <label htmlFor="name" className="mb-2 ml-4">
                                Full Name*
                            </label>
                            <motion.input
                                {...leftInAnimation}
                                type="text"
                                name="name"
                                className="bg-primary-light/55 p-4 rounded-full shadow-md mb-5 placeholder:text-primary-dark/70 border border-primary-dark text-black"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="email" className="mb-2 ml-4">
                                Email*
                            </label>
                            <motion.input
                                {...rightInAnimation}
                                type="email"
                                name="email"
                                className="bg-primary-light/55 p-4 rounded-full shadow-md mb-5 placeholder:text-primary-dark/70 border border-primary-dark text-black"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="message" className="mb-2 ml-4">
                                Message*
                            </label>
                            <motion.textarea
                                {...leftInAnimation}
                                name="message"
                                placeholder="Enter your message"
                                rows={3}
                                className="bg-primary-light/55 p-4 rounded-3xl shadow-md mb-8 placeholder:text-primary-dark/70 border border-primary-dark text-black"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                            <motion.button
                                {...rightInAnimation}
                                className="w-full md:w-1/2 bg-secondary p-2.5 rounded-full mx-auto hover:w-full duration-500 shadow-md"
                                type="submit"
                            >
                                Submit
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
