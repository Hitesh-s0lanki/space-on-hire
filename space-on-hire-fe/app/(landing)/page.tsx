import Hero from "./_components/hero";
import Intro from "./_components/intro";
import Navbar from "./_components/navbar";

const HomePage = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <Navbar />

      <Hero />

      <Intro />

      {/* <SolutionCard /> */}
    </div>
  );
};

export default HomePage;