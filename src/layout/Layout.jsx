import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <div className='container mx-auto px-4 lg:px-0'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    );
}
