import React from "react";
import CountryPage from "../CountryPage/CountryPage";
import coverImg from "../../../assets/usa-Img.jpg";
import usa1 from "../../../assets/university logo/us1.png";
import usa2 from "../../../assets/university logo/us2.png";
import usa3 from "../../../assets/university logo/us3.png";
import usa4 from "../../../assets/university logo/us4.png";

const usaUniversities = [usa1, usa2, usa3, usa4];

const USA = () => (
  <CountryPage
    coverImage={coverImg}
    title="Leading Universities in the USA"
    subtitle="Study at prestigious American universities and shape a bright future with limitless opportunities."
    universities={usaUniversities}
  />
);

export default USA;
