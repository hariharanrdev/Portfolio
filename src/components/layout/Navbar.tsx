import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../data/config';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b-0 rounded-none bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md">
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                {siteConfig.name}
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {siteConfig.nav.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-sm font-medium hover:text-primary transition-colors relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-xl flex flex-col p-6 items-center gap-6 md:hidden glass-panel"
                    >
                        {siteConfig.nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
