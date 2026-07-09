import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const services = [
    { 
      name: "Lash Extensions", 
      desc: "Classic, volume & hybrid – natural to dramatic", 
      href: "/gallery/lashes",
      image: "/images/lashes home page.jpg",
      alt: "Lash Extensions"
    },
    { 
      name: "Nail Artistry", 
      desc: "Acrylic, polygel, fibre nails – 10+ years expertise", 
      href: "/gallery/nails",
      image: "/images/nails home page.jpg",
      alt: "Nail Artistry"
    },
    { 
      name: "Waxing & Massage", 
      desc: "Professional waxing, relaxing massages & more", 
      href: "/gallery/waxing",
      image: "/images/wax home page.jpg",
      alt: "Waxing & Massage"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#e8d5d5] via-[#fdf8f6] to-[#fdf8f6]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4a0a0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#e8d5d5]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#d4a0a0]/15 text-[#d4a0a0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                💖 Sandton&apos;s Beauty Oasis
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3d2c2c] leading-tight mb-4">
                Beautiful Lashes,
                <br />
                <span className="text-[#d4a0a0]">Beautiful You</span>
              </h1>
              <p className="text-[#6b5555] text-lg max-w-lg mb-8">
                Over 10 years of dedicated experience in premium lash extensions, creative nail artistry, professional waxing, and relaxing massages – all in a peaceful Sandton oasis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
                  Book Now
                </Link>
                <Link href="/about" className="border-2 border-[#d4a0a0] text-[#d4a0a0] px-6 py-3 rounded-full font-semibold hover:bg-[#d4a0a0] hover:text-white transition">
                  About Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-white/50 animate-pulse-gentle">
                <div className="text-3xl mb-2">🏆</div>
                <p className="font-bold text-[#3d2c2c] text-lg">10+</p>
                <p className="text-[#6b5555] text-sm">Years Experience</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-white/50 animate-pulse-gentle-delay-1">
                <div className="text-3xl mb-2">💖</div>
                <p className="font-bold text-[#3d2c2c] text-lg">100%</p>
                <p className="text-[#6b5555] text-sm">Client Satisfaction</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-white/50 animate-pulse-gentle-delay-2 col-span-2">
                <div className="text-3xl mb-2">📍</div>
                <p className="font-bold text-[#3d2c2c] text-sm">31 Cowley Road</p>
                <p className="text-[#6b5555] text-sm">Kleve Hill Park, Sandton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Images */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3d2c2c] text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-[#6b5555] max-w-2xl mx-auto mb-12">
          From stunning lashes to creative nail art and professional waxing – we&apos;ve got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.name} href={service.href}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-2">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#3d2c2c] mb-2">{service.name}</h3>
                  <p className="text-[#6b5555] text-sm">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Location CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <div className="bg-[#e8d5d5] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] mb-4">
            Visit Our Peaceful Oasis
          </h2>
          <p className="text-[#6b5555] max-w-2xl mx-auto mb-6">
            31 Cowley Road, Kleve Hill Park, Sandton – nestled in a quiet, safe, and peaceful neighborhood.
          </p>
          <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}