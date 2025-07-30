import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

// Slug function
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");

// Services data
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
  const navigate = useNavigate();
  const location = useLocation();

  const isFullPage = location.pathname === "/services";

  return (
    <section
      id="services"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-black"
    >
      <div className="max-w-screen-xl mx-auto text-center">

        {/* Only show back button and heading on /services route */}
        {isFullPage && (
          <>
            <div className="text-left mb-6">
              <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:underline text-sm"
              >
                ← Back
              </button>
              <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                All Services
              </h1>
            </div>
          </>
        )}

        {/* Title for homepage */}
        {!isFullPage && (
          <>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Fortynx delivers innovative solutions in Web Development and Cybersecurity to scale and protect your business.
            </p>
          </>
        )}

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900"
              }`}
              onClick={() => setActiveTab(tab as keyof typeof servicesData)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-orange-400"
              onClick={() => navigate(`/service/${slugify(service.title)}`)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900">
                  <service.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-orange-500 text-xl opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
