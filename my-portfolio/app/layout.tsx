import {Inter} from "next/font/google";
import {ThemeProvider} from 'next-themes';
import {ModalProvider} from './context/ModalContext';
import Modal from './components/modal/email-modal';
import "./styles/globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class">
            <ModalProvider>
                {children}
                <Modal/>
            </ModalProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
