import { Brain, Database, Zap, MessageSquare } from "lucide-react";

export const pillars = [
  {
    icon: Brain,
    id: "conseiller",
    gradient: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-400",
    image: "/services/conseiller.webp",
  },
  {
    icon: Database,
    id: "piloter",
    gradient: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
    image: "/services/piloter.webp",
  },
  {
    icon: Zap,
    id: "executer",
    gradient: "from-violet-500/20 via-cyan-500/10 to-violet-500/20",
    iconColor: "text-violet-400",
    image: "/services/executer.webp",
  },
  {
    icon: MessageSquare,
    id: "interagir",
    gradient: "from-cyan-500/20 via-violet-500/10 to-cyan-500/20",
    iconColor: "text-cyan-400",
    image: "/services/interagir.webp",
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
