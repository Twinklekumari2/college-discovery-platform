import React from "react";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/50 p-8 text-center">
      <p className="text-xl font-medium text-neutral-400">{message}</p>
    </div>
  );
}