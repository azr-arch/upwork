import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Info from "@/components/info";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <Header />
            <Hero />
            <Info />
            <Footer />
        </main>
    );
}
