// Reviews page: static UI showing customer testimonials
// To edit content later:
// - Update the `reviews` array (names, countries, rating, and text)
// - Optionally change avatar colors or switch to real images in public/images

type Review = {
  name: string;
  countryFlag: string; // e.g., "🇬🇧"
  countryName: string; // e.g., "United Kingdom"
  rating: number; // 1..5
  text: string; // 2-3 lines recommended
};

// Static reviews data (edit as needed)
const reviews: Review[] = [
  {
    name: "Sarah M.",
    countryFlag: "🇬🇧",
    countryName: "United Kingdom",
    rating: 5,
    text:
      "Absolutely fantastic experience! Jamal tailored the tour to our interests and showed us hidden gems we would have missed.",
  },
  {
    name: "Omar A.",
    countryFlag: "🇸🇦",
    countryName: "Saudi Arabia",
    rating: 5,
    text:
      "Professional, friendly, and very knowledgeable about the local culture. Highly recommend for families and solo travelers alike.",
  },
  {
    name: "Lena K.",
    countryFlag: "🇩🇪",
    countryName: "Germany",
    rating: 5,
    text:
      "The mountain views were breathtaking. Jamal kept a perfect pace and shared great stories along the way.",
  },
  {
    name: "Carlos R.",
    countryFlag: "🇪🇸",
    countryName: "Spain",
    rating: 4,
    text:
      "Great itinerary and smooth logistics. We loved the coastal sunset cruise—memories for a lifetime!",
  },
  {
    name: "Emily T.",
    countryFlag: "🇺🇸",
    countryName: "United States",
    rating: 5,
    text:
      "Super responsive and accommodating. The wadi swim was a highlight of our trip to Oman!",
  },
  {
    name: "Noah B.",
    countryFlag: "🇨🇦",
    countryName: "Canada",
    rating: 5,
    text:
      "Excellent guide with deep local insight. We felt safe, welcomed, and inspired throughout the tour.",
  },
];

// Helper: render fixed 5-star rating using unicode stars
function Stars({ value }: { value: number }) {
  const full = "⭐".repeat(Math.min(5, Math.max(0, value)));
  const empty = "☆".repeat(5 - Math.min(5, Math.max(0, value)));
  return (
    <span className="text-amber-500" aria-label={`${value} out of 5 stars`}>
      {full}
      <span className="text-gray-300">{empty}</span>
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading and subtext */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-emerald-700">Customer Reviews</h1>
        <p className="mt-3 text-gray-700">
          See what travelers are saying about their experiences with Jamal Tours.
        </p>
      </header>

      {/* Reviews Grid: 1 column on mobile, 3 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            {/* Header: Avatar + Name/Country */}
            <div className="flex items-center gap-4">
              {/* Simple letter avatar (replace with Image if you have real avatars) */}
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-semibold">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="text-gray-900 font-medium">{r.name}</div>
                <div className="text-sm text-gray-600">
                  {r.countryFlag} {r.countryName}
                </div>
              </div>
            </div>

            {/* Stars + Review Text */}
            <div className="mt-4">
              <Stars value={r.rating} />
              <p className="mt-3 text-gray-700 leading-relaxed">{r.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

