import { Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-secondary-light px-8 py-4 text-center lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 lg:grid-cols-4">
                    <div className="text-primary">
                        <h1 className="font-bold text-2xl">Logo</h1>
                        <p className="text-sm font-medium">Lorem ipsum dolor etsum.</p>
                    </div>

                    <div className="text-secondary-dark flex flex-col items-center gap-2">
                        <Link href="#">Products</Link>
                        <Link href="#">Settings</Link>
                        <Link href="#">Orders</Link>
                        <Link href="#">Accounts</Link>
                    </div>
                    <div className="text-secondary-dark flex flex-col items-center gap-2">
                        <Link href="#">About</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Products</Link>
                        <Link href="#">Settings</Link>
                    </div>
                    <div className="text-secondary-dark flex flex-col items-center gap-2">
                        <Link href="#">Orders</Link>
                        <Link href="#">Accounts</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Services</Link>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                <span>© 2023 Copyright:</span>
                <a
                    className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="https://tailwind-elements.com/"
                >
                    Logo
                </a>
            </div>
        </footer>
    );
};

export default Footer;
