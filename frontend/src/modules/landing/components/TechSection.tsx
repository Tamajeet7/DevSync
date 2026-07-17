import { motion } from "framer-motion";

import {
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSocketdotio,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiCodemirror,
} from "react-icons/si";

import { Code2 } from "lucide-react";


const technologies = [
  {
    title: "React",
    description: "Modern component-based UI",
    icon: FaReact,
    iconColor: "#61DAFB",
  },
  {
    title: "TypeScript",
    description: "End-to-end type safety",
    icon: SiTypescript,
    iconColor: "#3178C6",
  },
  {
    title: "Monaco",
    description: "VS Code editor experience",
    icon: SiCodemirror,
    iconColor: "#22C1F1",
  },
  {
    title: "Socket.IO",
    description: "Real-time collaboration",
    icon: SiSocketdotio,
    iconColor: "#22C55E",
  },
  {
    title: "Judge0",
    description: "Secure code execution",
    icon: Code2,
    iconColor: "#F97316",
  },
  {
    title: "Express",
    description: "Fast backend APIs",
    icon: SiExpress,
    iconColor: "#94A3B8",
  },
  {
    title: "Prisma",
    description: "Modern ORM",
    icon: SiPrisma,
    iconColor: "#8B5CF6",
  },
  {
    title: "PostgreSQL",
    description: "Reliable relational database",
    icon: SiPostgresql,
    iconColor: "#336791",
  },
];

export default function TechSection() {
  return (
    <section className="bg-[#030005]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >

        <div className="text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-purple-300
              flex justify-center
              min-w-[160px]
              -translate-y-4
            "
          >
            MODERN TECH STACK
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Built with technologies developers love.
          </h2>

          <div className="mt-6 mx-auto max-w-3xl text-xl leading-9 text-slate-400">
            DevSync combines modern frontend and backend
            technologies to deliver a fast, secure and
            collaborative coding experience.
          </div>
          </div>

        <div className="mt-20 grid grid-cols-4 gap-8">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-[28px]
                border
                border-slate-800
                bg-[#111827]
                p-8
                transition-all
                duration-300
                hover:border-purple-500/40
              "
            >

              <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-700
                    bg-[#0B1220]
                    transition-colors
                    duration-300
                    group-hover:border-purple-500/40
                "
                >
                <tech.icon
                    size={34}
                    color={tech.iconColor}
                />
                </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {tech.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-400">
                {tech.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}