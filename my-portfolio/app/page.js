import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/app/components/home/hero'), { ssr: false });

export default function Home() {
    return (
        <div>
            <Header/>
            <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
