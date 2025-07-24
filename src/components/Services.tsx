import { useState } from "react";
import {
  Smartphone,
  ShoppingCart,
  Monitor,
  LayoutDashboard,
  UserCircle,
  Cloud,
  ShieldCheck,
  Network,
  Lock,
  AlertTriangle,
  Bug,
  Eye,
} from "lucide-react";

const servicesData = {
  "Web Development": [
    {
      icon: ShoppingCart,
      title: "E-commerce App Development",
      description: "Custom e-commerce solutions to grow your online store.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps with modern UI/UX.",
    },
    {
      icon: Monitor,
      title: "Website Design",
      description: "Pixel-perfect responsive website designs.",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Powerful dashboards for managing your business.",
    },
    {
      icon: UserCircle,
      title: "Portfolio Website",
      description: "Showcase your work with a sleek and professional portfolio.",
    },
    {
      icon: Cloud,
      title: "SaaS Platform Development",
      description: "Cloud-based SaaS applications tailored to your business.",
    },
  ],
  Cybersecurity: [
    {
      icon: ShieldCheck,
      title: "Penetration Testing",
      description: "Identify and fix vulnerabilities before hackers do.",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Secure your infrastructure from modern cyber threats.",
    },
    {
      icon: Lock,
      title: "Security Consulting",
      description: "Get expert advice on strengthening your security posture.",
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Stay ahead of cyber threats with actionable insights.",
    },
    {
      icon: Bug,
      title: "Malware Analysis",
      description: "Detect and analyze malware affecting your systems.",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 surveillance to detect and respond to incidents.",
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof servicesData>("Web Development");

  return (
    <section id="services" className="bg-white dark:bg-black py-12 px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We offer cutting-edge services in Web Development and Cybersecurity.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 font-semibold border-b-2 transition ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(tab as keyof typeof servicesData)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-blue-600 text-2xl">
                  →
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
