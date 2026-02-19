import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';
import { siteConfig } from '../../data/config';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function About() {
    return (
        <Section id="about" className="bg-background/50" tall>
            <div className="max-w-5xl w-full px-6 grid md:grid-cols-2 gap-12 items-start">

                {/* Left column — Profile + Education */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Avatar placeholder */}
                    <div className="aspect-square w-48 rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                        <span className="text-6xl">👋</span>
                    </div>

                    {/* Education */}
                    <h4 className="font-bold text-sm tracking-widest uppercase text-primary mb-4">Education</h4>
                    <div className="space-y-4">
                        {siteConfig.education.map((edu) => (
                            <div key={edu.degree} className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <p className="font-semibold">{edu.degree}</p>
                                <p className="text-sm opacity-70">{edu.institution}</p>
                                <p className="text-xs opacity-50 mt-1">{edu.year} &middot; {edu.score}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right column — About text + Internship + Certs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
                        About Me
                    </motion.h2>
                    <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
                        {siteConfig.tagline}
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-base leading-relaxed opacity-80 mb-8">
                        {siteConfig.profileSummary}
                    </motion.p>

                    {/* Internship */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-primary mb-3">Internship</h4>
                        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                            <p className="font-semibold text-lg">{siteConfig.internship.role}</p>
                            <p className="text-sm opacity-70">{siteConfig.internship.company} &middot; {siteConfig.internship.period}</p>
                            <ul className="mt-3 list-disc list-inside space-y-1 text-sm opacity-80">
                                {siteConfig.internship.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-bold text-sm tracking-widest uppercase text-primary mb-3">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                            {siteConfig.certifications.map((cert) => (
                                <span
                                    key={cert.name}
                                    className="px-3 py-1.5 text-xs rounded-full bg-primary/10 border border-primary/20 font-medium"
                                >
                                    {cert.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8">
                        <a
                            href={siteConfig.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors inline-block"
                        >
                            Download Full CV
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
