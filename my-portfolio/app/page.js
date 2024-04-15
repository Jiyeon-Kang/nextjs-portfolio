import Image from "next/image";
import Header from "@/app/components/hesder";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <h1 className="text-3xl font-bold underline">
                Home
            </h1>
            <Footer/>
        </>
    );
}
