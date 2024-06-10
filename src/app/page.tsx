"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import PaymentModels from "@/components/Payment";
import TestimonialSlider from "@/components/Testimonial";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locoScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main className="pt-16 mx-4">
        <Home />
        <PaymentModels />
        <TestimonialSlider />
        <Footer />
      </main>
    </div>
  );
}
