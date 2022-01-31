const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What they’ve said</h2>
      <div className="testimonials__content">
        <div id="testimonials__slider">
          <div className="testimonials__singletestimonial">
            <img src="img/avatar-anisha.png" alt="Anisha Li" />
            <h4>Anisha Li</h4>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <div className="testimonials__singletestimonial">
            <img src="img/avatar-ali.png" alt="Ali Bravo" />
            <h4>Ali Bravo</h4>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <div className="testimonials__singletestimonial">
            <img src="img/avatar-richard.png" alt="Richard Watts" />
            <h4>Richard Watts</h4>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>

          <div className="testimonials__singletestimonial">
            <img src="img/avatar-shanai.png" alt="Shanai Gough" />
            <h4>Shanai Gough</h4>
            <p>
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </div>
      </div>
      <button className="main__button main__button-shadow">Get Started</button>
    </div>
  );
};

export default Testimonials;
