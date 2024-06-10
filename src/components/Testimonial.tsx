import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Inc.",
    quote: "This product is amazing! It has changed the way we work.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    title: "CTO, Another Example Inc.",
    quote: "Incredible results! Highly recommend to anyone.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    title: "CTO, Another Example Inc.",
    quote: "Incredible results! Highly recommend to anyone.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    title: "CTO, Another Example Inc.",
    quote: "Incredible results! Highly recommend to anyone.",
    image: "https://via.placeholder.com/100",
  },
  // Add more testimonials as needed
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-3xl mx-auto py-10" id="testimonials">
      <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-300 shadow-lg rounded-lg p-6 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
