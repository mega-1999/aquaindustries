import type { Metadata } from "next";
import "../globals.css";
import TopNavbar from "../components/top-navbar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopNavbarr from "../components/top-navbarr";
import BackgroundMusic from "../components/BackgroundMusic";

export const metadata: Metadata = {
  title: "Metalverse ",
  description: "Metalverse  Product Landing Page",
  icons: {
    icon: '/favicon.png', // ✅ Fix for 404: Now uses actual favicon
  },
};


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block">
        <BackgroundMusic />
        <TopNavbar />
      </div>
      <TopNavbarr />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
