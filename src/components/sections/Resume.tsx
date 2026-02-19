import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';
import { siteConfig } from '../../data/config';
import { FiDownload } from 'react-icons/fi';

export function Resume() {
    return (
        <Section id="resume" className="bg-background">
            <div className="text-center max-w-2xl px-6">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Journey
                </motion.h2>

                <motion.a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center p-1"
                    whileHover="hover"
                >
                    {/* Animated Border/Glow */}
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg group-hover:opacity-100 transition-opacity"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% 200%" }}
                    />

                    {/* Card Content */}
                    <div className="relative bg-background rounded-xl px-12 py-16 border border-white/10 flex flex-col items-center gap-4 transition-transform group-hover:-translate-y-1">
                        <FiDownload size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xl font-medium tracking-wide">Download Full Resume</span>
                        <span className="text-sm text-muted-foreground">PDF Format • 2.5 MB</span>
                    </div>
                </motion.a>
            </div>
        </Section>
    );
}
