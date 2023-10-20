import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "@/components/Providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freedom Wall",
  description: "uWu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            inter.className,
            "flex flex-col min-h-screen bg-slate-100"
          )}
        >
          <ToastContainer />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
