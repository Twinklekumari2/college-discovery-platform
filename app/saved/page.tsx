"use client";
import React, { useEffect, useState } from "react";
import NavbarDemo from "@/components/shared/Navbar";
import CollegeCard from "@/components/college/CollegeCard";
import EmptyState from "@/components/shared/EmptyState";
import Loader from "@/components/shared/Loader";

export default function SavedPage() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSavedColleges() {
      if (typeof window === "undefined") return;

      try {
        // 1. Fetch the master list of colleges
        const res = await fetch("/data/colleges.json");
        if (!res.ok) throw new Error("Failed to fetch colleges data");
        const allColleges = await res.json();

        // 2. Get saved IDs from localStorage
        const localData = localStorage.getItem("savedColleges");
        if (localData) {
          const parsedIds: string[] = JSON.parse(localData);
          setSavedIds(parsedIds);

          // 3. Filter the fetched master list by saved IDs
          const filtered = allColleges.filter((c: any) => parsedIds.includes(String(c.id)));
          setColleges(filtered);
        }
      } catch (error) {
        console.error("Error loading saved colleges:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSavedColleges();
  }, []);

  // The missing function handler
  const handleSaveToggle = (id: string) => {
    // 1. Update the local string array state
    const updatedIds = savedIds.includes(id)
      ? savedIds.filter((item) => item !== id)
      : [...savedIds, id];

    setSavedIds(updatedIds);

    // 2. Remove it immediately from the displayed grid UI
    setColleges((prevColleges) => prevColleges.filter((c: any) => String(c.id) !== id));

    // 3. Sync changes back to localStorage
    localStorage.setItem("savedColleges", JSON.stringify(updatedIds));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black">
      <main className="container mx-auto px-6 py-12 max-w-7xl pt-32">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
          Shortlisted Colleges
        </h2>

        {loading ? (
          <Loader />
        ) : colleges.length === 0 ? (
          <EmptyState message="You haven't shortlisted any colleges yet." />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.map((college: any) => (
              <CollegeCard
                key={college.id}
                college={college}
                onCompareToggle={() => {}}
                isComparing={false}
                onSaveToggle={() => handleSaveToggle(String(college.id))}
                isSaved={true}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}