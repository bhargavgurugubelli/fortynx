import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ServiceCardSkeleton from "../components/ServiceCardSkeleton"; // <-- New import

// Import all possible icons
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

// Map icon name strings to actual Lucide icons
const iconMap: Record<string, React.ElementType> = {
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
};

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
  image: string | null;
  features: string[];
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // <-- Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const isFullPage = location.pathname === "/services";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services/`);
        const serviceData: Service[] = res.data;

        setServices(serviceData);
        const uniqueCategories = [...new Set(serviceData.map((s) => s.category))];
        setCategories(uniqueCategories);

        if (uniqueCategories.length > 0) {
          setActiveTab(uniqueCategories[0]);
        }

        setLoading(false); // ✅ Stop loading after data arrives
      } catch (error) {
        console.error("Failed to fetch services", error);
        setLoading(false); // even on error, stop loading
      }
    };

    fetchServices();
  }, []);

  // Group services by category
  const groupedServices = categories.reduce((acc, category) => {
    acc[category] = services.filter((service) => service.category === category);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <section
      id="services"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-black"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        {isFullPage ? (
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
        ) : (
          <>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Fortynx delivers innovative solutions in Web Development and Cybersecurity to scale and protect your business.
            </p>
          </>
        )}

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => <ServiceCardSkeleton key={i} />)
            : (groupedServices[activeTab] || []).map((service) => {
                const Icon = iconMap[service.icon] || Monitor;

                return (
                  <div
                    key={service.id}
                    className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-orange-400"
                    onClick={() => navigate(`/service/${service.slug}`)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900">
                        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-orange-500 text-xl opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h3>
                    {service.description ? (
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    ) : (
                      <p className="text-gray-400 text-sm italic">
                        Description coming soon...
                      </p>
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Services;
