import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jamal Tours | Certified Tour Guide in Oman",
  description:
    "Explore the beauty of Oman with Jamal, a certified local tour guide offering unique, private, and unforgettable adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
