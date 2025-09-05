import Hero from "../components/Hero";
import Application from "../components/LeadForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Hero />
      <Application />
    </div>
  );
}
