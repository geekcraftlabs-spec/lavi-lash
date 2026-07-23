import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Lavi Lash and Nails – Premium Beauty in Sandton",
  description:
    "10+ years of lash extensions, nail artistry, waxing & massages in a peaceful Sandton oasis.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23d4a0a0'/><text x='50' y='72' font-family='Pacifico, cursive' font-size='44' text-anchor='middle' fill='white'>L</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },

  // ✅ Open Graph for social preview (WhatsApp, Facebook, etc.)
  openGraph: {
    title: "Lavi Lash and Nails – Premium Beauty in Sandton",
    description:
      "10+ years of lash extensions, nail artistry, waxing & massages in a peaceful Sandton oasis.",
    url: "https://lavilashandnails.co.za",
    siteName: "Lavi Lash and Nails",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://lavilashandnails.co.za/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lavi Lash and Nails – Premium Beauty in Sandton",
      },
    ],
  },

  // ✅ Twitter Card for larger preview
  twitter: {
    card: "summary_large_image",
    title: "Lavi Lash and Nails – Premium Beauty in Sandton",
    description:
      "10+ years of lash extensions, nail artistry, waxing & massages in a peaceful Sandton oasis.",
    images: ["https://lavilashandnails.co.za/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${pacifico.variable} bg-[#fdf8f6] text-[#3d2c2c] antialiased font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}