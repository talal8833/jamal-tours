import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Local tours data used for detail pages.
// Edit names, slugs, images, descriptions, price, duration, and location here.
// NOTE about prior 404 issue:
// If the tours array here did not match the one used on the listing page
// (app/tours/page.tsx), navigating to /tours/[slug] would fail the lookup
// and call notFound(), causing a 404. Additionally, in static builds, not
// providing generateStaticParams can lead to missing pages if slugs aren't
// known at build time. We fix both by:
// 1) Ensuring the tours data matches the listing page exactly.
// 2) Exporting generateStaticParams() so Next prebuilds all valid [slug] pages.
const tours = [
  {
    name: "Desert Safari Adventure",
    slug: "desert-safari-adventure",
    image: "/images/tour-desert.jfif", // Replace with a real image under /public/images when available
    price: "From $120",
    duration: "Duration: 1 Day",
    location: "Location: Wahiba Sands, Oman",
    longDescription: [
      "Embark on a thrilling journey across the golden dunes and witness the breathtaking colors of the desert at sunset.",
      "Enjoy exhilarating dune bashing, serene photo stops, and a chance to experience the tranquil beauty of the desert landscape.",
      "This tour can be tailored to your preferences, from relaxed sightseeing to heart-pounding adventure.",
    ],
  },
  {
    name: "Mountain Hiking Experience",
    slug: "mountain-hiking-experience",
    image: "/images/tour-mountain.jpg",
    price: "From $150",
    duration: "Duration: 1 Day",
    location: "Location: Jebel Akhdar, Oman",
    longDescription: [
      "Discover rugged trails and panoramic viewpoints as you hike through dramatic mountain scenery.",
      "We'll tailor the pace and route to your fitness level, ensuring both comfort and unforgettable vistas.",
    ],
  },
  {
    name: "Wadi Swimming Escape",
    slug: "wadi-swimming-escape",
    image: "/images/tour-wadi.svg",
    price: "From $90",
    duration: "Duration: Half Day",
    location: "Location: Wadi Shab, Oman",
    longDescription: [
      "Swim in crystal-clear pools and wander through lush canyon pathways in one of Oman's most beloved wadis.",
      "Perfect for cooling off and enjoying the natural beauty of turquoise waters and shaded oases.",
    ],
  },
  {
    name: "Coastal Sunset Cruise",
    slug: "coastal-sunset-cruise",
    image: "/images/tour-coast.svg",
    price: "From $110",
    duration: "Duration: 2-3 Hours",
    location: "Location: Muscat Coast, Oman",
    longDescription: [
      "Sail along the coastline and watch the sky transform as the sun dips below the horizon.",
      "Capture stunning photos and relax with the gentle sea breeze for a perfect end to the day.",
    ],
  },
  {
    name: "Cultural Muscat City Tour",
    slug: "cultural-muscat-city-tour",
    image: "/images/tour-city.svg",
    price: "From $80",
    duration: "Duration: Half Day",
    location: "Location: Muscat, Oman",
    longDescription: [
      "Explore heritage sites, vibrant souqs, and the architectural charm that defines Muscat's unique character.",
      "A balanced introduction to history, culture, and everyday life in Oman's capital.",
    ],
  },
  {
    name: "Cave Exploration Journey",
    slug: "cave-exploration-journey",
    image: "/images/tour-cave.svg",
    price: "From $140",
    duration: "Duration: 1 Day",
    location: "Location: Al Hoota Cave, Oman",
    longDescription: [
      "Venture into dramatic caverns and discover fascinating rock formations shaped over millennia.",
      "An immersive look at Oman's subterranean wonders, ideal for curious explorers and photographers alike.",
    ],
  },
];

type Props = {
  params: { slug: string };
};

export default async function TourDetailPage({ params }: Props) {
  // Find the tour by the dynamic route param
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug);

  // If no tour is found, render the 404 page
  if (!tour) return notFound();

  // WhatsApp booking link (replace phone with your real WhatsApp number)
  const waPhone = "968XXXXXXXX"; // <-- Edit your WhatsApp number here
  const waText = `Hi Jamal, I'm interested in the ${tour.name} tour.`; // <-- Edit default message
  const whatsAppUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    waText
  )}`;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Image: replace with a real image under /public/images */}
      <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Title */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-emerald-700">{tour.name}</h1>
      </header>

      {/* Content Grid: main description + side info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content: 2 columns */}
        <section className="lg:col-span-2">
          {/* Long description paragraphs (edit text above in the tours array) */}
          {tour.longDescription.map((p, idx) => (
            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        {/* Side panel: Tour Info */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Tour Info
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-medium text-gray-900">Price:</span>{" "}
                {tour.price}
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  {tour.duration}
                </span>
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  {tour.location}
                </span>
              </li>
            </ul>

            {/* Booking button: opens WhatsApp with a pre-filled message */}
            <Link
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-white font-medium hover:bg-emerald-800 transition"
            >
              Book Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Pre-generate static params for all known tours so detail pages
// resolve correctly in static builds and avoid unexpected 404s.
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}
