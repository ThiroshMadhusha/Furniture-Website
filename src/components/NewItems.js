import React from "react";

// import data
import { newInStore } from "../data";

// import componennt
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section  relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hiddenn lg:flex items-center">
              <a
                className="hover:border-b border-primary lg:items-center font-medium transition-all"
                href="#link"
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          {/* New Items Slider */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
