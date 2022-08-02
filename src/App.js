import React from "react";

// import components
import Hero from "./components/Hero";
import Feactures from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonials from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Feactures />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
