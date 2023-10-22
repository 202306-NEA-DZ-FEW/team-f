import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <div className='container mx-auto '>
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    );
}
