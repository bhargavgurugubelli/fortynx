import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Nav";

// ✅ Get base URL from env
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/services/${slug}/`)
      .then((res) => setService(res.data))
      .catch((err) => console.error("Error fetching service:", err));
  }, [slug]);

  if (!service) {
    return <div className="text-center p-10 text-gray-600">Loading service details...</div>;
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="mt-32 px-6 max-w-6xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:underline text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:underline text-blue-600">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 font-semibold">{service.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row-reverse items-start gap-8">
              <div className="md:w-1/2 w-full">
                <img
                  src={`${BASE_URL}${service.image}`}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <div className="flex justify-center mt-6">
                  <a
                    href="/book-meeting"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
                  >
                    📅 Book a Free Demo Now
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 w-full space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">{service.name}</h1>
                <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>

                {Array.isArray(service.key_benefits) && service.key_benefits.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-6">✨ Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {service.key_benefits.map((benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start gap-3"
                        >
                          <span className="text-yellow-500 text-xl">💡</span>
                          <span className="text-gray-800">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
