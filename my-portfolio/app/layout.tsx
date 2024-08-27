import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "../app/styles/globals.css";

// Metadata 인터페이스 정의
interface Metadata {
    title: string;
    description: string;
    content: string;
}

// 실제 메타데이터 객체는 타입을 별도로 정의하지 않습니다.
export const metadata: Metadata = {
    title: "Jiyeon's Portfolio",
    description: "Jiyeon's React-Portfolio",
    content: "Jiyeon's Portfolio",
};

// Inter 폰트 설정
const inter = Inter({ subsets: ["latin"] });

// RootLayout 컴포넌트의 타입 정의
interface RootLayoutProps {
    children: React.ReactNode; // children의 타입을 React.ReactNode로 설정
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
