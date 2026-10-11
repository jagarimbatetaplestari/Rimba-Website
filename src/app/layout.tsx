import type { Metadata, Viewport } from 'next';
import { Poppins, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rimba — 3D Mindful Focus Sanctuary',
  description: 'Cultivate peace of mind and grow a living 3D diorama island through mindful focus sessions.',
  icons: {
    icon: '/logo-web.png',
    apple: '/logo-web.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${sourceSerif.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen w-full font-display text-[#0D3528] bg-[#FAFBF9] selection:bg-[#187557]/15 selection:text-[#0D3528]">
        {children}
      </body>
    </html>
  );
}
