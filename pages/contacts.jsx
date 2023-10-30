import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Contacts = () => {
  return (
    <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>Let Us Know What You're Looking For</h2>
            <a href="#">Get in Touch</a>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Start Your Project With Us.</h6>
            <h2>Let's Talk</h2>
           {/*<img alt="line" src="assets/img/headingline.png" />*/}
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form"  action="https://formspree.io/f/xeqbkdag" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="name" placeholder="Your Name *" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Phone Number *"
                    />
                  </div>
                </div>
                <input type="text" name="name" placeholder="Your Email *" />
                <textarea placeholder="Your Message *" defaultValue={""} />
                <button className="themebtu">Submit</button>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>Address : </h4>
                  <span>
                   4 Shankar Road Tarneit
                    <br />
                    Victoria 3029,Australia
                  </span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="callto:+61 452192488">
                    <span>+61 452192488</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:this.evolve@gmail.com">
                    <span>this.evolve@gmail.com</span>
                  </a>
                </li>
                <li>
                  <h4>Find us :</h4>
                  <ul className="brandicon">
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
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6933491702675!2d144.6729688!3d-37.8206511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68e96793ab3e1%3A0x3ad012d312f2267!2s4%20Shankar%20Rd%2C%20Tarneit%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1693917993402!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <section className="offices gap" style={{ backgroundColor: "#f3f8fb" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading">
                <h2>Offices</h2>
                <p>
                 Our Branch 
                </p>
              </div>
            </div>
            <div className="col-xl-8">
              <Swiper
                {...studiesswiper}
                className="swiper-container studiesswiper"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide" >
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="https://res.cloudinary.com/denlhej9f/image/upload/v1694235689/Screenshot_2023-09-09_102944_r5xgzx.png"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Vapi,Gujarat</h5>
                        <p>
                         307,Pramukh Orbit Mahavir Nagar Vapi,Gujarat,396191(IN)
                         
                        </p>
                        <a href="https://www.google.com/maps/place/Evolve+Marketing+%7C+Digital+Agency+Vapi/@20.3704066,72.9215387,15z/data=!4m6!3m5!1s0x3be0cfd09f78eee5:0xe8cf2c1f694d1df1!8m2!3d20.3704066!4d72.9215387!16s%2Fg%2F11sdrzg_26?entry=ttu">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                 
                  
                </div>
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contacts;
