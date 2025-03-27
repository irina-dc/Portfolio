import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "./globals.css"; 
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio de Irina",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-gray-100 ${montserrat.className}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}