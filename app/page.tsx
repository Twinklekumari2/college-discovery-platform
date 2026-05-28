import GridBackgroundDemo from "@/components/grid-background-demo";
import NavbarDemo from "@/components/shared/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import CollegeGrid from "@/components/college/CollegeGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <main className="container mx-auto px-6 py-12 max-w-7xl pt-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Discover Your Ideal College
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
              Filter and search across India's premium institutions and compare them side-by-side.
            </p>
          </div>
          <CollegeGrid />
        </main>
      </div>
    </div>
  );
}