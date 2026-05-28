"use client";
import React from "react";
import Link from "next/link";
import { GraduationCap, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Selected top cities from your dataset
  const topCities = ["Chennai", "Delhi", "Mumbai", "Pilani", "Pune", "Vellore"];

  return (
    <footer className="w-full bg-black border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <GraduationCap className="h-6 w-6 text-indigo-500" />
              <span>Discover College</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Find, compare, and shortlist the top engineering institutes in India. Your next big step starts here.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home / Search
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Colleges
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-white transition-colors">
                  Shortlisted List
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Hubs Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Top Hubs
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {topCities.map((city) => (
                <li key={city}>
                  <Link 
                    href={`/?city=${city}`} 
                    className="hover:text-white transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <a 
              href="mailto:support@discovercollege.com" 
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>support@discovercollege.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <div>
            &copy; {currentYear} Discover College. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}