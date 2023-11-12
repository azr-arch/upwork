"use client";

import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

const Header = () => {
    const variants = {
        hide: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.header
            variants={variants}
            initial="hide"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="w-full flex items-center px-8 py-6 shadow-md"
        >
            <div className="text-primary font-bold text-lg md:text-2xl lg:text-3xl">Logo</div>
            <Avatar
                className="ml-auto"
                isBordered
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
        </motion.header>
    );
};

export default Header;
