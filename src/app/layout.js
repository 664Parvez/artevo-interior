import Script from "next/script"
import "bootstrap/dist/css/bootstrap.min.css"
import localFont from "next/font/local";
import "./globals.css";

const staraSans = localFont({
  src: "./fonts/Stara-SemiBold.woff",
  variable: "--font-stara-sans",
  weight: "100 900",
});
const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export const metadata = {
  title: "Home | Artevo Interior",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${staraSans.variable} ${poppins.variable}`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>

        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
    </html>
  );
}