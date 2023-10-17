import Footer from "@/components/footer/Footer";
import SectionWithCards from "@/components/marketing-card/SectionWithCards";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className='container mx-auto '>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
