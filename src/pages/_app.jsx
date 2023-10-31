import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            {/* <Layout> */}
                <Component {...pageProps} />
            {/* </Layout> */}
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
