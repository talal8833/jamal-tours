import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Car, Sparkles, MapPin } from "lucide-react";

// NOTE: This homepage is a UI-only implementation.
// - Replace placeholder images and texts where marked in comments.
// - Keep spacing consistent using: max-w-6xl mx-auto px-6

// Popular tours preview (edit items as needed)
const popularTours = [
  {
    name: "Desert Safari Adventure",
    slug: "desert-safari-adventure",
    price: "From $120",
    image: "/images/tour-desert.jfif", // Replace with a real image later
  },
  {
    name: "Mountain Hiking Experience",
    slug: "mountain-hiking-experience",
    price: "From $150",
    image: "/images/tour-mountain.jpg",
  },
  {
    name: "Wadi Swimming Escape",
    slug: "wadi-swimming-escape",
    price: "From $90",
    image: "/images/tour-wadi.svg",
  },
];

// Reviews preview (3 items). For full list, see app/reviews/page.tsx
const reviews = [
  {
    name: "Sarah M.",
    text: "Absolutely fantastic experience! Jamal tailored the tour to our interests and showed us hidden gems.",
    rating: 5,
  },
  {
    name: "Omar A.",
    text: "Professional, friendly, and very knowledgeable about the local culture. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lena K.",
    text: "The mountain views were breathtaking and the pacing was perfect for our group.",
    rating: 5,
  },
];

function Stars({ value }: { value: number }) {
  const v = Math.min(5, Math.max(0, value));
  return (
    <span className="text-amber-500" aria-label={`${v} out of 5 stars`}>
      {"⭐".repeat(v)}
      <span className="text-gray-300">{"☆".repeat(5 - v)}</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section: background image with overlay */}
      {/* Replace the placeholder path with a real hero image in public/images/hero-oman.jpg */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/hero-oman.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow">
            Discover Oman with Jamal
          </h1>
          <p className="mt-4 max-w-2xl text-white/95 drop-shadow">
            Authentic adventures and guided tours across Oman with a licensed
            local expert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center rounded-lg bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition"
            >
              Explore Tours
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white/90 text-emerald-700 px-6 py-3 font-medium hover:bg-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-emerald-700">Meet Jamal</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          {/* Edit this intro text to add your personal story and guiding ethos. */}
          With years of experience as a certified local guide, I design
          authentic journeys that reveal Oman’s culture, landscapes, and hidden
          gems. Each tour is tailored to your interests and pace.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center rounded-lg border border-emerald-700 text-emerald-700 px-5 py-2.5 hover:bg-emerald-50 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Popular Tours Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-emerald-700">Popular Tours</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTours.map((tour) => (
            <article
              key={tour.slug}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow transition"
            >
              <div className="relative h-40 w-full">
                {/* Replace image paths when real images are available */}
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tour.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-emerald-700 font-medium">
                    {tour.price}
                  </span>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/tours"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-gray-800 hover:bg-gray-50 transition"
          >
            View All Tours
          </Link>
        </div>
      </section>

      {/* Why Choose Jamal Tours */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-emerald-700">
          Why Travel with Jamal?
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <ShieldCheck className="text-emerald-700" />
            <p className="mt-3 font-medium text-gray-900">
              Licensed & Experienced Guide
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Certified local expert with years of guiding experience.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <Car className="text-emerald-700" />
            <p className="mt-3 font-medium text-gray-900">
              Comfortable Transportation
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Clean, safe, and comfortable rides for every journey.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <Sparkles className="text-emerald-700" />
            <p className="mt-3 font-medium text-gray-900">
              Personalized Experiences
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Tailor-made tours to match your interests and pace.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <MapPin className="text-emerald-700" />
            <p className="mt-3 font-medium text-gray-900">
              Hidden Gems & Local Insights
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Discover places only locals know and love.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-emerald-700">
          Traveler Testimonials
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div className="text-gray-900 font-medium">{r.name}</div>
              </div>
              <div className="mt-3">
                <Stars value={r.rating} />
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  {r.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/reviews"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-gray-800 hover:bg-gray-50 transition"
          >
            See All Reviews
          </Link>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to explore Oman?
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          {/* Update the WhatsApp number below with your real number */}
          Get in touch and let’s plan your perfect itinerary with Jamal Tours.
        </p>
        <a
          href={`https://wa.me/968XXXXXXXX?text=${encodeURIComponent(
            "Hi Jamal, I'm interested in booking a tour."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-700 px-7 py-3 text-white font-medium hover:bg-emerald-800 transition"
        >
          Book Your Tour Now
        </a>
      </section>
    </main>
  );
}
