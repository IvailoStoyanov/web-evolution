import "../styles/global.scss";
import { AppProps } from "next/app";
import { Lato } from 'next/font/google';
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";
import { lato } from '@/utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
    return <div className={lato.className}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </div>;
}