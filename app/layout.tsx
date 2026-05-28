import NavbarDemo from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"; // <-- Import the footer
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="relative flex min-h-screen flex-col bg-black">
          <NavbarDemo />
          {/* flex-grow ensures the footer pushes to the bottom on short pages */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer /> {/* <-- Add it here */}
        </div>
      </body>
    </html>
  );
}