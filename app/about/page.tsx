import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#e8d5d5] via-[#fdf8f6] to-[#fdf8f6]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4a0a0]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3d2c2c] leading-tight mb-4">
              About <span className="text-[#d4a0a0]">Lavi Lash &amp; Nails</span>
            </h1>
            <p className="text-[#6b5555] text-lg max-w-2xl">
              Where beauty meets peace in the heart of Sandton.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-[#d4a0a0]/10">
            <Image
              src="/images/lavi lash and nails.webp"
              alt="Peaceful beauty salon interior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3d2c2c] mb-4">
              Our Story
            </h2>
            <p className="text-[#6b5555] text-base md:text-lg mb-4">
              With over 10 years of dedicated experience, Lavi Lash and Nails has grown into Sandton&apos;s trusted destination for premium lash extensions, creative nail artistry, professional waxing, relaxing massages, and more.
            </p>
            <p className="text-[#6b5555] text-base md:text-lg mb-4">
              We proudly pioneered unique techniques like fiber nails in the area, offering standout designs that blend creativity with durability. Whether you&apos;re after a flawless full lash set, intricate nail art, smooth waxing results, or a soothing massage, our focus is always on personalized care in a calm, welcoming space.
            </p>
            <p className="text-[#6b5555] text-base md:text-lg">
              Located at <strong>31 Cowley Road, Kleve Hill Park, Sandton</strong>, our boutique is nestled in a quiet, safe, and peaceful neighborhood with a natural, serene feel — the perfect escape from the city buzz.
            </p>
          </div>
        </div>
      </section>

      {/* Values - No Emojis */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 bg-[#e8d5d5]/30 rounded-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3d2c2c] text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#d4a0a0]/10">
            <div className="text-4xl mb-3">🫶</div>
            <h3 className="font-serif text-xl font-bold text-[#3d2c2c] mb-2">Passion</h3>
            <p className="text-[#6b5555] text-sm">We love what we do and it shows in every detail.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#d4a0a0]/10">
            <div className="text-4xl mb-3">🧘</div>
            <h3 className="font-serif text-xl font-bold text-[#3d2c2c] mb-2">Peace</h3>
            <p className="text-[#6b5555] text-sm">A calm, safe environment for you to relax and unwind.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#d4a0a0]/10">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-serif text-xl font-bold text-[#3d2c2c] mb-2">Creativity</h3>
            <p className="text-[#6b5555] text-sm">Unique designs and techniques tailored to you.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#d4a0a0]/10">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-serif text-xl font-bold text-[#3d2c2c] mb-2">Trust</h3>
            <p className="text-[#6b5555] text-sm">Honest, professional service every time.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-[#d4a0a0] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Glow?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Book your appointment today and experience the Lavi Lash difference.
          </p>
          <Link href="/appointment" className="bg-white text-[#d4a0a0] px-8 py-3 rounded-full font-semibold hover:bg-[#fdf8f6] transition shadow-lg">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}