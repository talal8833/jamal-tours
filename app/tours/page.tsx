import Image from "next/image";
import Link from "next/link";

// Data: list of tours used to render cards
// You can edit names, slugs, descriptions, prices, and images below.
const tours = [
  {
    name: "Desert Safari Adventure",
    slug: "desert-safari-adventure",
    description:
      "Experience the golden dunes, thrilling rides, and serene desert sunsets.",
    price: "From $120",
    image: "/images/tour-desert.jfif", // Replace with a real image when available
  },
  {
    name: "Mountain Hiking Experience",
    slug: "mountain-hiking-experience",
    description:
      "Trek stunning mountain trails and discover panoramic views of Oman.",
    price: "From $150",
    image: "/images/tour-mountain.jpg",
  },
  {
    name: "Wadi Swimming Escape",
    slug: "wadi-swimming-escape",
    description: "Swim in crystal-clear pools and explore lush wadi canyons.",
    price: "From $90",
    image: "/images/tour-wadi.svg",
  },
  {
    name: "Coastal Sunset Cruise",
    slug: "coastal-sunset-cruise",
    description: "Sail along the coast and enjoy a breathtaking sunset at sea.",
    price: "From $110",
    image: "/images/tour-coast.svg",
  },
  {
    name: "Cultural Muscat City Tour",
    slug: "cultural-muscat-city-tour",
    description:
      "Discover heritage sites, local markets, and the charm of Muscat.",
    price: "From $80",
    image: "/images/tour-city.svg",
  },
  {
    name: "Cave Exploration Journey",
    slug: "cave-exploration-journey",
    description: "Venture into hidden caves and witness remarkable formations.",
    price: "From $140",
    image: "/images/tour-cave.svg",
  },
];

export default function ToursPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading and short description */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-emerald-700">
          Discover My Tours
        </h1>
        <p className="mt-3 text-gray-700">
          Browse a selection of curated tours across Oman. Each experience can
          be tailored to your interests and schedule.
        </p>
      </header>

      {/* Grid of tour cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <article
            key={tour.slug}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow transition"
          >
            {/* Tour Image (replace the placeholder SVG in /public/images) */}
            <div className="relative h-48 w-full">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={false}
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Tour Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {tour.name}
              </h3>
              {/* Short Description (edit text as needed) */}
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {tour.description}
              </p>

              {/* Price and Details */}
              <div className="mt-4 flex items-center justify-between">
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
    </div>
  );
}
