import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductDetails from "../components/ProductDetails";
import ProductShowcase from "../components/ProductShowcase";
import QuantityProgress from "../components/QuantityProgress";
import ReservationForm from "../components/ReservationForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Full-width Cinematic Hero Section */}
        <Hero />

        {/* Dynamic Image & Details Showcase */}
        <ProductShowcase />

        {/* Product Details & Cultural Heritage Grid */}
        <ProductDetails />

        {/* Trust, Progress Bar & Urgency Countdown Timer */}
        <QuantityProgress />

        {/* Ticket-Style Reservation Form Pass */}
        <ReservationForm />
      </main>

      {/* Floating Sticky Pulse WhatsApp FAB */}
      <WhatsAppButton />

      {/* Minimal Luxury Footer */}
      <Footer />
    </>
  );
}
