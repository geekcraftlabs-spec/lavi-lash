"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");

  // WhatsApp numbers
  const preciousNumber = "27711734337"; // Precious
  const faithNumber = "27740289418";    // Faith

  // Service → contact mapping
  const serviceContactMap: Record<string, { name: string; number: string }> = {
    Lashes: { name: "Precious", number: preciousNumber },
    Nails: { name: "Faith", number: faithNumber },
    Massage: { name: "Faith", number: faithNumber },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!service) {
      alert("Please select a service.");
      return;
    }

    const contact = serviceContactMap[service];
    if (!contact) {
      alert("Service not recognized.");
      return;
    }

    const message = [
      `New booking via Lavi Lash & Nails website`,
      `Name: ${name} ${surname}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Service: ${service}`,
      `Notes: ${notes || "None"}`,
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${contact.number}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    alert(`Booking request sent to ${contact.name}! We'll chat on WhatsApp shortly. 💅✨`);

    setName("");
    setSurname("");
    setPhone("");
    setDate("");
    setService("");
    setNotes("");
  };

  const handleWhatsAppClick = (serviceType: string) => {
    const contact = serviceContactMap[serviceType];
    if (!contact) return;
    const defaultMessage = `Hi ${contact.name}! I'd like to book a ${serviceType} appointment.`;
    const url = `https://api.whatsapp.com/send?phone=${contact.number}&text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 pt-20" suppressHydrationWarning>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] text-center mb-4">
        Book Your Appointment
      </h1>
      <p className="text-center text-[#6b5555] max-w-2xl mx-auto mb-12">
        Easy online booking – we&apos;ll confirm via WhatsApp 💖
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-[#d4a0a0]/10 space-y-4" suppressHydrationWarning>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            />
            <input
              type="tel"
              placeholder="Phone (e.g., 0711234567)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            >
              <option value="">Select Service</option>
              <option value="Lashes">Lashes</option>
              <option value="Nails">Nails</option>
              <option value="Massage">Massage</option>
            </select>
            <textarea
              placeholder="Additional notes (e.g., preferred time, house call, wedding package)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
              suppressHydrationWarning
            />

            {/* Submit button – shows contact name dynamically */}
            <button
              type="submit"
              className="group relative w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
                <span className="text-xs font-normal opacity-80 ml-1">
                  {service ? `(${serviceContactMap[service]?.name || "..."})` : "(select service)"}
                </span>
              </span>
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              {service ? (
                `You'll chat with ${serviceContactMap[service]?.name || "..."} 💬`
              ) : (
                "Select a service to see who will assist you"
              )}
            </p>
          </form>
        </div>

        {/* Right side: Contact Cards (unchanged) */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#3d2c2c] text-center mb-6">
            Book Directly via WhatsApp
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Precious Card */}
            <div 
              className="group relative bg-white/90 border border-[#d4a0a0]/20 backdrop-blur-xl rounded-3xl p-6 text-center hover:border-rose-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer shadow-md"
            >
              <div className="absolute inset-0 bg-linear-to-br from-rose-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-20 bg-linear-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-rose-500/30">
                    <span className="text-3xl text-white font-bold">P</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2c2c] group-hover:text-rose-500 transition">Precious</h3>
                <p className="text-[#6b5555] text-sm mt-1">Handles: <span className="font-medium">Lashes &amp; Nails</span></p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="inline-block bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full">Lashes</span>
                  <span className="inline-block bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full">Nails</span>
                </div>
                <p className="text-rose-500 text-sm font-medium mt-3">+27 71 173 4337</p>
                <div className="mt-4 flex justify-center gap-3">
                  <button 
                    onClick={() => handleWhatsAppClick("Lashes")}
                    className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#128C7E] transition shadow-md"
                  >
                    💬 Lashes
                  </button>
                  <button 
                    onClick={() => handleWhatsAppClick("Nails")}
                    className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#128C7E] transition shadow-md"
                  >
                    💬 Nails
                  </button>
                </div>
                <p className="text-[#d4a0a0] text-xs mt-3">Click a button to message Precious</p>
              </div>
            </div>

            {/* Faith Card */}
            <div 
              className="group relative bg-white/90 border border-[#d4a0a0]/20 backdrop-blur-xl rounded-3xl p-6 text-center hover:border-teal-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer shadow-md"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-20 bg-linear-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                    <span className="text-3xl text-white font-bold">F</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2c2c] group-hover:text-teal-500 transition">Faith</h3>
                <p className="text-[#6b5555] text-sm mt-1">Handles: <span className="font-medium">Nails &amp; Massages</span></p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="inline-block bg-teal-100 text-teal-600 text-xs px-3 py-1 rounded-full">Nails</span>
                  <span className="inline-block bg-teal-100 text-teal-600 text-xs px-3 py-1 rounded-full">Massage</span>
                </div>
                <p className="text-teal-500 text-sm font-medium mt-3">+27 74 028 9418</p>
                <div className="mt-4 flex justify-center gap-3">
                  <button 
                    onClick={() => handleWhatsAppClick("Nails")}
                    className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#128C7E] transition shadow-md"
                  >
                    💬 Nails
                  </button>
                  <button 
                    onClick={() => handleWhatsAppClick("Massage")}
                    className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#128C7E] transition shadow-md"
                  >
                    💬 Massage
                  </button>
                </div>
                <p className="text-[#d4a0a0] text-xs mt-3">Click a button to message Faith</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8">
            <h3 className="font-serif text-2xl font-bold text-[#3d2c2c] text-center mb-4">
              Our Location
            </h3>
            <p className="text-center text-[#6b5555] mb-4">
              31 Cowley Road, Kleve Hill Park, Sandton
            </p>
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#d4a0a0]/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.471300389132!2d28.0359217!3d-26.038577399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573ef4db4a797%3A0x7166420db986e99a!2s31%20Cowley%20Rd%2C%20Kleve%20Hill%20Park%2C%20Sandton%2C%202191!5e1!3m2!1sen!2sza!4v1769597620824!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}