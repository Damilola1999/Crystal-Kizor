import Navbar from "./Navbar";
import Hero, { Middle, Closing, SocialProof } from "./Home";
import { Speaking as SpeakingSection } from "./Speaking";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Middle />
        <SocialProof />
        <SpeakingSection />
        <Closing />
      </main>
    </>
  );
}