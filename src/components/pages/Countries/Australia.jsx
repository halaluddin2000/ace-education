import React from "react";
import CountryPage from "../CountryPage/CountryPage";
import coverImg from "../../../assets/australia_1.jpg";
import as1 from "../../../assets/university logo/a1.png";
import as2 from "../../../assets/university logo/a2.png";
import as3 from "../../../assets/university logo/a3.png";
import as4 from "../../../assets/university logo/a4.png";

const australiaUniversities = [as1, as2, as3, as4];

const Australia = () => (
  <CountryPage
    coverImage={coverImg}
    title="Australia’s Premier Universities"
    subtitle="Discover innovative programs and global learning experiences in Australia’s finest universities."
    universities={australiaUniversities}
  />
);

export default Australia;
