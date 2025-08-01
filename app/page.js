// app/page.js
import EventTabs from "../components/EventTabs";
import HeroSection from "../components/HeroSection";
import SpecialEventSection from "../components/SpecialEventSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";

async function getData() {
  const res = await fetch(process.env.API_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata() {
  const data = await getData();
  const company = data.Company || {};

  return {
    title: `${company.Name || "Awesome Company"} | Special Event`,
    description:
      company.Mission ||
      "Join our special event to explore groundbreaking products and meet our expert speakers.",
    openGraph: {
      title: `${company.Name || "Awesome Company"} | Special Event`,
      description:
        company.Mission ||
        "A special event to generate excitement around our latest products.",
    },
  };
}

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
