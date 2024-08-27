import {Inter} from "next/font/google";
import {ThemeProvider} from 'next-themes'
import "./globals.css";

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
        // @ts-expect-error TS(2304): Cannot find name 'html'.
        <html suppressHydrationWarning lang="en">
        // @ts-expect-error TS(2304): Cannot find name 'body'.
        <body className={inter.className} suppressHydrationWarning={true}>
        // @ts-expect-error TS(2749): 'ThemeProvider' refers to a value, but is being us... Remove this comment to see the full error message
        <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
        </body>
        </html>
    );
}
