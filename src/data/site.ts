import {
  AlarmSmoke,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Component,
  DraftingCompass,
  FileSpreadsheet,
  FolderKanban,
  HardHat,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export type Project = {
  title: string;
  location: string;
  category: string;
  status: "Completed" | "Ongoing";
  image: string;
  summary: string;
  scope: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type DashboardFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const company = {
  name: "EFES Engineering & Construction",
  shortName: "EFES",
  email: "inquiries@efesengg.com",
  phone: "+63 917 800 1248",
  address: "1128 Industrial Avenue, Ortigas Center, Pasig City, Philippines",
  mapLabel: "Metro Manila operations map",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" }
  ],
  theme: {
    steel: "232 238 242",
    graphite: "19 24 31",
    mist: "245 247 250",
    slate: "96 108 123",
    ember: "255 109 37",
    line: "255 255 255",
    panel: "255 255 255"
  }
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" }
];

export const hero = {
  eyebrow: "Engineering precision. Construction confidence.",
  title: "Integrated engineering and construction delivery for industrial, commercial, and technical environments.",
  description:
    "EFES delivers design, execution, fire protection, MEP coordination, and project controls with the discipline expected on critical sites. Built for owners who need dependable workmanship, compliance, and visibility from start to turnover.",
  primaryCta: { label: "Request a Consultation", href: "#contact" },
  secondaryCta: { label: "View Projects", href: "#projects" },
  stats: [
    { label: "Years in delivery", value: 18, suffix: "+" },
    { label: "Projects completed", value: 240, suffix: "+" },
    { label: "Active client partners", value: 72, suffix: "" },
    { label: "Safety compliance rate", value: 99, suffix: "%" }
  ] satisfies Stat[]
};

export const about = {
  intro:
    "We combine engineering depth, field discipline, and commercial practicality to deliver spaces and systems that perform. Our teams manage both technical decisions and site realities so projects move with fewer surprises.",
  mission:
    "To deliver technically sound, buildable, and compliant solutions that protect schedules, budgets, and long-term asset performance.",
  vision:
    "To be the trusted engineering and construction partner for clients who require precision, accountability, and clear project visibility.",
  values: [
    "Safety-first planning and execution",
    "Transparent reporting and project control",
    "Practical engineering that works on site",
    "Quality workmanship aligned with codes and standards"
  ],
  differentiators: [
    {
      title: "Reliable site execution",
      description: "Coordinated field teams, disciplined supervision, and milestone tracking that keeps work aligned with scope."
    },
    {
      title: "Code and compliance focus",
      description: "Documentation, testing, and implementation aligned to applicable fire protection, MEP, and construction requirements."
    },
    {
      title: "Design-to-delivery continuity",
      description: "A single project flow from concept support and detailing through procurement, construction, and close-out."
    }
  ]
};

export const services: Service[] = [
  {
    title: "Engineering Services",
    description: "Design coordination, technical assessments, value engineering, and practical detailing for real-world implementation.",
    icon: DraftingCompass,
    highlights: ["Site evaluation", "System design support", "Technical documentation"]
  },
  {
    title: "Construction Services",
    description: "Civil, structural, architectural, and specialty trades delivered with disciplined supervision and schedule control.",
    icon: HardHat,
    highlights: ["General construction", "Trade coordination", "Quality assurance"]
  },
  {
    title: "Design and Build",
    description: "Single-source delivery that shortens decision cycles and improves accountability from planning to turnover.",
    icon: Building2,
    highlights: ["Integrated delivery", "Cost visibility", "Faster mobilization"]
  },
  {
    title: "Project Management",
    description: "Planning, procurement tracking, stakeholder reporting, and execution controls for predictable outcomes.",
    icon: ClipboardList,
    highlights: ["Program oversight", "Schedule tracking", "Risk management"]
  },
  {
    title: "FDAS / Fire Protection Works",
    description: "Detection, alarm, and protection works engineered and installed for code compliance, life safety, and maintainability.",
    icon: AlarmSmoke,
    highlights: ["FDAS installation", "Testing and commissioning", "Compliance support"]
  },
  {
    title: "Renovation / Fit-out",
    description: "Operational upgrades and interior transformations executed with careful staging and minimal disruption.",
    icon: Component,
    highlights: ["Office fit-out", "Facility upgrade", "Phased renovation"]
  },
  {
    title: "MEP / Technical Works",
    description: "Mechanical, electrical, plumbing, and specialty systems installed with coordination across design and site constraints.",
    icon: Wrench,
    highlights: ["MEP coordination", "System retrofit", "Technical maintenance works"]
  }
];

export const galleryFilters = ["All", "Industrial", "Commercial", "FDAS", "Fit-out", "MEP"];

export const gallery: GalleryItem[] = [
  {
    title: "Plant utility corridor upgrade",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Corporate fit-out delivery",
    category: "Fit-out",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "FDAS commissioning sequence",
    category: "FDAS",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Warehouse structural bay works",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Commercial build progress",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "MEP coordination and routing",
    category: "MEP",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const clients = {
  logos: ["NorthForge Holdings", "MetroAxis Properties", "Summit Food Systems", "Lattice Retail Group", "PrimeGrid Facilities", "Arcwell Manufacturing"],
  testimonials: [
    {
      quote:
        "EFES handled our live-site fit-out and MEP upgrades with strong coordination. Reporting was clear, punch listing was disciplined, and turnover was smooth.",
      name: "Marianne Cruz",
      role: "Facilities Director, MetroAxis Properties"
    },
    {
      quote:
        "Their team understood both the engineering detail and the site constraints. The project stayed organized, compliant, and commercially grounded.",
      name: "Carlos Mendoza",
      role: "Project Lead, PrimeGrid Facilities"
    }
  ] satisfies Testimonial[],
  trustBadges: [
    { label: "Safety-led execution", icon: ShieldCheck },
    { label: "QA/QC documentation", icon: BadgeCheck },
    { label: "Transparent reporting", icon: ScanSearch }
  ]
};

export const projects: Project[] = [
  {
    title: "High-Bay Distribution Hub Upgrade",
    location: "Laguna",
    category: "Industrial Construction",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Structural reinforcement, utility routing, and warehouse operational improvements delivered under an accelerated occupancy schedule.",
    scope: ["Structural steel modifications", "Power and lighting upgrades", "Phased turnover planning"]
  },
  {
    title: "Corporate Headquarters Fit-out",
    location: "Makati",
    category: "Design and Build",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Integrated design-build package combining interior fit-out, fire protection, MEP works, and executive briefing spaces.",
    scope: ["Interior construction", "FDAS integration", "Executive amenity floor"]
  },
  {
    title: "Food Processing FDAS Modernization",
    location: "Batangas",
    category: "Fire Protection",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Upgrade of detection and alarm infrastructure with testing, commissioning, and operator training for a critical manufacturing environment.",
    scope: ["Panel replacement", "Detector zoning", "Testing and commissioning"]
  }
];

export const dashboardFeatures: DashboardFeature[] = [
  {
    title: "Project Updates",
    description: "Weekly milestones, site status, and delivery snapshots in one client-facing view.",
    icon: FolderKanban
  },
  {
    title: "Documents",
    description: "Drawings, permits, transmittals, and approved submittals organized by package.",
    icon: FileSpreadsheet
  },
  {
    title: "Billing / Invoices",
    description: "Billing references, progress claims, and commercial status monitoring.",
    icon: ArrowUpRight
  },
  {
    title: "Progress Photos",
    description: "Time-stamped installation photos and visual field updates by work area.",
    icon: Building2
  },
  {
    title: "Communication / Concerns",
    description: "A clean escalation lane for clarifications, observations, and action items.",
    icon: MessagesSquare
  }
];

export const contact = {
  heading: "Discuss your next project with a team that understands both engineering detail and site delivery.",
  body:
    "From early technical scoping to active construction support, we help clients reduce uncertainty and move with confidence."
};

export const footerLinks = {
  quick: navigation,
  services: services.slice(0, 4).map((service) => ({
    label: service.title,
    href: "#services"
  }))
};
