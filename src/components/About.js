import { motion } from 'framer-motion';
import { aboutParagraphs } from '../data/content';

const baseUrl = process.env.PUBLIC_URL || '';
const aboutImages = [
  { src: `${baseUrl}/about-1.png`, className: 'absolute top-[30%] left-[5%] sm:left-[8%]' },
  { src: `${baseUrl}/about-2.png`, className: 'absolute top-[35%] right-[5%] sm:right-[8%]' },
  { src: `${baseUrl}/about-3.png`, className: 'absolute bottom-[25%] left-[8%] sm:left-[12%]' },
];
const imageSize = 'w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-white/80 shadow-lg';

export default function About() {
  const [intro, ...rest] = aboutParagraphs;
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#F8F5EE] overflow-hidden">
      {aboutImages.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className={`${imageSize} ${img.className}`}
          aria-hidden
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-[0.2em] text-[#333] mb-12">
          About me
        </h2>
        <p className="text-xl sm:text-2xl font-medium text-[#333] mb-6 leading-relaxed">{intro}</p>
        {rest.map((paragraph, i) => (
          <p key={i} className="text-base sm:text-lg text-[#333] leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
