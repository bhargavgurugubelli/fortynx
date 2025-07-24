// components/WhatsAppButton.tsx
import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "917901247450"; // Replace with your number
  const message = "Hi Fortynx, I'm interested in web development or cybersecurity services";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center animate-pulse z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.76 11.76 0 0012 0C5.37 0 0 5.37 0 12a11.88 11.88 0 001.66 6.08L0 24l6.16-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 21.5c-1.79 0-3.56-.47-5.11-1.36l-.37-.22-3.65.96.98-3.55-.24-.37A9.41 9.41 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5S21.5 6.76 21.5 12 17.24 21.5 12 21.5zm5.07-6.58c-.28-.14-1.64-.8-1.9-.89-.26-.1-.45-.14-.63.14-.18.28-.72.89-.88 1.07-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.26-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.18.05-.36-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.56-.47-.48-.63-.49H7.2c-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.17.86 2.3.98 2.46.12.16 1.7 2.6 4.12 3.65 2.42 1.05 2.42.7 2.86.66.44-.04 1.43-.59 1.63-1.17.2-.58.2-1.08.14-1.17-.06-.1-.24-.16-.52-.3z" />
      </svg>
      Chat with us
    </a>
  );
}
