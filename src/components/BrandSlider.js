import { Swiper, SwiperSlide } from "swiper/react";
import { brandswiper } from "../sliderProps";

const BrandSlider = () => {
  return (
    <Swiper {...brandswiper} className="swiper-container brandswiper">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914179/Screenshot_2023-08-23_155205_a9gz1c.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914239/Screenshot_2023-08-23_155343_imcxgb.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914237/Screenshot_2023-08-23_155146_goxtkf.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914239/Screenshot_2023-08-23_155343_imcxgb.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914179/Screenshot_2023-08-23_155205_a9gz1c.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1693914239/Screenshot_2023-08-23_155343_imcxgb.png" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;
