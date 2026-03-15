import { motion } from 'framer-motion';
import { whyPoints } from '../data/content';

export default function Why() {
  return (
    <section id="why" className="py-24 px-6 bg-white border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <h2 className="font-hero font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-maroon">
            Why work with me
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {whyPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border-2 border-zinc-200 bg-[#faf9f7] p-6 sm:p-8 hover:border-maroon/40 hover:bg-maroon/5 transition-colors"
            >
              <span className="font-display font-bold text-4xl text-maroon/40 tabular-nums">
                {point.number}
              </span>
              <h3 className="font-display font-bold text-xl mt-2 text-zinc-900">{point.title}</h3>
              <p className="mt-2 text-zinc-600">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
