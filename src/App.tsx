import Dither from "./components/Dither";
import FuzzyText from "./components/FuzzyText";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <main className="w-screen h-screen relative">
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <FuzzyText
          enableHover={!prefersReducedMotion}
          baseIntensity={prefersReducedMotion ? 0 : 0.3}
          hoverIntensity={0.6}
        >
          givensuman
        </FuzzyText>
        <div className="flex flex-row space-x-4 py-4">
          <FuzzyText
            className="cursor-pointer"
            enableHover={!prefersReducedMotion}
            baseIntensity={prefersReducedMotion ? 0 : 0.2}
            hoverIntensity={0.4}
            fontSize={25}
          >
            github
          </FuzzyText>
          <FuzzyText
            className="cursor-pointer"
            enableHover={!prefersReducedMotion}
            baseIntensity={prefersReducedMotion ? 0 : 0.2}
            hoverIntensity={0.4}
            fontSize={25}
          >
            blog
          </FuzzyText>
        </div>
      </div>

      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={prefersReducedMotion}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </main>
  );
}

export default App;
