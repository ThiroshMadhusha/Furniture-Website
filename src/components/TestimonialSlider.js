import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

// import data
import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={true}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center gap-x-5 mb-9">
                {/* Avatar */}
                <img src={avatar.type} alt="" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              {/* Texts */}
              <div className="text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
