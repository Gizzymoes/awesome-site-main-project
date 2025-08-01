// components/EventTabs.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionButton from "./MotionButton";
import CountUp from "./CountUp";

const tabs = [
  { id: "speakers", label: "Speakers Lineup" },
  { id: "products", label: "Our Products" },
  { id: "metrics", label: "Key Metrics" },
];

const variants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    y: -20,
    opacity: 0,
  },
};

export default function EventTabs({ employees, products, metrics }) {
  const [activeTab, setActiveTab] = useState("speakers");

  return (
    <>
      <div className="button-blocks">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="tab-buttons"
              animate={{
                backgroundColor: isActive ? "#FF575A" : "#000",
                color: isActive ? "#fff" : "#fff",
              }}
              whileHover={{
                backgroundColor: isActive ? "#FF575A" : "#fff",
                color: isActive ? "#fff" : "#000",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {activeTab === "speakers" && (
            <div className="event-details-speakers-grid">
              {employees.map((employee) => (
                <div key={employee.EmployeeID} className="speaker-card">
                  <div className="div-block-3">
                    <div className="speaker-name">
                      {employee.FirstName} {employee.LastName}
                    </div>
                    <div className="speaker-title">{employee.Title}</div>
                    <div className="speaker-desc">{employee.Biography}</div>
                  </div>
                  {employee.LinkedIn && (
                    <MotionButton href={employee.LinkedIn}>
                      LinkedIn
                    </MotionButton>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeTab === "products" && (
            <div className="product-grid-container">
              {products.map((product) => (
                <div key={product.ProductID} className="product-details-grid">
                  <div className="product-card-name">
                    <div className="div-block-6">
                      <div className="product-name">{product.Name}</div>
                      <div className="product-desc">{product.Description}</div>
                    </div>
                  </div>
                  <div className="product-card-pricing">
                    <div className="product-card-pricing-holder">
                      <div className="product-pricing">Pricing</div>
                      <div className="w-layout-vflex flex-block">
                        <div className="product-desc-pricing-number">
                          ${product.MonthlyPrice}
                        </div>
                        <div className="product-desc-pricing-month">/month</div>
                        <div className="product-desc-pricing-month-billed">
                          Billed annually, you can save 20%
                        </div>
                      </div>
                      <MotionButton href="#">Learn more</MotionButton>
                    </div>
                  </div>
                  <div className="product-card-name">
                    <div className="features-section">
                      <div className="features-title">Features</div>
                      <div className="w-layout-vflex bullet-point-holder">
                        {product.Features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="w-layout-vflex bullet-container"
                          >
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="5" cy="5" r="5" fill="black" />
                            </svg>
                            <div className="bullet-point">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "metrics" && (
            <>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Monthly Active Users</div>
                    <div className="metric-number users-colour">
                      <CountUp
                        to={metrics.MonthlyActiveUsers || 0}
                        duration={3}
                        separator=","
                      />
                    </div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Total Employees</div>
                    <div className="metric-number">
                      <CountUp
                        to={metrics.TotalEmployees || 0}
                        duration={3}
                        separator=","
                      />
                    </div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Monthly Revenue</div>
                    <div className="metric-number">
                      <span className="bolden-h2">$</span>
                      <CountUp
                        to={metrics.Revenue?.Monthly || 0}
                        duration={3}
                        separator=","
                      />
                    </div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Annual Revenue</div>
                    <div className="metric-number">
                      <span className="bolden-h2">$</span>
                      <CountUp
                        to={metrics.Revenue?.Annual || 0}
                        duration={3}
                        separator=","
                      />
                    </div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Revenue Growth</div>
                    <div className="metric-number">
                      <CountUp to={metrics.Revenue?.Growth || 0} duration={3} />
                      <span className="bolden-h2">%</span>
                    </div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="div-block-7">
                    <div className="metric-title">Customer Satisfaction</div>
                    <div className="metric-number">
                      <span className="bolden-h2">
                        <CountUp
                          to={metrics.CustomerSatisfaction || 0}
                          duration={3}
                        />
                      </span>
                      /5
                    </div>
                  </div>
                </div>
              </div>
              <div className="funding-information">
                <div className="w-layout-vflex flex-block-2">
                  <div className="metric-title">Funding Information</div>
                  <div className="funding-subheader">Total Raised so far</div>
                  <div className="metric-number">
                    <span className="bolden-h2">
                      $
                      <CountUp
                        to={Number(
                          String(metrics.Funding?.TotalRaised || "0").replace(
                            /[^0-9.]/g,
                            ""
                          )
                        )}
                        duration={3}
                        separator=","
                      />
                      M
                    </span>
                  </div>
                  <div className="funding-subheader">Last Round</div>
                  <div className="metric-number">
                    {metrics.Funding?.LastRound || "Series A"}
                  </div>
                  <div className="funding-subheader">
                    {metrics.Funding?.Investors || "0"} Investors
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
