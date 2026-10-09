import Navbar from "./Navbar";
import Hero, { Middle, Closing } from "./Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Middle />
        <Closing />
      </main>
    </>
  );
}