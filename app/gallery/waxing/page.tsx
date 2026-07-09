import Link from "next/link";

export default function WaxingGalleryPage() {
  const legImages = [
    "leg wax 1.jpg", "leg wax 2.jpg", "leg wax 3.jpg",
    "leg wax 4.jpg", "leg wax 5.jpg", "leg wax 6.jpg",
  ];

  const armImages = [
    "arm wax 1.jpg", "arm wax 2.jpg", "arm wax 3.jpg",
    "arm wax 4.jpg", "arm wax 5.jpg",
  ];

  const faceImages = [
    "face wax 1.jpg", "face wax 2.jpg", "face wax 3.jpg",
    "face wax 4.jpg", "face wax 5.jpg", "face wax 6.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="text-center py-12 md:py-16 bg-[#e8d5d5]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] mb-2">
            Our Waxing Gallery
          </h1>
          <p className="text-[#6b5555] text-lg max-w-2xl mx-auto">
            Gentle, professional waxing for smooth, glowing skin – legs, arms &amp; face 💖
          </p>
        </div>
      </section>

      {/* Leg Waxing */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Leg Waxing
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Full leg or half leg – silky smooth results that last
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {legImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Leg waxing ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Arm Waxing */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-[#fdf8f6]">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Arm Waxing
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Smooth, hair-free arms – quick &amp; comfortable
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {armImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Arm waxing ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Face Waxing */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3d2c2c] text-center mb-2">
          Face Waxing
        </h2>
        <p className="text-center text-[#6b5555] text-sm mb-8">
          Brows, upper lip, chin &amp; more – precise shaping for a fresh look
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {faceImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-3/4 bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${img}`}
                alt={`Face waxing ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
            Book Your Waxing Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}