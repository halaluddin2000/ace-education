import "./About.css";
import aboutImg from "../../../assets/about-1.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Why should you choose Pro Info & Edu Consultant?</h2>
        <p>
          Pro Info & Edu Consultant is where we generate solutions we are most
          proud of. Here is why you should choose us:
        </p>
        <li>
          Expertise and Experience: 16+ years of reliable, insightful and
          award-winning expertise. .
        </li>
        <li>
          Personalized Approach: Tailored services to meet your unique academic
          and career goals.
        </li>
        <li>
          Comprehensive Services: From university selection to post-departure
          support, we've got you covered.
        </li>
        <li>
          Proven Success: Numerous success stories and positive testimonials.
        </li>
        <li>
          Global Network: Partnerships with reputable institutions worldwide.
        </li>
        <li>
          Uninterrupted Support: Continuous assistance throughout your
          educational journey.
        </li>
      </div>
      <div className="about-left">
        <img className="about-img" src={aboutImg} alt="" />
        <div className="experiences">
          <h2>
            <span>16</span>+ <br /> YEARS OF EXPERIENCES
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
