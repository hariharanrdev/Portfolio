import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';

const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'Java', level: 60 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'HTML / CSS / JS', level: 70 },
    { name: 'ReactJS', level: 65 },
];

const softSkills = [
    'Team Collaboration',
    'Problem-Solving',
    'Adaptability',
    'Creative Thinking',
    'Attention to Detail',
];

const otherSkills = [
    'Adobe Photoshop',
    'Canva',
    'MS Office',
    'Adobe Premiere Pro',
    'Figma',
];

export function Skills() {
    return (
        <Section id="skills" className="bg-background relative" tall>
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    My Skills
                </motion.h2>

                {/* Technical Skills — animated bars */}
                <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
                <div className="grid gap-6 md:grid-cols-2 mb-12">
                    {technicalSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-lg">{skill.name}</span>
                                <span className="text-primary font-mono">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills — pill badges */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((s, i) => (
                                <motion.span
                                    key={s}
                                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    {s}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Design</h3>
                        <div className="flex flex-wrap gap-3">
                            {otherSkills.map((s, i) => (
                                <motion.span
                                    key={s}
                                    className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    {s}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
