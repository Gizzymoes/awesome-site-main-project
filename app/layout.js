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

export const metadata = {
  title: "Awesome Startup | Special Event",
  description: "The Official website for Awesome Startup’s Special Event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${plus_Jakarta_Sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
