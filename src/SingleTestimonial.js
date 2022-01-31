const SingleTestimonial = (props) => {
  return (
    <div className="testimonials__singletestimonial" key={props.key}>
      <img src={props.authorImage} alt={props.author} />
      <h4>{props.author}</h4>
      <p>“{props.quote}”</p>
    </div>
  );
};

export default SingleTestimonial;
