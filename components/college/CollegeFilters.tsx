import React from "react";

interface FiltersProps {
  maxFees: number;
  setMaxFees: (val: number) => void;
  selectedCity: string;
  setSelectedCity: (val: string) => void;
}

export default function CollegeFilters({ maxFees, setMaxFees, selectedCity, setSelectedCity }: FiltersProps) {
  const cities = [
  "All",
  "Bhagalpur",
  "Chennai",
  "Delhi",
  "Kanpur",
  "Kharagpur",
  "Kolkata",
  "Mangaluru",
  "Manipal",
  "Mumbai",
  "Patiala",
  "Pilani",
  "Prayagraj",
  "Pune",
  "Roorkee",
  "Tiruchirappalli",
  "Vellore"
];

  return (
    <div className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 backdrop-blur-md md:w-64 shrink-0">
      <h3 className="mb-6 text-lg font-bold text-white">Filters</h3>
      
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-neutral-400">City / Location</label>
        <div className="space-y-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                (city === "All" && selectedCity === "") || selectedCity === city
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-400">
          Max Annual Fees: <span className="text-white font-semibold">₹{maxFees.toLocaleString('en-IN')}</span>
        </label>
        <input
          type="range"
          min="100000"
          max="500000"
          step="200000"
          value={maxFees}
          onChange={(e) => setMaxFees(Number(e.target.value))}
          className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-neutral-500 mt-2">
          <span>1L</span>
          <span>3L</span>
          <span>5L</span>
        </div>
      </div>
    </div>
  );
}