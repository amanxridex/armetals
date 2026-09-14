import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import PriceTicker from '@/components/ui/PriceTicker';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AR Metals | Digital B2B Metals Marketplace - Buy Aluminium, Copper, Zinc & Steel Online',
  description: "Transform your metal procurement with AR Metals; get online access to India's entire range of prime metal products across Aluminium, Copper, Zinc, Lead, Steel, Iron & Silver with live pricing and nationwide delivery.",
  keywords: 'AR Metals, metal bazaar, buy metal online, buy aluminium online, buy copper online, buy zinc online, buy steel online, TMT rebars, wire rods, continuous cast copper, LME live prices, metal marketplace India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PriceTicker />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
