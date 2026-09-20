import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Footer from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <HeroSection />
      <Work />
      {/* <Experience />
      <Skills />
      <Services />
      <Footer /> */}
    </div>
  );
}
