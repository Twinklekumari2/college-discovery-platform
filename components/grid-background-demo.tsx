import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo() {
  return (
    <div className="relative flex h-full min-h-screen w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[bg-size:40px_40px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black)"
        }}
      />
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}