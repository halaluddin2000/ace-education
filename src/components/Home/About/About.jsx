import "./About.css";
import aboutImg from "../../../assets/about-1.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Discover the Ace Education Difference</h2>
        <p>
          At Ace Education, we go beyond traditional consultancy—we provide
          strategic guidance that transforms academic aspirations into global
          opportunities. Our focus is on delivering solutions with integrity,
          precision, and long-term value for every student.
        </p>
        <li>
          Proven Expertise – With over 9 years of professional experience, our
          award-winning team brings in-depth knowledge and reliable insights.
        </li>
        <li>
          Tailored Guidance – We design personalized strategies that align with
          each student’s academic goals and career ambitions.
        </li>
        <li>
          Comprehensive Support – From university selection and application
          processing to pre-departure and post-arrival assistance, we offer
          complete end-to-end solutions.
        </li>
        <li>
          Recognized Success – Our students’ achievements and positive
          testimonials reflect our commitment to excellence.
        </li>
        <li>
          Global Network – Strong collaborations with leading institutions
          worldwide ensure access to top-tier opportunities.
        </li>
        <li>
          Uninterrupted Assistance – Our role does not end with admission; we
          continue to provide guidance throughout your educational journey.
        </li>
      </div>
      <div className="about-left">
        <img className="about-img" src={aboutImg} alt="" />
        <div div className="experiences">
          <h2>
            <span>9</span>+ <br /> YEARS OF EXPERIENCES
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
