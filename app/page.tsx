"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b08] text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-6 md:px-10">
        <div className="text-lg font-semibold tracking-wide">Woiken</div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-6xl flex-col items-center justify-center px-6 pb-20 text-center md:px-10"
      >
        <section className="max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/60">
            Coming soon
          </p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            A cloud platform who developers who want to ship. Ship fast and ship
            clean.
          </h1>
          <p className="mt-6 text-lg text-white/75">Built for teams that move fast.</p>
        </section>
      </motion.main>
    </div>
  );
}
