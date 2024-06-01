"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
