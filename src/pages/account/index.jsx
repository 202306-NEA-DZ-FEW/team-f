import Profile from "@/components/profile/Profile";

import Layout from "@/layout/Layout";

export default function MyAccount() {
    return <Profile />;
}

export async function getStaticProps() {
    try {
        const info = {
            surname: "ismail",
            location: "istanbul",
            phone: "123456789",
            email: "ismail@ismail",
        };

        // if (!info) {
        //     // Handle the case where 'info' is missing or undefined
        //     console.error("Info not found.");
        //     return {
        //         notFound: true,
        //     };
        // }

        return {
            props: { info },
        };
    } catch (error) {
        console.error("Error fetching info:", error);
        return {
            notFound: true,
        };
    }
}
