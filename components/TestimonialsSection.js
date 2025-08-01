// components/TestimonialsSection.js
import React from "react";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="testomonials-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-spacing">
          <h2 className="h2-heading">
            <span className="bolden-h2">Don’t</span> take our word for it.
          </h2>
          <div className="margin-testimonials-sides">
            <h3 className="h3">
              Hear from <span className="bolden-h3">industry leaders</span> who
              have transformed their businesses with{" "}
              <span className="bolden-h3">our solutions</span>.
            </h3>
          </div>
        </div>
        <div className="event-details-speakers-testomonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.TestimonialID} className="testimonials-card">
              <div className="testomonial-holder">
                <div className="testomonial-quote">“{testimonial.Content}”</div>
              </div>
              <div className="testomonial-name-and-desc">
                <div className="testomonial-name">
                  {testimonial.Customer.Name}
                </div>
                <div className="testomonial-job-title">
                  {testimonial.Customer.Title}
                </div>
              </div>
              <div className="testomonial-product-used-holder">
                <div className="testomonial-product-used">
                  using{" "}
                  <span className="bolden-h3">{testimonial.ProductUsed}</span>
                </div>
              </div>
              <div className="testomonial-company-holder">
                <div className="testomonial-company">
                  @{testimonial.Customer.Company}
                </div>
                <div className="testomonial-company">
                  {testimonial.Customer.CompanySize} employees
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
