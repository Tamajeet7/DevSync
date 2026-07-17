import { motion } from "framer-motion";

interface WelcomeBannerProps {
  name: string;
}

export default function WelcomeBanner({
  name,
}: WelcomeBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-14"
    >
      <h1 className="text-4xl font-bold tracking-tight">
        Welcome back,
        <span className="text-blue-400"> {name}</span>
      </h1>

      <p className="mt-3 max-w-2xl text-lg text-slate-400">
        Continue collaborating with your team or create a new coding workspace.
      </p>
    </motion.section>
  );
}