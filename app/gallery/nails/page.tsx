import Link from "next/link";

export default function NailsGalleryPage() {
  const acrylicImages = [
    "acrylic 1.jpg", "acrylic 2.jpg", "acrylic 3.jpg",
    "acrylic 4.jpg", "acrylic 5.jpg", "acrylic 6.jpg",
    "acrylic 7.jpg", "acrylic 8.jpg",
  ];

  const overlayImages = [
    "overlay 1.jpg", "overlay 2.jpg", "overlay 3.jpg",
    "overlay 4.jpg", "overlay 5.jpg", "overlay 6.jpg",
    "overlay 7.jpg", "overlay 8.jpg",
  ];

  const gelishImages = [
    "gelish 1.jpg", "gelish 2.jpg", "gelish  3.jpg",
    "gelish 4.jpg", "gelish 5.jpg", "gelish 6.jpg",
    "gelish 7.jpg", "gelish 8.jpg",
  ];

  const polishImages = [
    "polish 1.jpg", "polish 2.jpg", "polish 3.jpg",
    "polish 4.jpg", "polish 5.jpg", "polish 6.jpg",
    "polish 7.jpg", "polish 8.jpg",
  ];

  const fibreImages = [
    "fibre 1.jpg", "fibre 2.jpg", "fibre 3.jpg",
    "fibre 4.jpg", "fibre 5.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="text-center py-12 md:py-16 bg-[#e8d5d5]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] mb-2">
            Our Nails Gallery
          </h1>
          <p className="text-[#6b5555] text-lg max-w-2xl mx-auto">
            Creative sets, overlays, gels, polishes &amp; our signature fibre nails – 10+ years of artistry 💅✨
          </p>
        </div>
      </section>

      {/* Acrylic / Polygel */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Acrylic / Polygel
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Durable full sets &amp; extensions – bold shapes, intricate designs &amp; long-lasting strength
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {acrylicImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Acrylic nails ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Overlays */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-[#fdf8f6]">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Overlays Acrylic / Polygel
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Strengthening &amp; natural-looking enhancement on your own nails – subtle yet strong
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {overlayImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Overlay nails ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gelish */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Gelish
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Long-wear gel polish – glossy, chip-resistant &amp; vibrant colors
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gelishImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Gelish nails ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Polish */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-[#fdf8f6]">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Polish
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Classic regular polish – quick, fun colors &amp; easy removal
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {polishImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Polish nails ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fibre Nails */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Fibre Nails
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Our signature lightweight, super-strong fiberglass technique – innovative &amp; unique
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fibreImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Fibre nails ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
            Book Your Nails Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}