import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';
import type { Project } from '../../data/projects';
import { projects } from '../../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            className="relative group w-full md:w-[400px] perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 h-full">
                <div>
                    <span className="text-xs font-medium text-accent mb-2 inline-block">{project.role}</span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm opacity-70 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
                        <FiGithub size={20} />
                    </a>
                    {project.demoUrl !== '#' && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Live Demo">
                            <FiExternalLink size={20} />
                        </a>
                    )}
                </div>

                {/* Decorative glow */}
                <div
                    className="absolute -right-10 -bottom-10 w-32 h-32 opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity"
                    style={{ background: project.color }}
                />
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <Section id="projects" tall>
            <div className="container mx-auto px-6 flex flex-col justify-center">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    My Projects
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
