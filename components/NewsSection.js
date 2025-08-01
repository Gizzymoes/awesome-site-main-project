// components/NewsSection.js
import React from "react";
import MotionButton from "./MotionButton";

export default function NewsSection({ recentNews }) {
  return (
    <section className="news-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-spacing">
          <h2 className="h2-heading">
            <span className="bolden-h1">Recent</span> News
          </h2>
          <div className="margin-news-sides">
            <h3 className="h3">
              Stay updated with our{" "}
              <span className="bolden-h3">latest announcements</span> and{" "}
              <span className="bolden-h3">company milestones</span>.
            </h3>
          </div>
        </div>
        <div className="news-container">
          {recentNews.map((news, index) => (
            <div key={index} className="news-block">
              <div className="news-margin">
                <div className="news-title">{news.Title}</div>
                <div className="news-desc">{news.Summary}</div>
                <div className="div-block-5">
                  <div className="news-date">
                    {new Date(news.Date).toLocaleDateString("en-GB")}
                  </div>
                  <MotionButton href="#" className="news-button">
                    Get more information
                  </MotionButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
