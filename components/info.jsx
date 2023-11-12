"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

const Info = () => {
    const cardVariants = {
        hidden: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2,
            },
        },
    };

    const contentVariant = {
        hidden: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    };

    return (
        <section
            id="info"
            className="w-full py-[100px] relative px-[80px] min-h-content flex flex-col lg:flex-row items-start flex-nowrap gap-5"
        >
            <motion.div
                variants={contentVariant}
                initial="hidden"
                whileInView={"whileInView"}
                className="lg:sticky lg:top-4 space-y-10"
            >
                <div>
                    <span className="rounded-md font-medium bg-white outline outline-secondary-dark px-5 py-2 text-secondary-dark">
                        There&apos; more!
                    </span>
                </div>

                <div>
                    <h3 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">
                        Harness the power of AI for seamless receipt management.
                    </h3>
                </div>

                <div>
                    <p className="text-black/60 font-medium text-base">
                        Our platform uses advanced AI to scan, categorize, and securely store your
                        receipts, making expense tracking effortless.
                    </p>
                </div>
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView={"whileInView"}
                className="overflow-auto flex gap-10 flex-col flex-nowrap justify-center"
            >
                <Card className="max-h-[245px] bg-secondary-light/20 p-3 w-full shadow-sm ">
                    <CardHeader className="flex flex-col items-start gap-3">
                        <div className="w-8 h-8 object-contain">
                            <svg
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#63909e"
                                stroke="#63909e"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>ai-solid</title>{" "}
                                    <g id="Layer_2" data-name="Layer 2">
                                        {" "}
                                        <g id="invisible_box" data-name="invisible box">
                                            {" "}
                                        </g>{" "}
                                        <g id="Q3_icons" data-name="Q3 icons">
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4l-.6.5-4,3.3a.8.8,0,0,0-.4.8v9a.9.9,0,0,0,.4.8l4,3.3.6.5v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2,4-2.7V25.5H21a1.5,1.5,0,0,1,0-3h1.5V4.9l-4-2.7ZM9,13.5l2.8,1.9a1.5,1.5,0,0,1,.4,2.1,1.4,1.4,0,0,1-1.2.7,1.1,1.1,0,0,1-.8-.3L9,17.1Zm-5,9H7.5a1.5,1.5,0,0,1,0,3H4Zm5,8.4,1.2-.8a1.4,1.4,0,0,1,2,.4,1.5,1.5,0,0,1-.4,2.1L9,34.5ZM19.5,18.6l-4,4v2.8l4,4v5.2l-3.4,3.5a2.1,2.1,0,0,1-1.1.4,2.1,2.1,0,0,1-1.1-.4,1.6,1.6,0,0,1,0-2.2l2.6-2.5V30.6l-4-4V21.4l4-4V14.6l-2.6-2.5a1.6,1.6,0,1,1,2.2-2.2l3.4,3.5Z"></path>{" "}
                                                <path d="M45.6,18.7l-4-3.3-.6-.5V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2-4,2.7V22.5H27a1.5,1.5,0,0,1,0,3H25.5V43.1l4,2.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l.6-.5,4-3.3a.9.9,0,0,0,.4-.8v-9A.8.8,0,0,0,45.6,18.7ZM39,17.1l-1.2.8a1.1,1.1,0,0,1-.8.3,1.4,1.4,0,0,1-1.2-.7,1.5,1.5,0,0,1,.4-2.1L39,13.5ZM28.5,29.4l4-4V22.6l-4-4V13.4l3.4-3.5a1.6,1.6,0,0,1,2.2,2.2l-2.6,2.5v2.8l4,4v5.2l-4,4v2.8l2.6,2.5a1.6,1.6,0,0,1,0,2.2,1.7,1.7,0,0,1-2.2,0l-3.4-3.5ZM39,34.5l-2.8-1.9a1.5,1.5,0,0,1-.4-2.1,1.4,1.4,0,0,1,2-.4l1.2.8Zm5-9H40.5a1.5,1.5,0,0,1,0-3H44Z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </div>

                        <h3 className="text-black font-medium text-2xl">
                            It&apos;s Cost-Effective
                        </h3>
                    </CardHeader>
                    <CardBody>
                        <p className="text-black/60 ">
                            As a small business or individual, you might be concerned about costs.
                            Our AI receipt buddy provides a high-quality, professional service at a
                            fraction of the cost of traditional receipt management systems.
                        </p>
                    </CardBody>
                </Card>

                <Card className="max-h-[245px] bg-secondary-light/20 p-3 w-full shadow-sm ">
                    <CardHeader className="flex flex-col items-start gap-3">
                        <div className="w-8 h-8 object-contain">
                            <svg
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth=""></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <defs>
                                        <style>
                                            {`.a{fill:none;stroke:#63909e;stroke-linecap:round;stroke-linejoin:round;strokeWidth:3px;}`}
                                        </style>
                                    </defs>
                                    <path
                                        className="a"
                                        d="M43.2722,18.6536A20,20,0,0,1,44,24h0A20,20,0,1,1,35.322,7.5133"
                                    ></path>
                                    <path
                                        className="a"
                                        d="M13.8727,24.2037,21.1679,31.58,43.5088,8.4875"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <h3 className="text-black font-medium text-2xl">It&apos;s User Friendly</h3>
                    </CardHeader>
                    <CardBody>
                        <p className="text-black/60 ">
                            Our platform is designed with simplicity in mind. The AI-powered system
                            automatically scans and categorizes your receipts, making it easy for
                            anyone to use, regardless of their tech-savviness.
                        </p>
                    </CardBody>
                </Card>

                <Card className="max-h-[245px] bg-secondary-light/20 p-3 w-full shadow-sm ">
                    <CardHeader className="flex flex-col items-start gap-3">
                        <div className="w-8 h-8 object-contain">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#63909e"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M12 9V17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke="#63909e"
                                        strokeWidth="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        </div>

                        <h3 className="text-black font-medium text-2xl">It Saves Time</h3>
                    </CardHeader>
                    <CardBody>
                        <p className="text-black/60 ">
                            Time is valuable, especially when running a business. Our AI receipt
                            buddy saves you time by automating the tedious task of receipt
                            management, allowing you to focus on what truly matters.
                        </p>
                    </CardBody>
                </Card>
            </motion.div>
        </section>
    );
};

export default Info;
