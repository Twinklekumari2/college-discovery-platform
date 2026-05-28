import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search colleges by name or location..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-4 text-white placeholder-neutral-500 outline-none transition focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600"
      />
    </div>
  );
}