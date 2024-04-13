const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="home">
                <img
                  alt="logo"
                  src="assets/img/logo2.png"
                  className="logo2"
                  style={{ width: "150px", height: "auto" }}
                />
              </a>
              <p></p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="pricing">Pricing</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li className="pb-0">
                  <a href="contacts">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Address</h6>
              <ul>
                <li>
                  <p>
                    4 Shankar Road Tarneit Victoria 3029,Australia
                    <li>
                      <p>ABN No - 88-532-439-761</p>
                      <a href="callto:+61 452192488">
                        <span>+61 452192488</span>
                      </a>
                    </li>
                    <a href="mailto:this.evolve@gmail.com">
                      <span>jay@evolvemarketng.com</span>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Subscribe</h6>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="your email address"
                />
                <button>go</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2023 Evolve - All Rights Reserved | Developed by{" "}
            <a href="https://evolvemarketng.com/" style={{ color: "white" }}>
              Evolve Marketing
            </a>
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/evolve-marketng/mycompany/">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/evolve_marketing_india?igshid=MzRlODBiNWFlZA==">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
