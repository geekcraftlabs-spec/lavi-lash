import Link from "next/link";

export default function Footer() {
  const socials = [
    { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/anotheronedown__" },
    { name: "TikTok", img: "tiktok.png", url: "https://www.tiktok.com/@geek.craft.labs" },
    { name: "Email", img: "email.png", url: "mailto:info@geekcraftlabs.com" },
    { name: "Phone", img: "phone.png", url: "tel:+27684858415" },
  ];

  // Split into two rows for 2x2 layout
  const topRow = socials.slice(0, 2);
  const bottomRow = socials.slice(2, 4);

  return (
    <footer className="bg-[#fdf8f6] border-t border-[#d4a0a0]/20 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-['Pacifico'] text-[#d4a0a0] mb-3">
              Lavi Lash &amp; Nails
            </h3>
            <p className="text-sm text-[#6b5555] max-w-xs mx-auto md:mx-0">
              Your peaceful Sandton oasis for stunning lashes, creative nails, and professional beauty services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#3d2c2c] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#6b5555]">
              <li><Link href="/about" className="hover:text-[#d4a0a0] transition">About</Link></li>
              <li><Link href="/pricelist" className="hover:text-[#d4a0a0] transition">Pricelist</Link></li>
              <li><Link href="/appointment" className="hover:text-[#d4a0a0] transition">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#3d2c2c] mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-[#6b5555]">
              <li><a href="tel:+27684858415" className="hover:text-[#d4a0a0] transition">+27 68 485 8415</a></li>
              <li><a href="mailto:info@geekcraftlabs.com" className="hover:text-[#d4a0a0] transition">info@geekcraftlabs.com</a></li>
              <li>31 Cowley Rd, Sandton</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#3d2c2c] mb-3">Follow Us</h4>
            {/* Top row: Instagram, TikTok */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-30 mx-auto md:mx-0">
              {topRow.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className="w-10 h-10 bg-[#d4a0a0]/10 rounded-full flex items-center justify-center hover:bg-[#d4a0a0] hover:scale-110 transition"
                  aria-label={social.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${social.img}`}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
            {/* Bottom row: Email, Phone */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-30 mx-auto md:mx-0 mt-2">
              {bottomRow.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className="w-10 h-10 bg-[#d4a0a0]/10 rounded-full flex items-center justify-center hover:bg-[#d4a0a0] hover:scale-110 transition"
                  aria-label={social.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${social.img}`}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#d4a0a0]/10 mt-8 pt-6 text-center text-xs text-[#6b5555]">
          <p>&copy; {new Date().getFullYear()} Lavi Lash and Nails. All rights reserved.</p>
          <p className="mt-1">Beautiful lashes, beautiful you. 💖</p>
        </div>
      </div>
    </footer>
  );
}