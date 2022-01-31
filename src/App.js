import { render } from "react-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Explainer from "./Explainer";
import Testimonials from "./Testimonials";
import Cta from "./Cta";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="background background-div">
      <Navbar />
      <Header
        title="Bring everyone together to build better products."
        intro="Manage makes it simple for software teams to plan day-to-day tasks
      while keeping the larger team goals in view."
      />
      <main>
        <Explainer />
        <Testimonials />
      </main>
      <Cta />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
