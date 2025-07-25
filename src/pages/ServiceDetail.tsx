import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/services/${slug}/`)
      .then(res => setService(res.data))
      .catch(err => console.error("Error fetching service:", err));
  }, [slug]);

  if (!service) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg mb-6">{service.description}</p>
      <a href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book a Meeting
      </a>
    </div>
  );
};

export default ServiceDetail;
