import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
title: {
    template: "%s - Arbree Mart Online Store", 
    default: "Arbree Mart", 
  },
  description: "Building ecommerce website with nextjs and tailwindcss. learned about shadcn ui. Stay tuned for more updates!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className="font-poppins antialiased">
        <Header />
        {children}
       <Footer />
      </body>
    </html>
  );
}
