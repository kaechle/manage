import SingleTestimonial from "./SingleTestimonial";
import testimonialsData from "./data/testimonialsData";

// TODO: Get the avatar images working correctly

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What they’ve said</h2>
      <div className="testimonials__content">
        <div id="testimonials__slider">
          {testimonialsData.map((data, id) => {
            return (
              <SingleTestimonial
                key={id}
                author={data.author}
                authorImage={data.authorImage}
                quote={data.quote}
              />
            );
          })}
        </div>
      </div>
      <button className="main__button main__button-shadow">Get Started</button>
    </div>
  );
};

export default Testimonials;
