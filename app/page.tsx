import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import {
  PaymentSection,
  SocialProof,
  Credibility,
  HowItWorks,
  Urgency,
} from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="w-full bg-[#0f172a] text-slate-200">
      <Navbar />
      <Hero />
      <Destinations />
      <PaymentSection />
      <SocialProof />
      <Credibility />
      <HowItWorks />
      <Urgency />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
