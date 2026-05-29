# Discover College — College Discovery & Comparison Platform

A modern, responsive full-stack web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This platform allows students to browse engineering colleges across India, filter them dynamically by city, shortlist their favorites, and compare premium institutes side-by-side.

---

## 🚀 Features

- **Dynamic College Grid:** Browse a comprehensive dataset of top-tier Indian institutes (IITs, NITs, IIITs, and premium private universities).
- **Advanced Filtering:** Instant, real-time client-side filtering by city location using optimized array transformations.
- **Shortlist System (Persistent):** Save and remove colleges from a personal shortlist interface, synchronized seamlessly with the browser's `localStorage` so choices persist across page reloads.
- **Dynamic Comparisons:** Select multiple colleges to contrast fees, placement statistics, and course offerings side-by-side.
- **Fluid UI Components:** Framer Motion animated navigation hover states, crisp dark-themed layout, unified number locale formats, loading skeletons, and empty state fallbacks.

---

## 🛠️ Tech Stack & Concepts Used

- **Framework:** Next.js 14+ (App Router utilizing File-System Routing)
- **Language:** TypeScript (Type-safe states, interfaces, and generic definitions)
- **Styling:** Tailwind CSS (Responsive grid systems, fluid layouts, utility-first design)
- **Animations:** Framer Motion (Layout tracking, animated navigation hover bubbles)
- **State Management:** React Hooks (`useState`, `useEffect` lifecycle synchronization)
- **Data Hydration:** Client-side state hydration matching server-rendered Node locales (`en-US` / `en-IN`)

---

## 📁 Project Structure

```text
my-app/
├── app/
│   ├── college/         # Dynamic individual college route details
│   ├── compare/         # Comparison dashboard route
│   │   └── page.tsx
│   ├── saved/           # Shortlisted colleges layout route
│   │   └── page.tsx
│   ├── layout.tsx       # Root layout containing Navbar and Footer
│   └── page.tsx         # Main discovery home page (Search & Filter Grid)
├── components/
│   ├── college/         # Feature components (CollegeCard, CollegeFilters)
│   ├── shared/          # Shared layout components (Navbar, Footer, Loader, EmptyState)
│   └── ui/              # Base UI structural elements (resizable-navbar layouts)
└── public/
    └── data/
        └── colleges.json  # Central static JSON database of 20 Indian colleges

⚙️ Setup and Installation
Follow these steps to clone the repository and run the platform locally on your computer.

```
1. Clone the repository
Open your terminal, navigate to the folder where you want to save the project, and run the following command to download the code:

Bash
git clone [https://github.com/yourusername/college-discovery-platform.git](https://github.com/yourusername/college-discovery-platform.git)
Move into the project folder directory:

Bash
cd college-discovery-platform
2. Install dependencies
Install all the required project packages (React, Next.js, Framer Motion, Lucide icons, Tailwind, etc.):

Bash
npm install
(Alternatively, if you use yarn, simply run yarn install)

3. Run the development server
Start the local environment engine:

Bash
npm run dev
(Alternatively, if you use yarn, run yarn dev)

Once started, open your web browser and navigate to:
http://localhost:3000

Live URL: 
https://college-discovery-platform-five-sooty.vercel.app/

💡 Technical Data Flow
When a user navigates to the /saved page, the platform handles the data parsing through this lifecycle sequence:

Component Mount: The view renders and falls back to a custom <Loader /> state.

Asynchronous Fetching: A useEffect hook fires an asynchronous fetch request to retrieve master data from /data/colleges.json.

Serialization Reading: It accesses the browser's stringified localStorage record under the "savedColleges" key.

Data Intersection: It applies a strict .filter() callback to match indices against the storage keys, wrapping item data values through String() casting to protect against type mismatches.

UI Reconciliation: The component updates state hooks, driving a re-render mapping individual items into structural <CollegeCard /> grid spaces via unique, stable key allocations.

Hydration Error Protections
To handle potential rendering discrepancies between server-side rendering (Node environment layout) and client-side formatting (browser localized setups), localized data properties are handled explicitly using uniform configuration parameters:

TypeScript
// Enforces a fixed localized thousands string output across both Server and Client
myNumber.toLocaleString('en-US');
