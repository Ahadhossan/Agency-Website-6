import React from "react";
import "../../styles/footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#",
    display: "Job",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
          {/* footer text */}
          <div className="footer-logo">
            <h2>Digency</h2>
            <p className="description">Grow with us</p>
            <p className="small-text description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est
              libero, maximus id ligula quis, lobortis dignissim metus. Fusce
              fringilla turpis dapibus mi egestas, vel posuere mi pellentesque.
            </p>
          </div>

          <div className="footer-quick-links">
            <div className="quick-links-title">Solution</div>
            <ul className="quick-links">
              {quickLinks01.map((item, index) => (
                <li className="quick-link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-quick-links">
            <div className="quick-links-title">Support</div>
            <ul className="quick-links">
              {quickLinks02.map((item, index) => (
                <li className="quick-link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-quick-links">
            <div className="quick-links-title">Company</div>
            <ul className="quick-links">
              {quickLinks03.map((item, index) => (
                <li className="quick-link-item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">Copyright {year}, developed by Ahad Hossain.</p>
      </div>
    </section>
  );
};

export default Footer;
