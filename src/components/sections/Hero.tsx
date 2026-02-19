import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';
import { siteConfig } from '../../data/config';

export function Hero() {
    return (
        <Section id="hero" className="justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="z-10 px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl font-medium text-primary mb-4"
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-4"
                    initial={{ letterSpacing: '-0.05em', opacity: 0 }}
                    animate={{ letterSpacing: '0em', opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    {siteConfig.name}
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl font-semibold text-primary/80 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {siteConfig.title}
                </motion.p>

                <motion.p
                    className="text-base md:text-lg max-w-xl mx-auto opacity-60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {siteConfig.tagline}
                </motion.p>

                <motion.div
                    className="mt-12 flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        View Work
                    </a>
                    <a
                        href={siteConfig.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full border border-foreground/20 font-medium hover:bg-foreground hover:text-background transition-colors"
                    >
                        Download CV
                    </a>
                </motion.div>
            </motion.div>

            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl -z-10 animate-pulse" />
        </Section>
    );
}
