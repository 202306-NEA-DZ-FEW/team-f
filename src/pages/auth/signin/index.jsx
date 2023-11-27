import { useRouter } from "next/router"; // Import useRouter
import { useEffect } from "react";

import LoginForm from "@/components/loginform";

import { useAuth } from "@/context/AuthContext";

export default function Login() {
    const { currentUser } = useAuth();
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        // Check if the user is not logged in and redirect to 404 page
        if (currentUser) {
            router.push("/account");
            return; // Stop further execution of the useEffect
        }
    }, [currentUser]);
    return <LoginForm />;
}
