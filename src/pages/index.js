import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const worksExperience = [
  {
    role: 'Backend Developer Intern',
    company: 'PensionAI',
    period: 'Feb 2025 – Present',
    description: 'Stealth startup building pension-focused AI.',
    points: [
      'Built LLM agents using Azure OpenAI, RAG, and prompt engineering so users can talk to the system and retrieve pension information.',
      'Developed scalable backend services in Python (FastAPI), with OAuth via Azure and Graph API integration.',
      'Designed AI-powered document analyzers using Azure AI for automated signature and field detection.',
      'Applied OOP, Git, and CI/CD best practices.',
    ],
  },
  {
    role: 'Instructor',
    company: '"QueenB" Program',
    period: '2024 – 2025',
    description: 'Programming education for 9th-grade girls.',
    points: [
      'Led web development sessions (HTML, CSS, JavaScript).',
      'Promoted logical thinking, algorithmic problem-solving, and technical creativity in early learners.',
    ],
  },
];

const worksProjects = [
  {
    name: 'Full Stack Application',
    context: 'AppsFlyer hackathon',
    points: [
      'Developed backend in Node.js with Express, integrating real-time APIs (UltraMsg, Gemini) and authentication logic.',
      'Collaborated in an Agile team using GitHub; debugging and endpoint validation with Postman.',
    ],
  },
  {
    name: 'API Shield – Threat Detection System',
    context: 'Python, Flask',
    points: [
      'Implemented security-focused architecture using OOP and layered design.',
      'Integrated unit testing and automated cyberattack simulations to validate threat response logic.',
    ],
  },
];

const whyPoints = [
  { number: '01', title: 'Team player', text: 'Clear communicator. Reliable in any team.' },
  { number: '02', title: 'Fast learner', text: 'New stack, new domain - I get up to speed.' },
  { number: '03', title: 'Problem solver', text: '"How do we do this?" - then I do it.' },
  { number: '04', title: 'Driven', text: 'BGU CS grad. Ready for the next challenge.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-base sm:text-lg tracking-tight uppercase text-black">
            Gili Weissberg
          </a>
          <ul className="flex gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-700 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16"
        >
          <div className="md:max-w-[55%]">
            <h1 className="font-hero font-black uppercase text-left leading-tight tracking-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl text-zinc-800">
                Code with a
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon mt-0.5">
                Human touch
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-zinc-600 text-left">
              Sharp thinking. Clean code. A great person to build with.
            </p>
          </div>
          <img
            src="/profile.png"
            alt="Gili Weissberg"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover object-top shrink-0 md:ml-auto ring-2 ring-zinc-200/80"
          />
        </motion.div>
      </section>

      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#F8F5EE] overflow-hidden">
        <img
          src="/about-1.png"
          alt=""
          className="absolute top-[30%] left-[5%] sm:left-[8%] w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-white/80 shadow-lg"
          aria-hidden
        />
        <img
          src="/about-2.png"
          alt=""
          className="absolute top-[35%] right-[5%] sm:right-[8%] w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-white/80 shadow-lg"
          aria-hidden
        />
        <img
          src="/about-3.png"
          alt=""
          className="absolute bottom-[25%] left-[8%] sm:left-[12%] w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-white/80 shadow-lg"
          aria-hidden
        />
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
          <p className="text-xl sm:text-2xl font-medium text-[#333] mb-6 leading-relaxed">
            Hi, I'm Gili - a full stack developer who loves solving problems.
          </p>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed mb-6">
            I enjoy building software that's clear, robust, and genuinely useful. My work focuses on backend systems, AI-powered tools, and full-stack products, with an emphasis on clean architecture and thoughtful engineering.
          </p>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed mb-6">
            I like to go beyond the obvious solutions and bring care into the systems I design - writing code that's reliable, maintainable, and built to evolve.
          </p>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed mb-6">
            I'm also someone who enjoys working with people. I'm a strong communicator, a collaborative teammate, and someone who likes helping teams turn complex ideas into practical solutions.
          </p>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed mb-6">
            I graduated with a B.Sc. in Computer Science from Ben-Gurion University of the Negev, where I developed a strong foundation in algorithms, systems, and software development.
          </p>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed">
            I'm curious, ambitious, and always looking for the next challenge to learn, build, and grow.
          </p>
        </motion.div>
      </section>

      <section id="work" className="py-24 px-6 bg-white border-t border-zinc-200/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <h2 className="font-hero font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-maroon">
              My works
            </h2>
            <p className="mt-2 text-lg text-zinc-600">Experience & projects</p>
          </motion.div>

          <div className="space-y-16">
            <div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500 mb-8">Experience</h3>
              <div className="space-y-12">
                {worksExperience.map((job, index) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="border-l-2 border-maroon/30 pl-6 sm:pl-8"
                  >
                    <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
                      <span className="font-display font-bold text-xl text-zinc-900">{job.role}</span>
                      <span className="text-zinc-500">·</span>
                      <span className="font-medium text-zinc-700">{job.company}</span>
                      <span className="text-zinc-400 text-sm">{job.period}</span>
                    </div>
                    <p className="mt-1 text-zinc-600 text-sm">{job.description}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-zinc-600 leading-relaxed flex gap-2">
                          <span className="text-maroon mt-1.5 shrink-0">●</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500 mb-8">Projects</h3>
              <div className="space-y-12">
                {worksProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="border-l-2 border-maroon/30 pl-6 sm:pl-8"
                  >
                    <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
                      <span className="font-display font-bold text-xl text-zinc-900">{project.name}</span>
                      <span className="text-zinc-500">·</span>
                      <span className="text-zinc-600 text-sm">{project.context}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-zinc-600 leading-relaxed flex gap-2">
                          <span className="text-maroon mt-1.5 shrink-0">●</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <span className="font-display font-bold text-4xl text-maroon/40 tabular-nums">{point.number}</span>
                <h3 className="font-display font-bold text-xl mt-2 text-zinc-900">{point.title}</h3>
                <p className="mt-2 text-zinc-600">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            I'm looking for a challenging new position that will help me squeeze out the best of my creative juices!
          </p>
          <p className="text-base sm:text-lg font-normal mb-12 leading-relaxed opacity-95">
            If you like the sound of a full stack developer who's a team player and a problem solver rolled into one - then I'm your person. Don't hesitate to contact me; I'm eager to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a href="tel:+972504403966" className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4">
              +972 50 440 3966
            </a>
            <a href="mailto:giliweissberg@gmail.com" className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4">
              giliweissberg@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-200/80">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-zinc-900">Gili Weissberg</span>
          <a
            href="mailto:giliweissberg@gmail.com"
            className="text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            giliweissberg@gmail.com
          </a>
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} · Made with care</span>
        </div>
      </footer>
    </div>
  );
}
