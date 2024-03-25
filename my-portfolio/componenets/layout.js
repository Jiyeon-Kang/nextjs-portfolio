import Header from "@/componenets/header";
import Footer from "@/componenets/footer";
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