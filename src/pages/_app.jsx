import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
