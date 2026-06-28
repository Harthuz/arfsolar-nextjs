import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ARF Solar | Energia Solar Fotovoltaica & Climatização",
  description: "Economize até 95% de energia elétrica com nossos sistemas fotovoltaicos residenciais, comerciais e industriais. Serviços de ar-condicionado e climatização desde 2006 em São Paulo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
