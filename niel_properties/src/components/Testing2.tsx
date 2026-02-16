import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatItemProps {
  target: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ target, label, suffix }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) count.set(target);
  }, [isInView, target, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString());
    });
  }, [rounded]);

  return (
    <motion.div 
      ref={ref} 
      className="group border-l border-white/10 pl-4 md:pl-6 py-4 transition-all duration-500 hover:border-[#94257a]"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-1 flex items-baseline gap-1">
        <span>{display}</span>
        {suffix && <span className="text-base md:text-lg opacity-40">{suffix}</span>}
        <span className="text-[#94257a] text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity font-bold">+</span>
      </div>
      <div className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-zinc-500 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative bg-[#050505] py-16 md:py-24 lg:py-36 px-4 mt-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0">
        
        {/* LEFT SIDE: Branding Header (Fix: Shrink container on mobile) */}
        <div className="w-full lg:w-[10%] flex flex-row lg:flex-col items-center lg:items-center justify-start lg:justify-start">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-row lg:flex-col items-center gap-4 lg:gap-6"
           >
              <h3 className="text-[#94257a] text-[10px] md:text-[12px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase lg:rotate-180 lg:[writing-mode:vertical-lr] whitespace-nowrap">
                About Us
              </h3>
              <div className="w-8 sm:w-12 lg:w-[1px] h-[1px] lg:h-24 bg-gradient-to-r lg:bg-gradient-to-b from-[#94257a] to-transparent" />
           </motion.div>
        </div>

        {/* RIGHT SIDE: Content Area (Fix: Pull content up on mobile) */}
        <div className="w-full lg:w-[90%] -mt-2 lg:mt-0">
          {/* Breadcrumb */}
          <div className="mb-8 md:mb-16 overflow-hidden">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.6em] text-zinc-600 uppercase flex items-center gap-3 md:gap-4 font-bold"
            >
              01 — Company Overview
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24">
            
            {/* Editorial Typography */}
            <div className="lg:col-span-7">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-white leading-[1.2] lg:leading-tight mb-6 md:mb-8"
              >
                Excellence in strategy. <br className="hidden sm:block" />
                <span className="text-zinc-200 font-light italic">Driven by data.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mb-8 md:mb-12 font-light"
              >
                Caladium Consulting bridges the gap between high-level global strategy and 
                local enterprise growth. Since 2010, we have empowered over 300 
                organizations through rigorous analysis and transformative execution.
              </motion.p>

              <Link
                to="/about"
                className="group flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors"
              >
                <span className="relative dm-sans">
                  View Full Profile
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-[1px] bg-[#94257a] group-hover:w-full transition-all duration-500" />
                </span>
                <svg width="12" height="12" className="md:w-3.5 md:h-3.5 stroke-current transition-transform group-hover:translate-x-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-5 dm-sans grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 md:gap-y-12 border-t border-white/5 pt-10 lg:border-t-0 lg:pt-0">
              <StatItem target={10} suffix="k" label="Network" />
              <StatItem target={300} label="Impact" />
              <StatItem target={200} label="Partners" />
              <StatItem target={21} label="Awards" />
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Detail */}
      {/* <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 hidden sm:block">
        <span className="text-[7px] md:text-[8px] text-zinc-800 tracking-[1em] md:tracking-[1.5em] uppercase font-bold opacity-30">
          Scale / Resilience / Growth
        </span>
      </div> */}
    </section>
  );
};

export default About;