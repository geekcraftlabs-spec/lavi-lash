"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!service) {
      alert("Please select Lashes or Nails.");
      return;
    }

    const lashesNumber = "27711734337";
    const nailsNumber = "27740289418";
    const number = service === "Lashes" ? lashesNumber : nailsNumber;

    const message = [
      `New booking via Lavi Lash & Nails website`,
      `Name: ${name} ${surname}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Service: ${service}`,
      `Notes: ${notes || "None"}`,
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    alert("Booking request sent! We'll chat on WhatsApp shortly. 💅✨");

    // Reset form
    setName("");
    setSurname("");
    setPhone("");
    setDate("");
    setService("");
    setNotes("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 pt-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] text-center mb-4">
        Book Your Appointment
      </h1>
      <p className="text-center text-[#6b5555] max-w-2xl mx-auto mb-12">
        Easy online booking – we&apos;ll confirm via WhatsApp 💖
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-[#d4a0a0]/10 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone (e.g., 0711234567)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            >
              <option value="">Select Service</option>
              <option value="Lashes">Lashes</option>
              <option value="Nails">Nails</option>
            </select>
            <textarea
              placeholder="Additional notes (e.g., preferred time, house call, wedding package)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-[#d4a0a0]/20 rounded-xl focus:ring-2 focus:ring-[#d4a0a0] outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg shadow-[#25D366]/30 animate-pulse-gentle"
            >
              Book via WhatsApp
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
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
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}