import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Layout({children}) {
    return (
        <>
            <Header/>
            <h1>Layout</h1>
            <div>{children}</div>
            <Footer/>
        </>
    );
}