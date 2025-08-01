import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block">
            <h1 className="heading">
              <span className="bolden-h1">Awesome</span> Company
            </h1>
            <div className="div-block-2">
              <h3 className="h3">
                Empowering businesses to achieve extraordinary results through
                innovative technology solutions and{" "}
                <span className="bolden-h3">exceptional </span>user experiences.
              </h3>
            </div>
          </div>
          <div
            id="w-node-_54fa2fc7-465b-6e5c-62fe-c42845714076-7d3bd18a"
            className="w-layout-hflex hero-stats-flex"
          >
            <div className="company-info">Founded 2021</div>
            <div className="company-info">San Francisco, CA</div>
            <div className="company-info">Enterprise Software</div>
            <div className="company-info">Series A</div>
          </div>
        </div>
      </section>
      <section className="special-event-section">
        <div className="w-layout-blockcontainer container event-container w-container">
          <div className="event-wrapper">
            <div className="event-text">
              <h2 className="h2 event-text">Join Our Special Event</h2>
              <p className="paragraphs">
                Join our special event to explore groundbreaking products, meet
                our expert speakers, and discover what makes Awesome Company a
                leader in enterprise software. Experience cutting-edge
                technology and connect with industry innovators.
              </p>
              <a href="#" className="button w-inline-block">
                <div className="button-text">Buy tickets</div>
                <Image
                  src="/button-icon.svg"
                  loading="lazy"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <div className="image-holder">
              <Image
                src="/conference-image-min.png"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 780px"
                srcSet="/conference-image-min-p-500.png 500w, /conference-image-min.png 780w"
                alt=""
                className="image"
                width={780}
                height={510}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="event-details-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-spacing">
            <h2 className="h2-heading">
              <span className="bolden-h2">Event</span> Details
            </h2>
            <div className="event-hero-sides">
              <h3 className="h3">
                Explore our <span className="bolden-h3">team</span>, innovative{" "}
                <span className="bolden-h3">products</span>, and key{" "}
                <span className="bolden-h3">metrics</span> that drive our
                success.
              </h3>
            </div>
          </div>
          <div className="button-blocks">
            <a href="#" className="tab-buttons w-button">
              Speakers Lineup
            </a>
            <a href="#" className="tab-buttons w-button">
              Our Products
            </a>
            <a href="#" className="tab-buttons w-button">
              Key Metrics
            </a>
          </div>
          <div className="event-details-speakers-grid">
            <div className="speaker-card">
              <div className="div-block-3">
                <div className="speaker-name">Taylor Chen</div>
                <div className="speaker-title">Marketing Director</div>
                <div className="speaker-desc">
                  Taylor Chen is a passionate business analyst with expertise in
                  Node.js, GraphQL, PostgreSQL. They have been instrumental in
                  driving innovation and growth at TechFlow Solutions, focusing
                  on scalable solutions and team collaboration.
                </div>
              </div>
              <a href="#" className="button w-inline-block">
                <div className="button-text">LinkedIn</div>
                <Image
                  src="/button-icon.svg"
                  loading="lazy"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <div className="speaker-card">
              <div className="div-block-3">
                <div className="speaker-name">Taylor Chen</div>
                <div className="speaker-title">Marketing Director</div>
                <div className="speaker-desc">
                  Taylor Chen is a passionate business analyst with expertise in
                  Node.js, GraphQL, PostgreSQL. They have been instrumental in
                  driving innovation and growth at TechFlow Solutions, focusing
                  on scalable solutions and team collaboration.
                </div>
              </div>
              <a href="#" className="button w-inline-block">
                <div className="button-text">LinkedIn</div>
                <Image
                  src="/button-icon.svg"
                  loading="lazy"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <div className="speaker-card">
              <div className="div-block-3">
                <div className="speaker-name">Taylor Chen</div>
                <div className="speaker-title">Marketing Director</div>
                <div className="speaker-desc">
                  Taylor Chen is a passionate business analyst with expertise in
                  Node.js, GraphQL, PostgreSQL. They have been instrumental in
                  driving innovation and growth at TechFlow Solutions, focusing
                  on scalable solutions and team collaboration.
                </div>
              </div>
              <a href="#" className="button w-inline-block">
                <div className="button-text">LinkedIn</div>
                <Image
                  src="/button-icon.svg"
                  loading="lazy"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <div className="speaker-card">
              <div className="div-block-3">
                <div className="speaker-name">Taylor Chen</div>
                <div className="speaker-title">Marketing Director</div>
                <div className="speaker-desc">
                  Jordan Miller is a passionate technical lead with expertise in
                  GraphQL, AWS, React. They have been instrumental in driving
                  innovation and growth at StreamlineHQ, focusing on scalable
                </div>
              </div>
              <a href="#" className="button w-inline-block">
                <div className="button-text">LinkedIn</div>
                <Image
                  src="/button-icon.svg"
                  loading="lazy"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="product-details-grid">
            <div className="product-card-name">
              <div className="div-block-6">
                <div className="product-name">NextSystem</div>
                <div className="product-desc">
                  NextSystem revolutionizes how businesses handle their daily
                  operations through intelligent automation and seamless
                  integration. Built for modern teams, it provides real-time
                  insights and streamlined workflows that boost productivity by
                  up to 40%.
                </div>
              </div>
            </div>
            <div className="product-card-pricing">
              <div className="product-card-pricing-holder">
                <div className="product-pricing">Pricing</div>
                <div className="w-layout-vflex flex-block">
                  <div className="product-desc-pricing-number">$415</div>
                  <div className="product-desc-pricing-month">/month</div>
                  <div className="product-desc-pricing-month-billed">
                    Billed annually, you can save 20%
                  </div>
                </div>
                <a href="#" className="button w-inline-block">
                  <div className="button-text">Learn more</div>
                  <Image
                    src="/button-icon.svg"
                    loading="lazy"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
            <div className="product-card-name">
              <div className="features-section">
                <div className="features-title">Features</div>
                <div className="w-layout-vflex bullet-point-holder">
                  <div className="w-layout-vflex bullet-container">
                    <Image
                      src="/Ellipse.svg"
                      loading="lazy"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="bullet-point">
                      Automated workflow management
                    </div>
                  </div>
                  <div className="w-layout-vflex bullet-container">
                    <Image
                      src="/Ellipse.svg"
                      loading="lazy"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="bullet-point">
                      Real-time collaboration tools
                    </div>
                  </div>
                  <div className="w-layout-vflex bullet-container">
                    <Image
                      src="/Ellipse.svg"
                      loading="lazy"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="bullet-point">
                      Advanced analytics dashboard
                    </div>
                  </div>
                  <div className="w-layout-vflex bullet-container">
                    <Image
                      src="/Ellipse.svg"
                      loading="lazy"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="bullet-point">
                      Real-time collaboration tools
                    </div>
                  </div>
                  <div className="w-layout-vflex bullet-container">
                    <Image
                      src="/Ellipse.svg"
                      loading="lazy"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="bullet-point">
                      Real-time collaboration tools
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Monthly Active Users</div>
                <div className="metric-number users-colour">17,063</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Total Employees</div>
                <div className="metric-number">532</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Monthly Active Users</div>
                <div className="metric-number">
                  <span className="bolden-h2">$</span>889,272
                </div>
              </div>
            </div>
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Annual Revenue</div>
                <div className="metric-number">
                  <span className="bolden-h2">$</span>6,619,814
                </div>
              </div>
            </div>
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Revenue Growth</div>
                <div className="metric-number">
                  53<span className="bolden-h2">%</span>
                </div>
              </div>
            </div>
            <div className="metric-card">
              <div className="div-block-7">
                <div className="metric-title">Customer Satisfaction</div>
                <div className="metric-number">
                  <span className="bolden-h2">4.8</span>/5
                </div>
              </div>
            </div>
          </div>
          <div className="funding-information">
            <div className="w-layout-vflex flex-block-2">
              <div className="metric-title">Monthly Active Users</div>
              <div className="funding-subheader">Total Raised so far</div>
              <div className="metric-number">
                <span className="bolden-h2">$32M</span>
              </div>
              <div className="funding-subheader">Last Round</div>
              <div className="metric-number">
                Series <span className="bolden-h2">B</span>
              </div>
              <div className="funding-subheader">11 Investors</div>
            </div>
          </div>
        </div>
      </section>
      <section className="testomonials-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-spacing">
            <h2 className="h2-heading">
              <span className="bolden-h2">Don’t</span> take our word for it.
            </h2>
            <div className="margin-testimonials-sides">
              <h3 className="h3">
                Hear from <span className="bolden-h3">industry leaders</span>{" "}
                who have transformed their businesses with{" "}
                <span className="bolden-h3">our solutions</span>.
              </h3>
            </div>
          </div>
          <div className="event-details-speakers-testomonials">
            <div className="testimonials-card">
              <div className="testomonial-holder">
                <div className="testomonial-quote">
                  “Outstanding customer support and a product that actually
                  delivers on its promises. We&#x27;ve seen seen measurable
                  improvements in our workflow efficiency.”
                </div>
              </div>
              <div className="testomonial-name-and-desc">
                <div className="testomonial-name">Taylor Chen</div>
                <div className="testomonial-job-title">Marketing Director</div>
              </div>
              <div className="testomonial-product-used-holder">
                <div className="testomonial-product-used">
                  using <span className="bolden-h3">NextBoost</span>
                </div>
              </div>
              <div className="testomonial-company-holder">
                <div className="testomonial-company">@StreamlineHQ</div>
                <div className="testomonial-company">201-1000 employees</div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testomonial-holder">
                <div className="testomonial-quote">
                  “Outstanding customer support and a product that actually
                  delivers on its promises. We&#x27;ve seen measurable
                  improvements in our workflow efficiency.”
                </div>
              </div>
              <div className="testomonial-name-and-desc">
                <div className="testomonial-name">Taylor Chen</div>
                <div className="testomonial-job-title">Marketing Director</div>
              </div>
              <div className="testomonial-product-used-holder">
                <div className="testomonial-product-used">
                  using <span className="bolden-h3">NextBoost</span>
                </div>
              </div>
              <div className="testomonial-company-holder">
                <div className="testomonial-company">@StreamlineHQ</div>
                <div className="testomonial-company">201-1000 employees</div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testomonial-holder">
                <div className="testomonial-quote">
                  “Outstanding customer support and a product that actually
                  delivers on its promises. We&#x27;ve seen measurable
                  improvements in our workflow efficiency.”
                </div>
              </div>
              <div className="testomonial-name-and-desc">
                <div className="testomonial-name">Taylor Chen</div>
                <div className="testomonial-job-title">Marketing Director</div>
              </div>
              <div className="testomonial-product-used-holder">
                <div className="testomonial-product-used">
                  using <span className="bolden-h3">NextBoost</span>
                </div>
              </div>
              <div className="testomonial-company-holder">
                <div className="testomonial-company">@StreamlineHQ</div>
                <div className="testomonial-company">201-1000 employees</div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testomonial-holder">
                <div className="testomonial-quote">
                  “The integration capabilities are fantastic. We were able to
                  connect all our existing tools seamlessly and create a unified
                  workspace.”
                </div>
              </div>
              <div className="testomonial-name-and-desc">
                <div className="testomonial-name">Taylor Chen</div>
                <div className="testomonial-job-title">Marketing Director</div>
              </div>
              <div className="testomonial-product-used-holder">
                <div className="testomonial-product-used">
                  using <span className="bolden-h3">NextBoost</span>
                </div>
              </div>
              <div className="testomonial-company-holder">
                <div className="testomonial-company">@StreamlineHQ</div>
                <div className="testomonial-company">201-1000 employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div className="news-block">
            <div className="news-margin">
              <div className="news-title">
                Awesome Company Raises $15M Series A
              </div>
              <div className="news-desc">
                Leading venture capital firms invest in our mission to
                revolutionize enterprise collaboration.
              </div>
              <div className="div-block-5">
                <div className="news-date">01/07/2025</div>
                <a href="#" className="news-button w-inline-block">
                  <div className="button-text">Get more information</div>
                  <Image
                    src="/button-icon.svg"
                    loading="lazy"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="news-block">
            <div className="news-margin">
              <div className="news-title">New AI-Powered Features Launch</div>
              <div className="news-desc">
                Enhanced automation capabilities now available to all enterprise
                customers.
              </div>
              <div className="div-block-5">
                <div className="news-date">03/06/2025</div>
                <a href="#" className="news-button w-inline-block">
                  <div className="button-text">Get more information</div>
                  <Image
                    src="/button-icon.svg"
                    loading="lazy"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="news-block">
            <div className="news-margin">
              <div className="news-title">
                Partnership with Major Cloud Provider
              </div>
              <div className="news-desc">
                Strategic alliance expands our global infrastructure and service
                capabilities.
              </div>
              <div className="div-block-5">
                <div className="news-date">01/04/2025</div>
                <a href="#" className="news-button w-inline-block">
                  <div className="button-text">Get more information</div>
                  <Image
                    src="/button-icon.svg"
                    loading="lazy"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div className="center-footer">
          <div className="footer-text">
            © 2025 <span className="bolden-h3">Awesome </span>Company. All
            rights reserved.
          </div>
          <div className="footer-text">
            Headquartered in San Francisco, CA | Founded in 2021
          </div>
        </div>
      </section>
    </>
  );
}
