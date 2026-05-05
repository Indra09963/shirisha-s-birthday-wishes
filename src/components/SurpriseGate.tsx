import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export function SurpriseGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--gradient-soft)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-script text-3xl md:text-4xl text-primary mb-3"
      >
        Psst… Shirisha
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        I have a <span className="text-gradient">surprise</span> for you
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-md text-muted-foreground"
      >
        Tap the gift to unwrap your birthday wishes ✨
      </motion.p>

      <motion.button
        onClick={onOpen}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        className="group relative mt-12 flex h-40 w-40 items-center justify-center rounded-3xl text-primary-foreground"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
      >
        <span
          className="absolute inset-0 rounded-3xl"
          style={{ animation: "shimmer 2.5s ease-in-out infinite", boxShadow: "var(--shadow-glow)" }}
        />
        <Gift className="h-20 w-20 relative z-10" strokeWidth={1.5} />
        <Sparkles className="absolute -top-3 -right-3 h-8 w-8 text-gold animate-pulse" />
        <Sparkles className="absolute -bottom-2 -left-3 h-6 w-6 text-gold animate-pulse" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 font-script text-2xl text-primary"
      >
        click to open →
      </motion.p>
    </motion.div>
  );
}
