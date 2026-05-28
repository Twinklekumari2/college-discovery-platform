import React from "react";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  image: string;
  placement: string;
}

interface CollegeCardProps {
  college: College;
  onCompareToggle: (id: string) => void;
  isComparing: boolean;
  onSaveToggle: (id: string) => void;
  isSaved: boolean;
}

export default function CollegeCard({ college, onCompareToggle, isComparing, onSaveToggle, isSaved }: CollegeCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition hover:border-neutral-700">
      <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
        <img
          src={college.image}
          alt={college.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => onSaveToggle(college.id)}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-neutral-800 backdrop-blur-sm transition hover:bg-black text-white"
        >
          {isSaved ? "❤️" : "🤍"}
        </button>
        <div className="absolute bottom-3 left-3 rounded-md bg-black/60 border border-neutral-800 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
          ★ {college.rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-neutral-200">
          {college.name}
        </h3>
        <p className="text-sm text-neutral-500 mt-1">{college.location}</p>

        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-b border-neutral-900 py-3 my-auto">
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Avg Placement</p>
            <p className="text-sm font-semibold text-white mt-0.5">{college.placement}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Annual Fees</p>
            <p className="text-sm font-semibold text-white mt-0.5">₹{(college.fees / 1000).toFixed(0)}K</p>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={`/college/${college.id}`}
            className="flex-1 rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View Details
          </a>
          <button
            onClick={() => onCompareToggle(college.id)}
            className={`rounded-xl px-4 py-2.5 text-sm font-medium border transition ${
              isComparing
                ? "bg-white text-black border-white"
                : "bg-transparent text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600"
            }`}
          >
            {isComparing ? "Comparing" : "Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}