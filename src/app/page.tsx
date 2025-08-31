import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Hero />
      <Footer />
    </div>
  );
}
