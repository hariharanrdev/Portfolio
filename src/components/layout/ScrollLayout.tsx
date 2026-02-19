import type { ReactNode } from 'react';

interface ScrollLayoutProps {
    children: ReactNode;
}

export function ScrollLayout({ children }: ScrollLayoutProps) {
    return (
        <main className="h-screen w-full overflow-y-auto snap-y snap-proximity scroll-smooth no-scrollbar">
            {children}
        </main>
    );
}

interface SectionProps {
    children: ReactNode;
    id: string;
    className?: string;
    /** If true, the section can grow taller than the viewport (e.g. About page with lots of content) */
    tall?: boolean;
}

export function Section({ children, id, className = '', tall = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`
                w-full snap-start relative flex flex-col items-center justify-center
                ${tall ? 'min-h-screen py-24' : 'h-screen'}
                ${className}
            `}
        >
            {/* Subtle gradient overlay */}
            <div className="w-full h-full absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 pointer-events-none" />

            {children}
        </section>
    );
}
