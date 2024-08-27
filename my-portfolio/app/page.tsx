import Image from "next/image";
// @ts-expect-error TS(2307): Cannot find module '@/app/components/header' or it... Remove this comment to see the full error message
import Header from "@/app/components/header";
// @ts-expect-error TS(2307): Cannot find module '@/app/components/footer' or it... Remove this comment to see the full error message
import Footer from "@/app/components/footer";
import dynamic from 'next/dynamic';
// @ts-expect-error TS(2307): Cannot find module '@/app/components/home/hero' or... Remove this comment to see the full error message
const Hero = dynamic(() => import('@/app/components/home/hero'), { ssr: false });

export default function Home() {
    return (
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
            <Header/>
            // @ts-expect-error TS(2552): Cannot find name 'section'. Did you mean 'Selectio... Remove this comment to see the full error message
            <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    // @ts-expect-error TS(2749): 'Hero' refers to a value, but is being used as a t... Remove this comment to see the full error message
                    <Hero/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
