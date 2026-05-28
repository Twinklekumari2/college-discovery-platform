"use client";
import React, { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";
import CollegeFilters from "./CollegeFilters";
import SearchBar from "./SearchBar";
import Loader from "../shared/Loader";
import EmptyState from "../shared/EmptyState";
import { colleges as mockColleges } from "@/lib/mock-data/college";

export default function CollegeGrid() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [maxFees, setMaxFees] = useState(500000);
  const [selectedCity, setSelectedCity] = useState("");
  
  const [compareList, setCompareList] = useState<string[]>([]);
  const [savedList, setSavedList] = useState<string[]>([]);

  useEffect(() => {
    setColleges(mockColleges);
    setLoading(false);

    if (typeof window !== "undefined") {
      const saved = JSON.parse(localStorage.getItem("savedColleges") || "[]");
      setSavedList(saved);
    }
  }, []);

  const handleCompareToggle = (id: string) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const handleSaveToggle = (id: string) => {
    const updated = savedList.includes(id) ? savedList.filter((item) => item !== id) : [...savedList, id];
    setSavedList(updated);
    localStorage.setItem("savedColleges", JSON.stringify(updated));
  };

  const filteredColleges = colleges.filter((college: any) => {
    const matchesSearch = college.name.toLowerCase().includes(search.toLowerCase()) || college.location.toLowerCase().includes(search.toLowerCase());
    const matchesFees = college.fees <= maxFees;
    const matchesCity = selectedCity === "All" || selectedCity === "" ? true : college.location.toLowerCase() === selectedCity.toLowerCase();
    return matchesSearch && matchesFees && matchesCity;
  });

  return (
    <div className="w-full space-y-6">
      <SearchBar value={search} onChange={setSearch} />

      <div className="flex flex-col gap-6 md:flex-row">
        <CollegeFilters
          maxFees={maxFees}
          setMaxFees={setMaxFees}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <div className="flex-1">
          {loading ? (
            <Loader />
          ) : filteredColleges.length === 0 ? (
            <EmptyState message="No colleges match your search criteria." />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredColleges.map((college: any) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  onCompareToggle={handleCompareToggle}
                  isComparing={compareList.includes(college.id)}
                  onSaveToggle={handleSaveToggle}
                  isSaved={savedList.includes(college.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-2xl border border-neutral-800 bg-neutral-950/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-medium text-white">
            {compareList.length} {compareList.length === 1 ? "college" : "colleges"} selected
          </p>
          <div className="flex gap-3">
            <button onClick={() => setCompareList([])} className="text-xs text-neutral-400 hover:text-white">
              Clear
            </button>
            <a
              href={`/compare?ids=${compareList.join(",")}`}
              className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-neutral-200"
            >
              Compare Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}