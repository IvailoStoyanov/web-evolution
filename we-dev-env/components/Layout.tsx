import Navigation from "./navigation/Navigation";
import Link from "next/link";

function Layout(props: { children: {} }) {
  return (
    <div>
      <a href="#navigation" className="skipLink">
        skip to nav
      </a>
      <a href="#content" className="skipLink">
        skip to content
      </a>

      <Navigation />

      {props.children}

      <footer className="footer">
        <div className="footer_container">
          <div className="footer_logoAndWordMark">
            <Link href="/">
              <a className="footer_logo">
                <img
                  src={require("../public/logo/we-logo-white.svg")}
                  alt="Web Evolution Logo"
                  width="100px"
                  height="50px"
                />
              </a>
            </Link>
            <p>web evolution</p>
          </div>
          <div className="footer_contact">
            <h3>Contact</h3>
            <p className="footer_address">
              Str. Liditse 7 <br />
              Bulgaria - Sofia, 1113
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
            <a href="">Privacu Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
