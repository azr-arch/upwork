import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers/nextui-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Receipt Buddy",
    description: "Digital receipt AI solution.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
