import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/componenets/layout";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Jiyeon's portfolio</title>
                <meta name="description" content="HI, I'am Jiyeon"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Home</h1>
        </Layout>
    );
}
