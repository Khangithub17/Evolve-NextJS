import Layout from "@/src/layout/Layout";
const Pricing = () => {
  return (
    <Layout noHeaderBg pageName={"Pricing"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
              Pick a Plan
              <br /> That’s Right For You
            </h2>
            <a href="contacts">Pricing Packages</a>
          </div>
        </div>
      </section>
      <section
        className="plans-pricing gap"
        style={{ backgroundColor: "#f3f8fb" }}
      >
        <div className="container">
          <div className="heading">
            <h6>Plans &amp; Pricing</h6>
            <h2>
              Ready to
              <br /> get started
            </h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style">
                <div className="standard">
                  <h5>STARTER PACKAGE starting from</h5>
                  <span>
                    <sup>$</sup>550<sup></sup>
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    Domain Name
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Personalised E-mail (upto 5)
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Number of Pages: 05-10
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    CMS
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Responsive Design
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    SEO - Basic
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Time Frame - 3 weeks*
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Support & Maintenance 6 months

                  </li>



                </ul>
                <a href="contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style">
                <div className="standard">
                  <h5>Business Package Starting From </h5>
                  <span>
                    <sup>$</sup>750<sup></sup>
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    Domain Name 
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Web Hosting 2 Year 
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Personalize E-Mail (upto 10)
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Numbers of Page (10-15)
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    CMS
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Responsive Design
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    SEO-Basic
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Google Analytics
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    E-Commerce
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Time Frame 4-8 Weeks*
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Support & Maintainance 12 months
                  </li>
                </ul>
                <a href="contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style mb-0">
                <div className="standard">
                  <h5>Professionals Package Starting From</h5>
                  <span>
                    <sup>$</sup>1150<sup></sup>
                  </span>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    Domain Name 
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Web Hosting 4 Year 
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Personalize E-Mail (upto 10)
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Numbers of Page (15-20)
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    CMS
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Responsive Design
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    SEO-Advance
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Google Analytics
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    E-Commerce
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Time Frame 4-8 Weeks*
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Support & Maintainance 12 months
                  </li>
                </ul>
                <a href="contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
