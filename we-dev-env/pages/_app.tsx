import "../styles/global.scss";
import { AppProps } from "next/app";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";

// ToDo: replace all Any
export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </>;
}