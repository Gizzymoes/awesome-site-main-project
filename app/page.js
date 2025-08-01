// app/page.js
import EventTabs from "../components/EventTabs";
import HeroSection from "../components/HeroSection";
import SpecialEventSection from "../components/SpecialEventSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import { getData } from "./layout";

export default async function Home() {
  const data = await getData();
  const company = data.Company || {};
  const employees = data.Employees || [];
  const products = data.Products || [];
  const metrics = company.Metrics || {};
  const testimonials = data.Testimonials || [];
  const recentNews = data.RecentNews || [];

  return (
    <>
      <HeroSection company={company} />
      <SpecialEventSection />
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
          <EventTabs
            employees={employees}
            products={products}
            metrics={metrics}
          />
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} />
      <NewsSection recentNews={recentNews} />
      <Footer />
    </>
  );
}
