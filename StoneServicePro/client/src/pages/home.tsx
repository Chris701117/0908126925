// 檔案路徑: src/pages/home.tsx (或類似)

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import SpecialOfferSection from "@/components/special-offer-section";
// import ContactSection from "@/components/contact-section"; // <-- 1. 移除這一行，因為不再使用舊的區塊
import Footer from "@/components/footer";
import ContactForm from "@/components/ContactForm"; // <-- 我們要用的是這個
import FixedContactButtons from "@/components/fixed-contact-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-industrial-blue">
      <Navigation />
      <FixedContactButtons />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <SpecialOfferSection />
      {/* 2. 在這裡使用我們新建的聯絡表單來取代舊的 ContactSection */}
      <ContactForm />
      <Footer />
    </div>
  );
}
