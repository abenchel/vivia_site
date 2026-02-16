import { Sparkles, LineChart, Bot, ShieldCheck } from "lucide-react";

export const pillars = [
  {
    icon: Sparkles,
    id: "automation",
    gradient: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-400",
  },
  {
    icon: LineChart,
    id: "data",
    gradient: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Bot,
    id: "ai",
    gradient: "from-violet-500/20 via-cyan-500/10 to-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: ShieldCheck,
    id: "support",
    gradient: "from-cyan-500/20 via-violet-500/10 to-cyan-500/20",
    iconColor: "text-cyan-400",
  },
];

export const highlights = [
  {
    id: "speed",
    icon: "⚡",
  },
  {
    id: "integrations",
    icon: "🔗",
  },
  {
    id: "security",
    icon: "🔒",
  },
];

export const processSteps = [
  {
    id: "framing",
    color: "border-violet-500/50 bg-violet-500/10",
  },
  {
    id: "implementation",
    color: "border-cyan-500/50 bg-cyan-500/10",
  },
  {
    id: "adoption",
    color: "border-violet-500/50 bg-violet-500/10",
  },
];

export const benefits = [
  "cost",
  "time",
  "visibility",
  "experience",
];

export const quickPlanItems = [
  "audit",
  "priorities",
  "prototype",
  "training",
];
