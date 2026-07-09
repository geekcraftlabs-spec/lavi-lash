import Link from "next/link";

export default function PricelistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 pt-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2c2c] text-center mb-4">
        Pricelist
      </h1>
      <p className="text-center text-[#6b5555] max-w-2xl mx-auto mb-12">
        Transparent pricing for your beauty treatments 💖✨
      </p>

      {/* N A I L S */}
      <h2 className="font-serif text-3xl font-bold text-[#d4a0a0] text-center mb-6">
        NAILS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Acrylic / Polygel
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Tips Clear / French</span><span className="font-semibold text-[#3d2c2c]">R400</span></li>
            <li className="flex justify-between"><span>Tips &amp; gelish</span><span className="font-semibold text-[#3d2c2c]">R420</span></li>
            <li className="flex justify-between"><span>Tips &amp; Ombre</span><span className="font-semibold text-[#3d2c2c]">R450</span></li>
            <li className="flex justify-between"><span>Sculptured nails</span><span className="font-semibold text-[#3d2c2c]">R450</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Overlays
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Overlay &amp; gelish</span><span className="font-semibold text-[#3d2c2c]">R400</span></li>
            <li className="flex justify-between"><span>Ombre overlay</span><span className="font-semibold text-[#3d2c2c]">R400</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Fills
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Clear fill</span><span className="font-semibold text-[#3d2c2c]">R350</span></li>
            <li className="flex justify-between"><span>Fill &amp; gelish paint</span><span className="font-semibold text-[#3d2c2c]">R370</span></li>
            <li className="flex justify-between"><span>Ombre fill</span><span className="font-semibold text-[#3d2c2c]">R370</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Gelish
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Gelish paint</span><span className="font-semibold text-[#3d2c2c]">R270</span></li>
            <li className="flex justify-between"><span>Gelish Ombre</span><span className="font-semibold text-[#3d2c2c]">R300</span></li>
            <li className="flex justify-between"><span>Manicure &amp; gelish</span><span className="font-semibold text-[#3d2c2c]">R330</span></li>
            <li className="flex justify-between"><span>Mini pedi &amp; gelish</span><span className="font-semibold text-[#3d2c2c]">R350</span></li>
            <li className="flex justify-between"><span>Full pedi &amp; gelish</span><span className="font-semibold text-[#3d2c2c]">R370</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Polish
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Buff &amp; shine</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>File buff &amp; paint</span><span className="font-semibold text-[#3d2c2c]">R100</span></li>
            <li className="flex justify-between"><span>Manicure no paint</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Manicure &amp; paint</span><span className="font-semibold text-[#3d2c2c]">R250</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Pedicure
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>no paint</span><span className="font-semibold text-[#3d2c2c]">R270</span></li>
            <li className="flex justify-between"><span>Pedicure &amp; paint</span><span className="font-semibold text-[#3d2c2c]">R300</span></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Soak Off
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Gelish</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>Acrylic</span><span className="font-semibold text-[#3d2c2c]">R70</span></li>
            <li className="flex justify-between"><span>Soak off only</span><span className="font-semibold text-[#3d2c2c]">R100</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Massages
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>15 minutes</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>30 minutes</span><span className="font-semibold text-[#3d2c2c]">R220</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Fibre Nails
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Tips French/Clear</span><span className="font-semibold text-[#3d2c2c]">R400</span></li>
            <li className="flex justify-between"><span>Tips &amp; Gelish</span><span className="font-semibold text-[#3d2c2c]">R430</span></li>
            <li className="flex justify-between"><span>Overlay &amp; Gelish</span><span className="font-semibold text-[#3d2c2c]">R400</span></li>
            <li className="flex justify-between"><span>Overlays</span><span className="font-semibold text-[#3d2c2c]">R350</span></li>
            <li className="flex justify-between"><span>Fibre fill &amp; Gelish</span><span className="font-semibold text-[#3d2c2c]">R350</span></li>
            <li className="flex justify-between"><span>Fibre Fill</span><span className="font-semibold text-[#3d2c2c]">R150</span></li>
            <li className="flex justify-between"><span>Soak off</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-[#6b5555] mb-12">
        **Nail Art – R20**
      </p>

      {/* LASHES */}
      <h2 className="font-serif text-3xl font-bold text-[#d4a0a0] text-center mb-6">
        LASHES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Volume
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Full set</span><span className="font-semibold text-[#3d2c2c]">R730</span></li>
            <li className="flex justify-between"><span>2 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R420</span></li>
            <li className="flex justify-between"><span>3 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R470</span></li>
            <li className="flex justify-between"><span>4 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R520</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Classic
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Full set</span><span className="font-semibold text-[#3d2c2c]">R630</span></li>
            <li className="flex justify-between"><span>2 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R370</span></li>
            <li className="flex justify-between"><span>3 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R420</span></li>
            <li className="flex justify-between"><span>4 weeks fill</span><span className="font-semibold text-[#3d2c2c]">R470</span></li>
          </ul>
        </div>
      </div>

      {/* WAXING */}
      <h2 className="font-serif text-3xl font-bold text-[#d4a0a0] text-center mb-6">
        WAXING
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Ladies Waxing
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Hollywood</span><span className="font-semibold text-[#3d2c2c]">R300</span></li>
            <li className="flex justify-between"><span>Brazilian</span><span className="font-semibold text-[#3d2c2c]">R250</span></li>
            <li className="flex justify-between"><span>Bikini</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Full leg</span><span className="font-semibold text-[#3d2c2c]">R250</span></li>
            <li className="flex justify-between"><span>3/4 leg</span><span className="font-semibold text-[#3d2c2c]">R220</span></li>
            <li className="flex justify-between"><span>1/2 leg</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Full arm</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Half arm</span><span className="font-semibold text-[#3d2c2c]">R150</span></li>
            <li className="flex justify-between"><span>Under arms</span><span className="font-semibold text-[#3d2c2c]">R100</span></li>
            <li className="flex justify-between"><span>Brows</span><span className="font-semibold text-[#3d2c2c]">R60</span></li>
            <li className="flex justify-between"><span>Upper lip</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>Chin</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>Nose</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>Full face</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <h3 className="font-serif text-xl font-bold text-[#3d2c2c] text-center mb-4 border-b border-[#d4a0a0]/20 pb-3">
            Gents Waxing
          </h3>
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Stomach</span><span className="font-semibold text-[#3d2c2c]">R120</span></li>
            <li className="flex justify-between"><span>Chest</span><span className="font-semibold text-[#3d2c2c]">R180</span></li>
            <li className="flex justify-between"><span>Full leg</span><span className="font-semibold text-[#3d2c2c]">R250</span></li>
            <li className="flex justify-between"><span>1/2 leg</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Back wax</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Full arm</span><span className="font-semibold text-[#3d2c2c]">R200</span></li>
            <li className="flex justify-between"><span>Half arm</span><span className="font-semibold text-[#3d2c2c]">R180</span></li>
          </ul>
        </div>
      </div>

      {/* GENTS TREATMENTS */}
      <h2 className="font-serif text-3xl font-bold text-[#d4a0a0] text-center mb-6">
        GENTS TREATMENTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Gents pedicure</span><span className="font-semibold text-[#3d2c2c]">R300</span></li>
            <li className="flex justify-between"><span>Gents manicure</span><span className="font-semibold text-[#3d2c2c]">R250</span></li>
          </ul>
        </div>
      </div>

      {/* KIDS */}
      <h2 className="font-serif text-3xl font-bold text-[#d4a0a0] text-center mb-6">
        KIDS TREATMENTS <span className="text-sm font-normal text-[#6b5555]">(Under 12)</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#d4a0a0]/10 hover:shadow-xl transition">
          <ul className="space-y-2 text-[#6b5555]">
            <li className="flex justify-between"><span>Paint only</span><span className="font-semibold text-[#3d2c2c]">R50</span></li>
            <li className="flex justify-between"><span>Manicure</span><span className="font-semibold text-[#3d2c2c]">R80</span></li>
            <li className="flex justify-between"><span>Pedicure</span><span className="font-semibold text-[#3d2c2c]">R120</span></li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link href="/appointment" className="bg-[#d4a0a0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49494] transition shadow-lg shadow-[#d4a0a0]/30">
          Book Your Appointment
        </Link>
      </div>
    </div>
  );
}