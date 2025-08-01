import { Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  variable: "--font-plus_jakarta_sans",
  subsets: ["latin"],
});

//Fetching data from the API
export const getData = async function getData() {
  const url = process.env.API_URL;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // ISR – revalidate at most once per hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch company data");
  }

  return res.json();
};

//Creating dynamic metadata for the site
export async function generateMetadata() {
  const data = await getData();
  const company = data.Company ?? {};

  return {
    title: `${company.Name || "Awesome Company"} | Special Event`,
    description:
      company.Mission ??
      "Join our special event to explore groundbreaking products and meet our expert speakers.",
    openGraph: {
      title: `${company.Name || "Awesome Company"} | Special Event`,
      description:
        company.Mission ??
        "A special event to generate excitement around our latest products.",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${plus_Jakarta_Sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
