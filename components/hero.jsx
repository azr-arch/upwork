"use client";

import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const Hero = () => {
    const contentVariant = {
        hidden: { opacity: 0, x: "-100vw" },
        visible: { opacity: 1, x: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    };

    const transition = {
        duration: 0.5,
        delay: 0.8,
    };

    return (
        <div className="px-12 py-4 min-h-w_header w-full grow  gap-x-5 place-items-center relative overflow-hidden">
            <motion.div
                variants={contentVariant}
                initial="hidden"
                animate="visible"
                transition={transition}
                className="flex flex-col items-center h-full w-full"
            >
                <div className="w-full text-center mt-20">
                    <h1 className=" font-semibold text-3xl md:text-5xl text-primary mb-3  md:mb-5 leading-tight ">
                        Your <span className="text-secondary-dark underline">AI</span> receipt
                        buddy.
                    </h1>
                    <p className="text-secondary-dark text-xs font-medium md:text-base ">
                        Scan your receipts and we will store them in a secure place for you.{" "}
                    </p>
                </div>
                <div className="mt-7 space-x-4">
                    <Button
                        size="lg"
                        radius="sm"
                        className="bg-secondary-light font-medium transition text-black hover:bg-primary hover:text-white "
                        variant="defa"
                    >
                        Try us!
                    </Button>
                    <Link href="#info" size="md" variant="light">
                        Learn more
                    </Link>
                </div>
            </motion.div>

            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={transition}
                className="bg-[url('../app/bg.svg')]  z-0 pointer-events-none bg-no-repeat mx-auto bg-center bg-contain h-[500px] "
            ></motion.div>
        </div>
    );
};

export default Hero;
