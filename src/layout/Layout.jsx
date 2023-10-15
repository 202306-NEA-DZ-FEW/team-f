import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/search-bar/search-bar";

export default function Layout({ children }) {
    return (
        <div className='container mx-auto '>
            <Navbar />
            {children}
            <Footer />
            <SearchBar />
        </div>
    );
}
