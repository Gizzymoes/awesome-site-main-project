// components/HeroSection.js
import React from "react";

export default function HeroSection({ company }) {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="div-block">
          <h1 className="heading">
            <span className="bolden-h1">
              {company.Name?.split(" ")[0] || "Awesome"}
            </span>{" "}
            {company.Name?.split(" ")[1] || "Company"}
          </h1>
          <div className="div-block-2">
            <h3 className="h3">
              {company.Mission ||
                "Empowering businesses to achieve extraordinary results through innovative technology solutions and exceptional user experiences."}
            </h3>
          </div>
        </div>
        <div
          id="company-info-holder"
          className="w-layout-hflex hero-stats-flex"
        >
          <div className="company-info">
            Founded {company.Founded || "2021"}
          </div>
          <div className="company-info">
            {company.Headquarters || "San Francisco, CA"}
          </div>
          <div className="company-info">
            {company.Industry || "Enterprise Software"}
          </div>
          <div className="company-info">{company.Stage || "Series A"}</div>
        </div>
      </div>
    </section>
  );
}
