import Navigation from "./navigation/Navigation";

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

      <footer id="contactInfo">
        <div>WE - logo</div>
        <div>
          <h3>Web Evolution</h3>
          <p>Bulgaria, Address of the Firm itslef, And the post code, 1119 or whatever it is.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="">+359 (0)886020965</a>
          <a href="">i.stoyanov.work@gmail.com</a>
        </div>
        <div>© 2021–Today Web Evolution | <a href="">Privacu Policy</a></div>
      </footer>
    </div>
  );
}

export default Layout;
