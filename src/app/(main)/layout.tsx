import TopNavbar from "../components/top-navbar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopNavbarr from "../components/top-navbarr";
import BackgroundMusic from "../components/BackgroundMusic";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

 

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
              <FixedQuoteBtn />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
