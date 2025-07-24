
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have questions or want to work with us? We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="text-blue-600" size={20} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="text-blue-600" size={20} />
            <span>support@fortynx.in</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-blue-600" size={20} />
            <span>Hyderabad, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
