import { motion } from 'framer-motion';

const baseUrl = process.env.PUBLIC_URL || '';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16"
      >
        <div className="md:max-w-[55%]">
          <h1 className="font-hero font-black uppercase text-left leading-tight tracking-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl text-zinc-800">Code with a</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon mt-0.5">
              Human touch
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-zinc-600 text-left">
            Sharp thinking. Clean code. A great person to build with.
          </p>
        </div>
        <img
          src={`${baseUrl}/profile.png`}
          alt="Gili Weissberg"
          className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover object-top shrink-0 md:ml-auto ring-2 ring-zinc-200/80"
        />
      </motion.div>
    </section>
  );
}
