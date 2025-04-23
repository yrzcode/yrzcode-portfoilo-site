import { Spotlight } from "@/components/ui";

export const Spotlights = () => {
  return (
    <>
      <Spotlight
        className="-top-10 -left-10 md:-left-32 md:-top-40 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="purple" />
      <Spotlight className="top-58 left-80 h-[80vh] w-[50vh]" fill="blue" />
      <Spotlight className="top-108 left-160 h-[80vh] w-[50vh]" fill="blue" />
    </>
  );
};
