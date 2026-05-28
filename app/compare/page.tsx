import React, { Suspense } from "react";
import NavbarDemo from "@/components/shared/Navbar";
import ComparisonTable from "@/components/compare/ComparisonTable";
import Loader from "@/components/shared/Loader";

export default function ComparePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black">
      <main className="container mx-auto px-6 py-12 max-w-7xl pt-32">
        <div className="mb-8">
          <a href="/" className="text-sm text-neutral-400 hover:text-white transition">
            ← Back to Search
          </a>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
            College Comparison
          </h2>
        </div>
        <Suspense fallback={<Loader />}>
          <ComparisonTable />
        </Suspense>
      </main>
    </div>
  );
}