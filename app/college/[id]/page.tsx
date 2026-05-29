"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavbarDemo from "@/components/shared/Navbar";
import Loader from "@/components/shared/Loader";
import EmptyState from "@/components/shared/EmptyState";
import { colleges } from "@/lib/mock-data/college";

export default function CollegeDetailPage() {
  const params = useParams();
  const id = params?.id;
  
  const [college, setCollege] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = colleges.find((c: any) => c.id === id);
      setCollege(found || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loader />;
  if (!college) return <EmptyState message="College not found." />;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-white">
      <main className="container mx-auto max-w-5xl px-6 py-12 pt-32">
        <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 sm:h-96">
          <img
            src={college.image}
            alt={college.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="rounded-md bg-white/20 border border-white/10 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
              ★ {college.rating}
            </span>
            <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
              {college.name}
            </h1>
            <p className="mt-1 text-sm text-neutral-300">{college.location}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <h2 className="text-xl font-bold border-b border-neutral-900 pb-3">Overview</h2>
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                Welcome to {college.name}. This premium institution located in {college.location} offers comprehensive development across technical and corporate domains.
              </p>
            </section>

            <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <h2 className="text-xl font-bold border-b border-neutral-900 pb-3">Available Courses</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {college.courses.map((course: string) => (
                  <span
                    key={course}
                    className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <h2 className="text-xl font-bold border-b border-neutral-900 pb-3">Quick Facts</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Annual Tuition Fees</p>
                  <p className="text-base font-bold text-white mt-0.5">₹{college.fees.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Average Placement Package</p>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">{college.placement}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Highest Placement Offered</p>
                  <p className="text-base font-bold text-white mt-0.5">{college.highestPackage}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}