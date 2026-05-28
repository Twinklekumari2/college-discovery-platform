"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loader from "../shared/Loader";
import EmptyState from "../shared/EmptyState";

export default function ComparisonTable() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];
  
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/colleges.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((c: any) => ids.includes(c.id));
        setColleges(filtered);
        setLoading(false);
      });
  }, [searchParams]);

  if (loading) return <Loader />;
  if (colleges.length === 0) return <EmptyState message="No colleges selected for comparison." />;

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950">
      <table className="w-full border-collapse text-left text-sm text-white">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900/50">
            <th className="p-5 font-semibold text-neutral-400 w-1/4">Features</th>
            {colleges.map((college: any) => (
              <th key={college.id} className="p-5 font-bold text-lg text-white w-1/4">
                {college.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-900">
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Location</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5">{college.location}</td>
            ))}
          </tr>
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Annual Fees</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5 font-semibold text-white">₹{college.fees.toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Rating</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5 text-amber-400 font-semibold">★ {college.rating}</td>
            ))}
          </tr>
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Avg Placement</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5 text-emerald-400 font-semibold">{college.placement}</td>
            ))}
          </tr>
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Highest Package</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5 text-white">{college.highestPackage}</td>
            ))}
          </tr>
          <tr>
            <td className="p-5 font-medium text-neutral-400 bg-neutral-900/10">Key Courses</td>
            {colleges.map((college: any) => (
              <td key={college.id} className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {college.courses.map((course: string) => (
                    <span key={course} className="rounded bg-neutral-900 px-2 py-0.5 text-xs text-neutral-300 border border-neutral-800">
                      {course}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}