import { motion } from 'framer-motion';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-maroon">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center text-white"
      >
        <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight mb-8">
          Let's work together
        </h2>
        <p className="text-xl sm:text-2xl font-semibold mb-6 leading-relaxed">
          I'm looking for a challenging new position that will help me squeeze out the best of my
          creative juices!
        </p>
        <p className="text-base sm:text-lg font-normal mb-12 leading-relaxed opacity-95">
          If you like the sound of a full stack developer who's a team player and a problem solver
          rolled into one - then I'm your person. Don't hesitate to contact me; I'm eager to hear
          from you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a href={contact.phoneHref} className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4">
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4"
          >
            {contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
