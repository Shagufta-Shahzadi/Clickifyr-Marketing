import { 
  Palette, 
  Video, 
  Code, 
  Smartphone, 
  Bot, 
  Shield, 
  Network, 
  Megaphone, 
  Search, 
  BarChart3, 
  Globe,
  Cloud,
  Edit3
} from 'lucide-react';

// Services data configuration
export const servicesConfig = {
  showOnHomePage: true,
  showOnServicesPage: true,
  canShowOnAnyPage: true // This allows you to show services on any page by importing this file
};

// Services data with Lucide React icons - Updated with all required services
export const servicesData = [
  {
    title: "Graphic Designer Service",
    description: "Creative visual designs, brand identity, and marketing materials that make your business stand out from the competition.",
    icon: Palette,
    bgColor: "#ffffff"
  },
  {
    title: "Video Editing Service",
    description: "Professional video production and editing services that create engaging content for your brand storytelling.",
    icon: Video,
    bgColor: "#ffffff"
  },
  {
    title: "UI/UX Design Service",
    description: "Intuitive, human-centered designs that enhance user satisfaction and create memorable digital experiences.",
    icon: Smartphone,
    bgColor: "#ffffff"
  },
  {
    title: "Mobile App Development Service",
    description: "Advanced, cross-platform mobile applications that meet modern user demands and business requirements.",
    icon: Smartphone,
    bgColor: "#ffffff"
  },
  {
    title: "Web Development Service",
    description: "Custom, scalable, and secure websites built for performance, speed, and user experience with modern technologies.",
    icon: Code,
    bgColor: "#ffffff"
  },
  {
    title: "Network Service",
    description: "Reliable and robust network infrastructure solutions for seamless connectivity and business communication.",
    icon: Network,
    bgColor: "#ffffff"
  },
  {
    title: "Cloud Computing Service",
    description: "Scalable cloud infrastructure solutions for data storage, computing power, and seamless business operations.",
    icon: Cloud,
    bgColor: "#ffffff"
  },
  {
    title: "Cyber Security Service",
    description: "Comprehensive digital protection strategies to secure your data, systems, and networks from cyber threats.",
    icon: Shield,
    bgColor: "#ffffff"
  },
  {
    title: "Artificial Intelligence Service",
    description: "Smart AI-powered solutions to improve decision-making, automation, and personalization for your business.",
    icon: Bot,
    bgColor: "#ffffff"
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Technical and content-driven SEO strategies to dominate search results and boost organic traffic growth.",
    icon: Search,
    bgColor: "#ffffff"
  },
  {
    title: "Google Ads Service",
    description: "ROI-focused PPC campaigns that convert clicks into customers with precision targeting and optimization.",
    icon: Globe,
    bgColor: "#ffffff"
  },
  {
    title: "Social Media Marketing Services",
    description: "Strategic social media campaigns to grow engagement, brand awareness, and customer loyalty across platforms.",
    icon: Megaphone,
    bgColor: "#ffffff"
  },
  {
    title: "Data Analysis Services",
    description: "Insight-driven decision-making powered by advanced analytics, reporting, and predictive intelligence solutions.",
    icon: BarChart3,
    bgColor: "#ffffff"
  },
  {
    title: "Blogging Services",
    description: "SEO-optimized, engaging, and persuasive blog content that builds authority, trust and drives conversions for your business.",
    icon: Edit3,
    bgColor: "#ffffff"
  }
];

// Usage examples:
// You can show services on any page by importing: import { servicesData, servicesConfig } from '../Data/servicesData';
// Home Page: if (servicesConfig.showOnHomePage) { /* render services */ }
// Services Page: if (servicesConfig.showOnServicesPage) { /* render services */ }
// Any Page: if (servicesConfig.canShowOnAnyPage) { /* render services */ }