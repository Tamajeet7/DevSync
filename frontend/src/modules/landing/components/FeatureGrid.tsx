import FeatureCard from "./FeatureCard";

import {
  Users,
  Play,
  ShieldCheck,
  Code2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Collaborate with teammates in real time using live cursors, synchronized editing and instant updates.",
  },
  {
    icon: Play,
    title: "Instant Code Execution",
    description:
      "Execute code securely with Judge0 across multiple programming languages in just one click.",
  },
  {
    icon: Code2,
    title: "Monaco Editor",
    description:
      "A VS Code-like editing experience with syntax highlighting, IntelliSense support and shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Private Rooms",
    description:
      "JWT authentication, protected workspaces and invite-only collaborative coding sessions.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
}