import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Section } from '../layout/ScrollLayout';
import { FiSend, FiCheck, FiLoader, FiCode, FiUser, FiTwitter, FiInstagram } from 'react-icons/fi';
import { siteConfig } from '../../data/config';

const contactSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactForm) => {
        setIsSubmitting(true);
        console.log("Form Data:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <Section id="contact" className="bg-background relative" tall>
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to say hi?
                        <br />I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                            {...register('name')}
                            className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            {...register('email')}
                            className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${isSuccess ? 'bg-green-500' : 'bg-primary hover:opacity-90'}`}
                    >
                        {isSubmitting ? (
                            <FiLoader className="animate-spin" />
                        ) : isSuccess ? (
                            <>
                                <FiCheck /> Sent Successfully
                            </>
                        ) : (
                            <>
                                <FiSend /> Send Message
                            </>
                        )}
                    </button>
                </motion.form>

                <div className="mt-12 flex justify-center gap-8">
                    <SocialLink href={siteConfig.socials.github} icon={<FiCode />} label="GitHub" delay={0} />
                    <SocialLink href={siteConfig.socials.linkedin} icon={<FiUser />} label="LinkedIn" delay={0.1} />
                    <SocialLink href={siteConfig.socials.twitter} icon={<FiTwitter />} label="Twitter" delay={0.2} />
                    <SocialLink href={siteConfig.socials.instagram} icon={<FiInstagram />} label="Instagram" delay={0.3} />
                </div>
            </div>
        </Section>
    );
}

function SocialLink({ href, icon, label, delay }: { href: string, icon: React.ReactNode, label: string, delay: number }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-colors relative group"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, rotate: 10 }}
            aria-label={label}
        >
            <span className="text-xl">{icon}</span>
        </motion.a>
    );
}
