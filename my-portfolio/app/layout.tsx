import {Inter} from "next/font/google";
import {ThemeProvider} from 'next-themes'
import "../app/styles/globals.css";

export const metadata = {
    title: "Jiyeon's Portfolio",
    description: "Jiyeon's React-Portfolio",
    content: "Jiyeon's Portfolio",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
    children
}: any) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
        </body>
        </html>
    );
}
