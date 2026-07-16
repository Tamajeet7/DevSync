import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-800
        bg-[#111827]
        p-10
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-blue-500/10
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          text-blue-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-500
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          text-lg
          leading-8
          text-slate-400
        "
      >
        {description}
      </p>

      {/* Bottom Line */}

      <div
        className="
          mt-10
          h-1
          w-16
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          transition-all
          duration-300
          group-hover:w-28
        "
      />

    </motion.div>
  );
}