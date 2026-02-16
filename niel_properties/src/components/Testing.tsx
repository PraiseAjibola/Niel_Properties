import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { useEffect } from "react";
import About from "./Testing2";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax for the background grid and glow
  const bgX = useTransform(smoothX, [-500, 500], [20, -20]);
  const bgY = useTransform(smoothY, [-500, 500], [20, -20]);

  // Parallax for the Background Image (moves slower for depth)
  const imageX = useTransform(smoothX, [-500, 500], [10, -10]);
  const imageY = useTransform(smoothY, [-500, 500], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const textBlur: Variants = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 1.1 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#020202] text-white overflow-hidden"
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <motion.div
        style={{ x: imageX, y: imageY, scale: 1.1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Business Architecture"
          className="w-full h-full object-cover opacity-40 grayscale brightness-[0.3]"
        />
        {/* Vignette and Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-transparent to-[#020202]" />
      </motion.div>

      {/* 2. INTERACTIVE MESH/GRID LAYER */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#94257a]/15 blur-[160px] rounded-full" />
      </motion.div>

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center">
        {/* Cinematic Headline */}
        <motion.h1
          variants={textBlur}
          className="text-center dm-sans pt-6 md:pt-0 max-[321px]:pt-20 font-bold text-[40px] md:text-[65px] leading-[1.05] tracking-[-0.04em] mb-8"
        >
          Read the 2024 Caladium <br />
          <span className="relative inline-block text-[#94257a]">
            Nigerian SME Report
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#94257a] to-transparent origin-center"
            />
          </span>
        </motion.h1>

        {/* Sophisticated Paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-center dm-sans text-white text-lg md:text-[21px] max-w-2xl font-light leading-relaxed mb-14"
        >
          Access insights, trends, challenges and outlook about the Nigerian SME
          <span className="block dm-sans text-center max-[321px]:inline-block max-[321px]:pl-1 md:text-left text-white">
            Ecosystem.
          </span>
        </motion.p>

        {/* Action Row */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-10"
        >
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfZ9eWDKmlhPkwA5PV9yEWCuLFyPMtaVAdV2lHnp9zdo-l-0Q/viewform"
            className="group relative px-10 md:px-12 md:py-5 py-2 bg-white text-black dm-sans font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 dm-sans transition-colors duration-300 group-hover:text-white text-sm md:text-base">Apply for Current Caladium Job Openings</span>
            <div className="absolute inset-0 bg-[#94257a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </Link>

          <Link
            to="https://drive.google.com/file/d/1FdKZKuGLv9kl4S4UtAonf-jTvXx2Dbfx/view"
            className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 hover:text-white dm-sans z transition-all"
          >
            2024 Caladium Nigerian SME Report
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#94257a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Side Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <p className="text-[9px]  dm-sans tracking-[0.6em] text-white/50 uppercase mt-4 mb-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Insight. Data. Scale.
        </p>
        <div className="h-20 w-[1px] bg-gradient-to-t from-transparent via-white/50 to-transparent" />
      </motion.div>
      <About />
    </motion.section>
  );
};

export default Hero;