import Hero from "@/components/Hero";
import LogoPartners from "@/components/LogoPartners";
import CoursesGrid from "@/components/CoursesGrid";
import CategoryIcons from "@/components/CategoryIcons";
import CreatorShowcase from "@/components/CreatorShowcase";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-white">
      <Hero />
      <LogoPartners />
      <CoursesGrid />
      <CategoryIcons />
      <CreatorShowcase />
      <CTASection />
      <Testimonials />
      <Footer />
    </main>
  );
}
