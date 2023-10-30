import Layout from "@/src/layout/Layout";
const webdevelopment = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Portfolio Single 1"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h1
              style={{
                color: "#485094",
                paddingBottom: "20px",
                fontSize: "60px",
              }}
            >
              CREATING WEB MAGIC
            </h1>
            <h3>
              We specialize in bespoke website design and development for
              popular systems like HTML, CSS, and React. &amp; Get a website
              that is current, fast, and effective.
            </h3>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {" "}
              {/* Modify the width of this column */}
              <div className="blog-item hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694508811/Our_Social_Media_Course_is_Live_gfeeyx.png"
                  />
                </figure>
                <p className="p-30">
                  Web development is a dynamic and ever-evolving field that
                  encompasses the creation and maintenance of websites and web
                  applications. It involves a combination of various
                  technologies and skills, including HTML (Hypertext Markup
                  Language), CSS (Cascading Style Sheets), and JavaScript, among
                  others. React, in particular, is a popular JavaScript library
                  used for building user interfaces for web applications.
                  <br />
                  <br />
                  User Interface (UI) Design: UI designers are responsible for
                  creating the layout, structure, and visual components of a
                  website. They design elements like buttons, navigation menus,
                  forms, and overall page layouts to ensure an intuitive and
                  visually appealing user interface. Visual Branding: Web
                  designers establish and maintain the visual identity of a
                  website. This includes selecting color schemes, typography,
                  logos, and graphics that align with the brand's identity and
                  message. Responsive Design: With the increasing use of mobile
                  devices, web designers must ensure that websites are
                  responsive, meaning they adapt seamlessly to various screen
                  sizes and devices, providing a consistent user experience.
                  User Experience (UX) Design: UX designers focus on optimizing
                  the overall user experience. They consider factors such as
                  site navigation, information architecture, user flows, and
                  usability testing to create a website that is easy to use and
                  efficient. Prototyping and Wireframing: Before development
                  begins, web designers often create wireframes and prototypes
                  to visualize the layout and functionality of the site,
                  allowing for early testing and refinement of the design.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolimg hoverstyle"></div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolimg hoverstyle"></div>
                </div>
              </div>
              <p className="p-30"></p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#d5edef",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "black", paddingBottom: "20px" }}>
            TYPES OF WEBSITE DESIGNS WE PROVIDE
          </h2>
          <div className="row">
            {/* Image Cards */}
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758479/website_jjnges.png"
                    alt="Logo Design"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">CORPORATE WEBSITE</h5>
                  <p className="card-text">
                    We create professional websites for corporates with
                    dedicated solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758423/online-shop_lkjxbg.png"
                    alt="Business Cards"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">ECOMMERCE WEB DESIGN</h5>
                  <p className="card-text">
                    We open an online store with a easy-to-navigate website
                    design with products listing.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758423/personal-information_wc6nzd.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">PERSONAL WEBSITE</h5>
                  <p className="card-text">
                    We design personal websites for individuals based on their
                    specifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758423/blog_lafyld.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">BLOGS</h5>
                  <p className="card-text">
                    We can develop blogs and websites that complement your style
                    or brand identity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758423/portfolio_stbunx.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">PORTFOLIO</h5>
                  <p className="card-text">
                    We can build an online website portfolio of your works or
                    your products/ services
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694758423/browser_dg3xrt.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">LANDING PAGE DESIGN</h5>
                  <p className="card-text">
                    A landing page website is a specialized type of web page
                    designed for a specific marketing campaign.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more image cards */}
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "white",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#333", paddingBottom: "20px" }}>
            TECHNOLOGIES WE USE
          </h2>
          <div className="row justify-content-center">
            {/* Technology Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-html5-41-1175209.png?f=avif&w=256"
                  alt="Technology 1"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>

            {/* Technology Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-css3-8-1175200.png?f=avif&w=256"
                  alt="Technology 4"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
           
            {/* Technology Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-php-99-1175127.png?f=avif&w=256"
                  alt="Technology 3"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>

            {/* Technology Card 4 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-wordpress-64-1175065.png?f=avif&w=256"
                  alt="Technology 2"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>


            {/* Technology Card 5 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=avif&w=256"
                  alt="Technology 5"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>

            {/* Technology Card 6 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-shopify-5-675733.png?f=avif&w=256"
                  alt="Technology 6"
                  className="card-img-top mx-auto" // Added 'mx-auto' class
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <a href="contacts" className="themebtu full">
          Get in Touch
        </a>
      </section>
    </Layout>
  );
};

export default webdevelopment;
