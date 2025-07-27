import { 
  Palette, 
  Video, 
  PenTool, 
  Code, 
  Layers, 
  Smartphone, 
  Bot, 
  Shield, 
  Network, 
  Megaphone, 
  Search, 
  FileText, 
  BarChart3, 
  Globe 
} from 'lucide-react';

// Services data configuration
export const servicesConfig = {
  showOnHomePage: true,
  showOnServicesPage: true,
  canShowOnAnyPage: true // This allows you to show services on any page by importing this file
};

// Services data with Lucide React icons
export const servicesData = [
  {
    title: "Web Development",
    description: "Custom, scalable, and secure websites built for performance, speed, and user experience with modern technologies.",
    icon: Code,
    bgColor: "#ffffff"
  },
  {
    title: "Graphic Designing",
    description: "Creative visual designs, brand identity, and marketing materials that make your business stand out from the competition.",
    icon: Palette,
    bgColor: "#ffffff"
  },
  {
    title: "Digital Branding",
    description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems.",
    icon: Layers,
    bgColor: "#ffffff"
  },
  {
    title: "Video Editing",
    description: "Professional video production and editing services that create engaging content for your brand storytelling.",
    icon: Video,
    bgColor: "#ffffff"
  },
  {
    title: "Content Writing",
    description: "SEO-optimized, engaging, and persuasive content that builds trust and drives conversions for your business.",
    icon: PenTool,
    bgColor: "#ffffff"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, human-centered designs that enhance user satisfaction and create memorable digital experiences.",
    icon: Smartphone,
    bgColor: "#ffffff"
  },
  {
    title: "Mobile App Development",
    description: "Advanced, cross-platform mobile applications that meet modern user demands and business requirements.",
    icon: Smartphone,
    bgColor: "#ffffff"
  },
  {
    title: "Artificial Intelligence",
    description: "Smart AI-powered solutions to improve decision-making, automation, and personalization for your business.",
    icon: Bot,
    bgColor: "#ffffff"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive digital protection strategies to secure your data, systems, and networks from cyber threats.",
    icon: Shield,
    bgColor: "#ffffff"
  },
  {
    title: "Networking",
    description: "Reliable and robust network infrastructure solutions for seamless connectivity and business communication.",
    icon: Network,
    bgColor: "#ffffff"
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to grow engagement, brand awareness, and customer loyalty across platforms.",
    icon: Megaphone,
    bgColor: "#ffffff"
  },
  {
    title: "SEO Optimization",
    description: "Technical and content-driven SEO strategies to dominate search results and boost organic traffic growth.",
    icon: Search,
    bgColor: "#ffffff"
  },
  {
    title: "Content Marketing",
    description: "Authority-building content strategies for continuous traffic, credibility, and audience education and engagement.",
    icon: FileText,
    bgColor: "#ffffff"
  },
  {
    title: "Data Analysis",
    description: "Insight-driven decision-making powered by advanced analytics, reporting, and predictive intelligence solutions.",
    icon: BarChart3,
    bgColor: "#ffffff"
  },
  {
    title: "Google Ads Management",
    description: "ROI-focused PPC campaigns that convert clicks into customers with precision targeting and optimization.",
    icon: Globe,
    bgColor: "#ffffff"
  }
];

// Usage examples:
// You can show services on any page by importing: import { servicesData, servicesConfig } from '../Data/servicesData';
// Home Page: if (servicesConfig.showOnHomePage) { /* render services */ }
// Services Page: if (servicesConfig.showOnServicesPage) { /* render services */ }
// Any Page: if (servicesConfig.canShowOnAnyPage) { /* render services */ }