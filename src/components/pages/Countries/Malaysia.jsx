import React from "react";
import CountryPage from "../CountryPage/CountryPage";
import coverImg from "../../../assets/malaysia.jpg";
import may1 from "../../../assets/university logo/may1.png";
import may2 from "../../../assets/university logo/may2.png";
import may3 from "../../../assets/university logo/may-3.png";
import may4 from "../../../assets/university logo/may4.png";

const malaysiaUniversities = [may1, may2, may3, may4];

const Malaysia = () => (
  <CountryPage
    coverImage={coverImg}
    title="Top Malaysian Universities for International Students"
    subtitle="Find quality education and vibrant campus life at Malaysia’s leading universities."
    universities={malaysiaUniversities}
  />
);

export default Malaysia;
