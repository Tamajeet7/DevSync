import {
  Code2,
  Globe,
  Rocket,
  Users,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">

      <div className="mb-20 text-center">

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Features
        </span>

        <h2 className="mt-6 text-5xl font-black">
          Everything you need.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
          Built for developers, pair programming,
          technical interviews and collaborative software development.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        <FeatureCard
          icon={<Users size={30} />}
          title="Real-Time Collaboration"
          description="Edit code simultaneously with your teammates using WebSockets."
        />

        <FeatureCard
          icon={<Code2 size={30} />}
          title="VS Code Experience"
          description="Powered by the Monaco Editor for a familiar coding experience."
        />

        <FeatureCard
          icon={<Globe size={30} />}
          title="20+ Languages"
          description="JavaScript, Python, C++, Java, Go and many more."
        />

        <FeatureCard
          icon={<Rocket size={30} />}
          title="Instant Execution"
          description="Run code directly inside your browser with one click."
        />

      </div>

    </section>
  );
}