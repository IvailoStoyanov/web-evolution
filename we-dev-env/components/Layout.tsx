import Navigation from "./navigation/Navigation";
import Link from "next/link";
import Image from "next/image";

function Layout(props: { children: {} }) {
  return (
    <div className="page-layout">
      {/* <a href="#navigation" className="skipLink">
        skip to nav
      </a>
      <a href="#content" className="skipLink">
        skip to content
      </a> */}

      <Navigation />

      {props.children}

      <footer>
        <div className="footer_container">
          <div className="footer_col">
            <Link href="/">
              <a className="footer_logo">
                <Image
                  src="/logo/we-logo-white.svg"
                  alt="Web Evolution Logo"
                  width={100}
                  height={50}
                />
              </a>
            </Link>
            <div className="footer_location">
              <h3>Web Evolution</h3>
              <p>
                Str. Liditse 7 <br />
                Bulgaria - Sofia, 1113
              </p>
            </div>
          </div>
          <div className="footer_col">
            <div className="footer_contact">
              <h3>Contact</h3>
              <p>
                <a href="tel:+359 (0)886020965">+359 (0)886020965</a>
              </p>
              <p>
                <a href="mailto:i.stoyanov.work@gmail.com">
                  i.stoyanov.work@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer_info">
            <p>© 2021–Today Web Evolution Ltd.</p>
            <a href="">Privacu Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
