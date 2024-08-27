import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "../app/styles/globals.css";

interface Metadata {
    title: string;
    description: string;
    content: string;
}

export const metadata: Metadata = {
    title: "Jiyeon's Portfolio",
    description: "Jiyeon's React-Portfolio",
    content: "Jiyeon's Portfolio",
};

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
