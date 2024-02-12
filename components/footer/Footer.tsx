import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <footer className="footer">
        <div className="footer_container">
            <div className="footer_logoAndWordMark">
                <Link href="/" className="footer_logo">
                    <Image
                        src="/logo/we-logo-white.svg"
                        alt="Web Evolution Logo"
                        width={100}
                        height={50}
                    />
                </Link>
                <p>web evolution</p>
            </div>
            <div className="footer_contact">
                <h3>Contact</h3>
                <p className="footer_address">
                    Str. Professor Parashkev Stoyanov 5 <br />
                    Bulgaria - Varna, 9000
                </p>
                <div className="footer_phoneAndMail">
                    <p>
                        <a href="mailto:i.stoyanov.work@gmail.com">
                            i.stoyanov.work@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+359 (0)886020965">+359 (0)886020965</a>
                    </p>
                </div>
            </div>
            <div className="footer_info">
                <p>© 2021–Today Web Evolution Ltd.</p>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>
    </footer>
};

export default Footer;