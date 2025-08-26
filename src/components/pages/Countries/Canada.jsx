import React from "react";
import CountryPage from "../CountryPage/CountryPage";
import coverImg from "../../../assets/canada.jpg";
import ca1 from "../../../assets/university logo/ca1.png";
import ca2 from "../../../assets/university logo/ca2.png";
import ca3 from "../../../assets/university logo/ca3.png";
import ca4 from "../../../assets/university logo/ca4.png";
import ca5 from "../../../assets/university logo/ca5.png";

const canadaUniversities = [ca1, ca2, ca3, ca4, ca5];

const Canada = () => (
  <CountryPage
    coverImage={coverImg}
    title="Explore Canada’s Top Universities"
    subtitle="Unlock your potential with world-class Canadian institutions that lead in research and innovation."
    universities={canadaUniversities}
  />
);

export default Canada;
