import { motion } from 'framer-motion';
import { worksExperience, worksProjects } from '../data/content';

function JobCard({ job, index }) {
  return (
    <motion.div
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
  );
}

function ProjectCard({ project, index }) {
  return (
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
  );
}

export default function Work() {
  return (
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
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500 mb-8">
              Experience
            </h3>
            <div className="space-y-12">
              {worksExperience.map((job, index) => (
                <JobCard key={job.company} job={job} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-zinc-500 mb-8">
              Projects
            </h3>
            <div className="space-y-12">
              {worksProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
