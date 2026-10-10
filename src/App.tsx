import Navbar from "./Navbar";
import Hero, { Middle, Timeline, Closing, SocialProof } from "./Home";
import { Speaking as SpeakingSection } from "./Speaking";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Middle />
        <Timeline />
        <SocialProof />
        <SpeakingSection />
        <Closing />
      </main>
    </>
  );
}