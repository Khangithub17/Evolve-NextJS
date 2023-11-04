import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/denlhej9f/image/upload/v1698304298/3409297_g8yytl.jpg)",
        }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              <span>Evolve </span>
              e360 Solutions.{" "}
            </h2>
            <p>Let us help your business.</p>
            <a href="services" className="themebtu full">
              More Services
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="small-services-color">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 32 32"
                    height={512}
                    viewBox="0 0 32 32"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m30.197 28.331-7.843-7.555c1.802-2.057 2.789-4.634 2.789-7.361 0-3.058-1.234-5.931-3.475-8.089-4.603-4.435-12.092-4.434-16.693 0-2.241 2.158-3.475 5.031-3.475 8.089s1.234 5.931 3.475 8.09c2.301 2.218 5.324 3.326 8.347 3.325 2.725 0 5.445-.91 7.642-2.712l7.892 7.602c.888.883 2.257-.532 1.341-1.389zm-23.88-8.216c-1.86-1.792-2.884-4.171-2.884-6.7 0-2.528 1.024-4.908 2.884-6.699 1.931-1.861 4.468-2.791 7.005-2.791s5.074.93 7.005 2.791c1.86 1.792 2.884 4.171 2.884 6.699 0 2.529-1.024 4.908-2.884 6.7-3.863 3.721-10.148 3.721-14.01 0z" />
                      <path d="m18.154 12.449h-3.866v-3.862c0-.533-.433-.965-.966-.965-.534 0-.966.432-.966.965v3.862h-3.866c-.534 0-.966.432-.966.965s.432.966.966.966h3.866v3.862c0 .533.433.965.966.965.534 0 .966-.432.966-.965v-3.862h3.866c.534 0 .966-.432.966-.965s-.433-.966-.966-.966z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services">Design & Development</a>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 418.945 418.945"
                    height={512}
                    viewBox="0 0 418.945 418.945"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m9.213 397.61h401.004c4.849 0 8.728-3.879 8.728-8.728s-3.879-8.728-8.728-8.728h-25.214v-233.232c0-4.849-3.879-8.243-8.728-8.728h-55.762c-4.849 0-8.728 3.879-8.728 8.728v233.717h-16.486v-188.623c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v188.622h-16.486v-141.102c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v141.103h-16.486v-90.19c0-4.849-3.879-8.728-8.728-8.728h-56.249c-4.849 0-8.728 3.879-8.728 8.728v90.19h-23.76v-350.576c0-4.849-3.879-8.728-8.728-8.728s-8.728 3.879-8.728 8.728v358.819c.97 4.849 4.849 8.728 9.213 8.728zm319.542-241.96h39.761v224.989h-39.761zm-90.189 44.61h39.761v180.379h-39.761zm-90.19 48.004h39.761v132.375h-39.761zm-89.704 50.913h39.761v81.462h-39.761z" />
                      <path d="m136.739 172.136 110.555-68.369-3.879 16.486c-.97 4.364 1.455 9.213 6.304 10.183 4.364.97 9.213-1.455 10.183-6.304l9.213-36.367c.97-4.849-.485-8.243-6.304-10.183l-36.367-9.213c-4.364-.97-9.213 1.455-10.183 6.304-.97 4.364 1.455 9.213 6.304 10.183l16.971 4.364-111.525 68.369c-3.879 2.424-5.334 7.758-2.909 11.637 3.394 4.85 8.728 4.85 11.637 2.91z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services">Planning For The Future</a>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services lest mb-0">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M444.709,239.616v227.621H67.877V239.616H32.768v245.175c0,9.696,7.858,17.554,17.554,17.554h411.941
            c9.696,0,17.554-7.858,17.554-17.554V239.616H444.709z"
                    />
                    <path
                      d="M494.446,107.953H17.554C7.858,107.953,0,115.811,0,125.507v114.688c0,9.696,7.858,17.554,17.554,17.554h476.891
            c9.696,0,17.554-7.853,17.554-17.554V125.507C512,115.811,504.142,107.953,494.446,107.953z M476.891,222.647H35.109v-79.579
            h441.783V222.647z"
                    />
                    <path
                      d="M273.273,121.066c-1.194-4.552-30.152-111.411-114.7-111.411c-36.782,0-66.706,29.924-66.706,66.706
            c0,36.782,29.661,66.706,66.121,66.706h98.304c5.436,0,10.574-2.522,13.897-6.829S274.648,126.326,273.273,121.066z
             M157.989,107.959c-17.39,0-31.013-13.88-31.013-31.598c0-17.127,14.471-31.598,31.598-31.598
            c38.52,0,61.586,37.947,72.675,63.195H157.989z"
                    />
                    <path
                      d="M354.011,9.655c-84.547,0-113.506,106.859-114.7,111.411c-1.381,5.26-0.24,10.866,3.084,15.173
            c3.324,4.307,8.455,6.829,13.897,6.829h98.304c36.46,0,66.121-29.924,66.121-66.706C420.718,39.579,390.794,9.655,354.011,9.655z
             M354.597,107.959h-73.33c11.007-25.249,34.003-63.195,72.751-63.195c17.127,0,31.598,14.471,31.598,31.598
            C385.615,94.079,371.993,107.959,354.597,107.959z"
                    />
                    <rect
                      x="238.738"
                      y="125.513"
                      width="35.109"
                      height="359.278"
                    />
                  </svg>
                  <div>
                    <a href="services">Building Your Brand</a>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img
                  alt="img"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1693892616/Evolve.img_hmhtpt.jpg"
                />
                <img
                  alt="img"
                  className="img-welcome"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1694150261/roberto-cortese-ejhjSZKTeeg-unsplash_1_be3tla.jpg"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
              <div className="heading design-enjoy">
                <h6>Small Story About Evolve.</h6>
                <h2>
                  {" "}
                  We're a team of creative &amp; Experience Professionals and
                  dedicated.
                </h2>
                {/*<img alt="line" src="assets/img/headingline.png" />*/}
              </div>
              <div className="welcome-text">
                <h6 className="pt-4 pb-5">
                  Our firm specializes in a wide range of marketing services,
                  including branding, advertising, digital marketing, public
                  relations, and event planning. We work closely with our
                  clients to develop customized strategies that align with their
                  unique goals and objectives.
                </h6>
                <h5>User Experience</h5>
                <p>
                  User Experience (UX) in website design refers to the overall
                  quality of the user's interaction with a website, encompassing
                  everything from its usability and accessibility to the
                  emotional response it elicits. A positive UX is paramount in
                  creating websites that not only attract visitors but also keep
                  them engaged and satisfied.{" "}
                </p>
                <h5>Digital Design</h5>
                <p>
                  Evolve, we understand that in the digital landscape, first
                  impressions are everything. Digital design is not just about
                  aesthetics; it's about creating meaningful, immersive, and
                  captivating user experiences. Our approach to digital design
                  is rooted in innovation, creativity, and a relentless pursuit
                  of excellence.
                </p>
                <a href="services" className="themebtu">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" alt="line" src="assets/img/line.jpg" />
      </section>
      <section className="how-it-works gap no-top">
        <div className="container">
          <div className="heading">
            <h6>How It Works?</h6>
            <h2> Our Approach to work</h2>
          </div>
          <div className="row pt-4">
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O1/</h2>
                <div className="pl-80">
                  <h4>Submit Your Design Request</h4>
                  <p>
                    At e360Solutions, we understand that every great project begins
                    with a vision. That's why our first approach to work is
                    simple: Submit your design, and we'll transform your concept
                    into a tangible masterpiece. Whether you have a rough sketch
                    or a detailed blueprint, our team of skilled developers,
                    designers, and project managers is ready to take your ideas
                    and breathe life into them. We believe in collaborative
                    creativity, working closely with you to refine and optimize
                    your design, ensuring it's not just visually stunning but
                    also fully functional and user-friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O2/</h2>
                <div className="pl-80">
                  <h4>We Start Working</h4>
                  <p>
                    Once your design is submitted, it's time for action. Our
                    second approach, "We Start Working," is all about turning
                    plans into reality. Our agile and experienced development
                    teams kick into high gear, bringing your project to life one
                    line of code at a time. We embrace the latest technologies
                    and best practices to ensure that your project is not only
                    cutting-edge but also scalable, secure, and optimized for
                    performance. With clear communication and a commitment to
                    deadlines, we keep you informed and involved throughout the
                    development process, ensuring your project is on track for
                    success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O3/</h2>
                <div className="pl-80">
                  <h4>Get Your Projects Done! </h4>
                  <p>
                    Our ultimate goal is to deliver results. Our third approach,
                    "Get Your Projects Done!", is about bringing your vision to
                    fruition. We're not just about creating impressive digital
                    solutions; we're about achieving tangible outcomes for your
                    business or organization. Whether it's launching a new
                    website, developing a mobile app, or optimizing your digital
                    presence, we ensure that your project is not just completed
                    but delivered with excellence. We focus on quality
                    assurance, testing, and user experience to guarantee that
                    your project performs flawlessly and achieves your goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sercives gap">
        <div className="container">
          <div className="heading-boder two">
            <h2>
              We’ll Show You How It’s <span>Done</span>
            </h2>
            <p>We Help You Build An Online Brand</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1694432606/Screenshot_2023-09-05_152839_lk1vid.png"
                />
                <div className="sercive-style-text">
                  <h6>Nidhi Vania Decor</h6>
                  <div className="boder" />
                  <p>Website,CMS,SEO,Logo</p>
                  <a href="https://nidhivaniadecor.com/">View</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1694432703/Screenshot_2023-09-05_153418_ysfxho.png"
                />
                <div className="sercive-style-text">
                  <h6>Evolve Marketing</h6>
                  <div className="boder" />
                  <p>Website,CMS,SEO,Logo</p>
                  <a href="https://evolvemarketng.com/">View</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1694432688/Screenshot_2023-09-05_152915_glyib5.png"
                />
                <div className="sercive-style-text">
                  <h6>Pranam Realty</h6>
                  <div className="boder" />
                  <p>Website,CMS,SEO,Logo</p>
                  <a href="/">View</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style mb-0">
                <img
                  alt="img"
                  className="w-100"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1694432702/Screenshot_2023-09-05_153007_astryr.png"
                />
                <div className="sercive-style-text">
                  <h6>Sheetal Electrotech</h6>
                  <div className="boder" />
                  <p>Website,CMS,SEO,Logo</p>
                  <a href="https://sheetalelectrotech.com/">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>

      <section className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>Why Partner With Us?</h6>
            <h2>What Our Clients Said About Evolve</h2>
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    alt="man"
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1693912832/customer-review_tlbpn5.png"
                  />
                  <p>
                    &quot;The e360Solutions team are fast and efficient to work with. A
                    really friendly team who are reliable and committed to
                    helping your business grow. We would definitely recommend
                    them for any small business and their range of services has
                    something suitable for everyone..&quot;
                  </p>
                  <div className="boder" />
                  <span>
                    Nidhi Vania
                    <br />
                    Client
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    alt="man"
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1693912832/customer-review_tlbpn5.png"
                  />
                  <p>
                    &quot;Greatest appreciation to you and your team for the
                    outstanding job you did for us. The website is just what we
                    wanted, and we were thrilled with the speed your team
                    exercised. We feel privileged to have Evolve Marketing as
                    our online marketing partner!.&quot;
                  </p>
                  <div className="boder" />
                  <span>
                    Sachin Joshi
                    <br />
                    Client
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    alt="man"
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1693912832/customer-review_tlbpn5.png"
                  />
                  <p>
                    &quot;The Team of Evolve provided us with 360-degree digital
                    solutions, from website design to social media management
                    and SEO. I refer them to every business that wants to gain
                    visibility and customers in the online world.&quot;
                  </p>
                  <div className="boder" />
                  <span>
                    Amit Singh
                    <br />
                    Client
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    alt="man"
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1693912832/customer-review_tlbpn5.png"
                  />
                  <p>
                    Thanks to Evolve Marketing, my online presence has not only
                    expanded but thrived. My business has seen significant
                    growth in website traffic, conversions, and brand
                    recognition. I couldn't be happier with the results.
                  </p>
                  <div className="boder" />
                  <span>
                    Shreya Rao
                    <br />
                    Client
                  </span>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <section
        className="gap no-bottom video-section"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Let’s Start On Your Case <span>Together</span>
            </h2>
            <p>We Are A Solution Oriented Digital Agency</p>
          </div>
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="video-img">
                <img
                  className="w-100"
                  alt="img"
                  src="https://res.cloudinary.com/denlhej9f/image/upload/v1693915328/pexels-mikael-blomkvist-6476260_1_kvetad.jpg"
                />
                <a data-fancybox href="https://youtu.be/Z-_Cj19Gsos">
                  <i className="fa-solid fa-play" />
                </a>
              </div>
            </div>
            <div className="tp-hero__shapes">
              <div className="style-shapes-2">
                <img alt="shap-4" src="assets/img/shap-1.png" />
              </div>
              <div className="style-shapes-4">
                <img alt="dots1" src="assets/img/shap-2.png" />
              </div>
              <div className="style-shapes-5">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-6">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-7">
                <img alt="dots1" src="assets/img/shap-5.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="get-in-touch gap">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-xl-10">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="heading">
                      <h6>Get In Touch</h6>
                      <h2> Kick Start Your Awesome Design Now!</h2>
                      <p>
                        Getting in touch is the first step towards forging
                        meaningful connections and unlocking new opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <form
                      action="https://formspree.io/f/xeqbkdag"
                      method="POST"
                      className="touch"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email address *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone *"
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            placeholder="Your message *"
                            defaultValue={""}
                          />
                        </div>
                        <div className="btugap">
                          <a href="#" className="themebtu full">
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-blog gap">
        <div className="container">
          <div className="heading">
            <h6>our blog</h6>
            <h2>News and Thoughts</h2>
            {/*<img alt="line" src="assets/img/headingline.png" />*/}
          </div>
          <Swiper {...latestswiper} className="swiper-container latestswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694163898/web_deisgn_330x240_rijmus.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      The Importance of Responsive Web Design: Why Mobile
                      Optimization.
                    </h4>
                  </a>
                  <span>by Evolve | Web Development</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694163898/cms_330x240_mpgoj1.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Choosing the Right Content Management System (CMS) for
                      Your Website
                    </h4>
                  </a>
                  <span>by Evolve | Web Development</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694163898/marketing-branding_330x240_hnfaxs.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Effective Website Branding: Building a Strong Online
                      Identity
                    </h4>
                  </a>
                  <span>by Evolve | Branding</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694163898/E-commerce_330x240_xm9dr9.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      The Power of E-Commerce: How to Launch and Grow Your
                      Online Store
                    </h4>
                  </a>
                  <span>by Evolve | online store</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694163898/seo_330x240_li8yps.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      The Role of SEO in Website Development: A Comprehensive
                      Guide
                    </h4>
                  </a>
                  <span>by Evolve | SEO</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="https://res.cloudinary.com/denlhej9f/image/upload/v1694164458/web-design-technology_330x240_bjcoo6.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 8, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      The Latest Web Design Trends: What’s In and What’s Out
                    </h4>
                  </a>
                  <span>by Evolve | Web Design</span>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
