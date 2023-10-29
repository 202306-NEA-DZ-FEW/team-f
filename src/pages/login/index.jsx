import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import LoginForm from "@/components/loginform";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import React from "react";

export default function Login() {
    return (
        <Router>
            {" "}
            {/* Wrap your components with the Router */}
            <div>
                <Navbar />
                <div>
                    <div>
                        <LoginForm />
                    </div>
                    <div></div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
