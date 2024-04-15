import Image from "next/image";
import Header from "@/app/components/hesder";

export default function Home() {
    return (
        <>
            <Header/>
            <h1 className="text-3xl font-bold underline">
                Home
            </h1>
        </>
    );
}
