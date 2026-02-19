import { motion } from 'framer-motion';
import { Section } from '../layout/ScrollLayout';

export function CTA() {
    return (
        <Section id="cta" className="bg-black text-white relative overflow-hidden">
            <motion.div
                className="z-10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-7xl font-bold mb-8">
                    Ready to make waves?
                </h2>

                <motion.a
                    href="#contact"
                    className="relative inline-block px-12 py-4 text-2xl font-bold rounded-full border-2 border-white text-white overflow-hidden group"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 mix-blend-difference">Let's Talk</span>
                    <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                    />
                </motion.a>
            </motion.div>

            {/* Background Neon Elements */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-75 position-absolute" style={{ transform: 'translate(50%, -20%)' }} />
            </div>
        </Section>
    );
}
