import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Sparkles, Cake, Gift } from "lucide-react";
import heroImg from "@/assets/birthday-hero.jpg";
import { Confetti } from "@/components/Confetti";

export const Route = createFileRoute("/")({
  component: Index,
});

const wishes = [
  {
    icon: Sparkles,
    title: "Stay Sparkling",
    text: "May your year shine brighter than every candle on your cake. You light up every room you walk into, Shirisha.",
  },
  {
    icon: Heart,
    title: "Stay Loved",
    text: "Surrounded by people who adore you — today and always. Your kindness is a gift the world keeps unwrapping.",
  },
  {
    icon: Cake,
    title: "Stay Sweet",
    text: "Like the best slice of cake — soft, golden, and impossible not to smile at. Today is all about you.",
  },
  {
    icon: Gift,
    title: "Stay Dreaming",
    text: "May every wish you blow into the air find its way back as something even more beautiful.",
  },
];

const memories = [
  "the laughter that never knows when to stop",
  "the late-night talks about everything and nothing",
  "the way you turn ordinary days into stories",
  "the courage you carry without ever showing off",
  "the friend you are — the one I'm so lucky to have",
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <Confetti />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, transparent, var(--background))" }} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-3xl md:text-4xl text-primary mb-4"
        >
          A little something for you,
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold leading-none"
        >
          <span className="text-gradient">Happy Birthday</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-script text-6xl md:text-8xl mt-2 text-foreground"
          style={{ animation: "shimmer 3s ease-in-out infinite" }}
        >
          Shirisha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground italic"
        >
          Today the world gets to celebrate the wonder it's been holding since the day you arrived.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex items-center gap-2 text-muted-foreground"
        >
          <span className="h-px w-12 bg-border" />
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span className="h-px w-12 bg-border" />
        </motion.div>
      </section>

      {/* Wishes */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-script text-2xl text-primary">four wishes</p>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">For your year ahead</h3>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {wishes.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-card p-8 border border-border"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <w.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{w.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-script text-2xl text-primary"
          >
            things I love about you
          </motion.p>
          <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-12">A small (incomplete) list</h3>

          <ul className="space-y-5 text-left">
            {memories.map((m, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border"
              >
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  {i + 1}
                </span>
                <span className="text-lg text-foreground/90 italic">{m}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl"
        >
          <div
            className="inline-block text-7xl mb-6"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            🎂
          </div>
          <h3 className="text-5xl md:text-6xl font-bold">
            Make a <span className="text-gradient">wish</span>
          </h3>
          <p className="font-script text-3xl mt-6 text-primary">…and then make a thousand more.</p>
          <p className="mt-8 text-muted-foreground">
            With all my love, on your special day. 💖
          </p>
        </motion.div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-3 w-3 fill-primary text-primary" /> for Shirisha
      </footer>
    </div>
  );
}
