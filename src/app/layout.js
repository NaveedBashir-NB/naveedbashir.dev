import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Naveed Bashir | Full Stack Developer & Web Designer",
  description: "Looking for an experienced React, Next.js, & WordPress developer? High-performance, SEO-friendly & responsive websites. Take a look at my latest projects!",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="mx-auto ">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
