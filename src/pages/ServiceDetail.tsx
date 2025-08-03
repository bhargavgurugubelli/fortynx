import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Nav";
import ServiceDetailSkeleton from "../components/ServiceDetailSkeleton";

const API_BASE = (import.meta.env.VITE_API_URL || "https://api.fortynx.in").replace(/\/$/, "");

interface Feature {
  text: string;
}

interface ServiceType {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string | null;
  features: Feature[];
  category: string;
}

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    setLoading(true);

    axios
      .get<ServiceType>(`${API_BASE}/api/services/${slug}/`)
      .then((res) => {
        if (!cancelled) {
          setService(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Error fetching service:", err);
          setError("Failed to load service.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <>
      <Navbar />

      {loading ? (
        <ServiceDetailSkeleton />
      ) : error ? (
        <div className="text-center p-10 text-red-500">{error}</div>
      ) : !service ? (
        <div className="text-center p-10 text-gray-600">Service not found.</div>
      ) : (
        <div className="px-6 max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:underline text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:underline text-blue-600">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-gray-700 font-semibold">
              {service.title}
            </span>
          </nav>

          {/* Service Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>

            {service.features?.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">✨ Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {service.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start gap-3"
                    >
                      <span className="text-yellow-500 text-xl">💡</span>
                      <span className="text-gray-800">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <a
                href="/book-meeting"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
              >
                📅 Book a Free Demo Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetail;
