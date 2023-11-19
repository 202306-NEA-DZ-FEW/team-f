import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className='w-screen h-screen overflow-x-hidden '>
            <div className='container mx-auto px-4 lg:px-8 '>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}
