import React, { useState } from "react";
import Layout from "@/src/layout/Layout";

const Branding = () => {
  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Define an array of image URLs for your gallery
  const imageGallery = [
    "https://wisdomdigitalmarketing.com/assets/uploads/media-uploader/custom-made-logo-design-brand-identity-luxury-package1638866259.jpg",
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Logo-vs-branding.jpeg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces",
    "https://cdn.logojoy.com/wp-content/uploads/20201117163112/birdland_banner-scaled.jpg",
    // Add more image URLs as needed
  ];

  // Function to handle image click and open it
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the selected image
  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <Layout headerExtraClass={"three"} pageName={"Portfolio Single 1"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h1 style={{ color: "#485094", paddingBottom: "20px" }}>
              BRANDING
            </h1>
            <h3>
              With a clearly defined brand strategy that combines your beliefs
              with your vision, we help your firm stand out and distinct.
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
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694763570/WhatsApp_Image_2023-09-13_at_11.52.57_AM_hvyvkv.jpg"
                  />
                </figure>
                <p className="p-30">
                  At our digital agency, we believe that branding is more than
                  just a logo or a catchy slogan; it's the heart and soul of
                  your online presence. We understand that in today's fast-paced
                  digital landscape, your brand is your identity, your
                  reputation, and your connection to your audience. Our team of
                  creative minds and digital experts is dedicated to crafting
                  and nurturing brands that stand out in the digital realm. From
                  developing a distinct visual identity to crafting compelling
                  brand stories and strategies, we ensure that your brand not
                  only engages but resonates with your target audience. Whether
                  you're a startup looking to establish your digital footprint
                  or an established business seeking a brand refresh, we're here
                  to guide you on your branding journey. With every pixel, post,
                  and campaign, we're committed to helping your brand thrive,
                  evolve, and leave a lasting impression in the ever-evolving
                  digital world.
                  <br />
                  <br />
                  we recognize that branding is the cornerstone of meaningful
                  connections in the digital realm. It's the vehicle that
                  carries your unique story to the hearts and minds of your
                  audience. We understand that a well-crafted brand is not
                  static; it evolves and adapts to stay relevant in the
                  ever-changing digital landscape. Our team of creative minds
                  and strategic thinkers collaborates passionately to cultivate
                  brands that inspire, engage, and endure. From logo design to
                  content strategy, we work meticulously to ensure every aspect
                  of your brand is aligned with your mission and vision. Our
                  goal is not just to create brands but to forge emotional bonds
                  that resonate with your target audience. Through compelling
                  visuals, persuasive messaging, and a consistent online
                  presence, we help your brand become an indomitable force in
                  the digital world.
                </p>

                <div></div>
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
            FOR EXCEPTIONAL BRANDING
          </h2>
          <div className="row">
            {/* Image Cards */}
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771897/verified_i2et4u.png"
                    alt="Logo Design"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Unique Identity</h5>
                  <p className="card-text">
                    Establishing a unique identity is the foundation of
                    effective branding. Your agency should develop a distinct
                    personality, visual style, and voice that sets you apart
                    from competitors. A strong brand identity helps clients
                    recognize and remember your agency.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771896/consistency_d2jurq.png"
                    alt="Business Cards"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Consistency </h5>
                  <p className="card-text">
                    Consistency is crucial in branding. Ensure that your
                    agency's branding elements, including logo, color schemes,
                    fonts, and messaging, are consistent across all marketing
                    materials, website, social media, and communication
                    channels.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771896/target-audience_rbhing.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Target Audience Understanding</h5>
                  <p className="card-text">
                    create a compelling brand, it's essential to understand your
                    target audience. Conduct in-depth research to grasp their
                    needs, preferences, pain points, and behaviors. Tailor your
                    branding efforts to resonate with your audience and solve
                    their problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771896/storytelling_d5yikw.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Storytelling</h5>
                  <p className="card-text">
                    Brands that tell engaging stories are more memorable. Craft
                    a compelling narrative around your agency, including its
                    history, mission, and values. Storytelling humanizes your
                    brand and fosters a deeper connection with your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771895/trustworthiness_svjmf8.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Quality and Trust</h5>
                  <p className="card-text">
                    Build trust by consistently delivering high-quality
                    services. Quality assurance should be at the core of your
                    agency's brand promise. When clients associate your agency
                    with reliability and excellence, they are more likely to
                    become loyal customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/denlhej9f/image/upload/v1694771895/project-management_alhvoo.png"
                    alt="Brochures and Flyers"
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Adaptability and Innovation</h5>
                  <p className="card-text">
                    The branding landscape is dynamic. Your agency should be
                    adaptable and innovative in response to industry trends and
                    changes. Showcase your commitment to staying current and
                    offering cutting-edge solutions to meet evolving client
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more image cards */}
          </div>
        </div>
      </section>

      {/* Your existing content here */}

      {/* New Gallery Section */}
      <section>
        <div className="container r">
          <h2
            style={{
              color: "black",
              paddingBottom: "20px",
              textAlign: "center",
              fontSize: "50px",
              marginTop: "20px",
            }}
          >
            GALLERY
          </h2>
          <div className="row">
            {imageGallery.map((imageUrl, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card"
                  onClick={() => handleImageClick(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`Gallery Image ${index + 1}`}
                    className="card-img-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseImage}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Branding;
