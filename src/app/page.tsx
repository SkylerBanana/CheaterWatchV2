import Nav from "./components/ui/Nav";
import Hero from "./components/ui/Hero";
export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center">
        <Hero />
      </div>
    </>
  );
}
