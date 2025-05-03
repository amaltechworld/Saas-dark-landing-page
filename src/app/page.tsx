
import { Banner } from "./components/Banner/Banner";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { FAQs } from "./components/FAQs/FAQs";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { LogoTicker } from "./components/LogoTicker/LogoTicker";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";


export default function Home() {
  return (
      <>
          
          <Banner />
          <Navbar />
          <Hero />
          <LogoTicker />
          <Features />
          <ProductShowcase />
          <FAQs />
          <CallToAction />
          <Footer />
      </>
  );
}
