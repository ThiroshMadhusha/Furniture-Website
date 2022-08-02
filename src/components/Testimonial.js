import React from "react";

// import components
import TestimonialsSlider from "./TestimonialSlider";

// import data
import { testimonial } from "../data";

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            {/* Title */}
            <h2 className="title mb-9">{title}</h2>

            {/* Slider */}
            <TestimonialsSlider />
          </div>

          {/* Image */}
          <di className="order-1">
            <img src={image.type} alt="" />
          </di>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
