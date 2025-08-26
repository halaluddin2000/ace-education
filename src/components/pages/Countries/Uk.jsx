import React from "react";
import CountryPage from "../CountryPage/CountryPage";
import coverImg from "../../../assets/uk.jpg";
import uk1 from "../../../assets/university logo/uk1.png";
import uk2 from "../../../assets/university logo/uk2.png";
import uk3 from "../../../assets/university logo/uk3.png";
import uk4 from "../../../assets/university logo/uk4.png";

const ukUniversities = [uk1, uk2, uk3, uk4];

const UK = () => (
  <CountryPage
    coverImage={coverImg}
    title="Study at Renowned UK Universities"
    subtitle="Experience academic excellence and rich traditions at the UK’s top institutions."
    universities={ukUniversities}
  />
);

export default UK;
