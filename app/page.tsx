"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AARNChainring from "./chainring";
export default function Home() {
  const projects = [
    {
      title: "Autoqueue",
      description: "A full-stack application built with precision and intent.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Coghead",
      description: "Exploring the intersection of UX design and backend performance.",
      tags: ["Next.js", "API Design", "Infra"],
      link: "#",
    },
    {
      title: "Redstone Rewired",
      description: "From concept to production—full-stack ownership.",
      tags: ["TypeScript", "System Design", "Scale"],
      link: "#",
    },
    {
      title: "PicoWifiAccessPoint",
      description: "Pushing boundaries of what's possible in the browser.",
      tags: ["React", "Canvas", "Performance"],
      link: "#",
    },
    {
      title: "Steam Review Sentiment Analyzer",
      description: "Pushing boundaries of what's possible in the browser.",
      tags: ["React", "Canvas", "Performance"],
      link: "#",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Canvas/WebGL"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "API Design", "System Architecture"] },
    { category: "DevOps", items: ["Docker", "CI/CD", "Deployment", "Observability", "Cloud Infra"] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        body {
          font-family: 'monaco', monospace;
        }
      `}</style>

      {/* Abstract cycling geometry animation */}
      <AARNChainring />


      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex item-right justify-between">
          <div className="text-sm tracking-wider">车向东 chē xiàng dōng </div>
          <div className="flex gap-8 items-center text-sm">
            <a href="#work" className="hover:text-blue-600 transition">work</a>
            <a href="#about" className="hover:text-blue-600 transition">about</a>
            <a href="mailto:your-email@example.com" className="hover:text-blue-600 transition">contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="min-h-screen flex items-center relative px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2 mb-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter">
                Harrison Che
              </h1>
              <div className="flex items-center gap-3 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                <span>full-stack engineer</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span>boston</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>

                <span>new york</span>

              </div>
            </div>

            <div className="max-w-2xl space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                nigga
              </p>
              <p>
                
              </p>
            </div>

            <div className="mt-12 flex gap-6 text-sm">
              <a href="#work" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition">
                view work
              </a>
              <a href="mailto:your-email@example.com" className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 transition">
                get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* WORK */}
      <main className="relative z-10">
        <section id="work" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <h2 className="text-5xl font-bold tracking-tight mb-16">Selected Work</h2>

          <div className="space-y-24">
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Project visual */}
                <div className="lg:col-span-7">
                  <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-sm overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-sm text-zinc-400">
                      project screenshot
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-3xl font-bold">{p.title}</h3>
                    <a href={p.link} className="text-sm hover:text-blue-600 transition">
                      view →
                    </a>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1 text-xs border border-zinc-200 dark:border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Stack</h2>
              <div className="space-y-6">
                {skills.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((it, idx) => (
                        <span key={idx} className="text-sm text-zinc-700 dark:text-zinc-300">
                          {it}{idx < group.items.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Philosophy</h2>
              <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
                <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-black dark:text-white font-semibold mb-2">No Coasting</h3>
                  <p className="text-sm leading-relaxed">
                    Fixed-gear riding teaches you to maintain constant engagement. Same principle applies to code — every decision matters, every dependency has weight.
                  </p>
                </div>
                <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-black dark:text-white font-semibold mb-2">Direct Connection</h3>
                  <p className="text-sm leading-relaxed">
                    Minimal abstraction between problem and solution. Build things that are maintainable because they're understandable.
                  </p>
                </div>
                <div>
                  <h3 className="text-black dark:text-white font-semibold mb-2">Intentional Constraints</h3>
                  <p className="text-sm leading-relaxed">
                    Constraints breed creativity. Whether it's a fixed gear with no brakes or a tight performance budget, limitations force better decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">About</h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I got into programming the same way I got into fixed-gear cycling — drawn to the elegance of simplicity and the satisfaction of mastery through constraint.
              </p>
              <p>
                These days I'm building full-stack applications with a focus on performance and maintainability. I care about the craft: writing code that future-me (or future-teammates) won't curse at.
              </p>
              <p>
                When I'm not coding, you'll find me riding around Boston on a fixed gear or shooting film photography. Both taught me to be more intentional — you can't coast, you can't undo, you have to commit.
              </p>
            </div>

            <div className="mt-12 flex gap-6 text-sm">
              <a href="https://github.com/yourusername" className="hover:text-blue-600 transition">github →</a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-600 transition">linkedin →</a>
              <a href="mailto:your-email@example.com" className="hover:text-blue-600 transition">email →</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-zinc-500">
              <div>© {new Date().getFullYear()} Harrison Che</div>
              <div className="flex gap-6">
                <a href="https://github.com/yourusername" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">LinkedIn</a>
                <a href="mailto:your-email@example.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}






