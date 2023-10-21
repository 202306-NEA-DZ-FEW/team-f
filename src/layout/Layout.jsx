import Footer from "@/components/footer/Footer";
import SectionWithCards from "@/components/marketing-card/SectionWithCards";
import Navbar from "@/components/navbar/Navbar";
import SectionData from "@/components/marketing-card/SectionData";

export default function Layout({ children }) {
    return (
        <div className='container mx-auto '>
            <Navbar />
            {children}
            <SectionData />
            <Footer />
        </div>
    );
}
