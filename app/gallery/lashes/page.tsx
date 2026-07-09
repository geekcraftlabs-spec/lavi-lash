import Link from "next/link";

export default function LashesGalleryPage() {
  const classicImages = [
    "classic 1.jpg", "classic 2.jpg", "classic 3.jpg",
    "classic 4.jpg", "classic 5.jpg", "classic 6.jpg",
  ];

  const volumeImages = [
    "volume 1.jpg", "volume 2.jpg", "volume 3.jpg",
    "volume 4.jpg", "volume 5.jpg", "volume 6.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="text-center py-12 md:py-16 bg-[#e8d5d5]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] mb-2">
            Our Lash Gallery
          </h1>
          <p className="text-[#6b5555] text-lg max-w-2xl mx-auto">
            Stunning classic &amp; volume extensions – handcrafted with care 💖
          </p>
        </div>
      </section>

      {/* Classic Lashes */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Classic Lashes
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Natural, elegant enhancement – perfect for everyday glamour
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {classicImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Classic lashes ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Volume Lashes */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-[#fdf8f6]">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Volume Lashes
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Full, fluffy &amp; dramatic – for that wow factor
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {volumeImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Volume lashes ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 text-center">
        <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
          Book Your Lash Appointment
        </Link>
      </section>
    </div>
  );
}