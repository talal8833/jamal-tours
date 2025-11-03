import Image from "next/image";

export const metadata = {
  title: "About Me | Jamal Tour",
  description: "Learn more about Jamal, your licensed tour guide in Oman",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the story behind Jamal Tour — your gateway to authentic Omani
          adventures.
        </p>
        <Image
          src="/images/jamal-tour-guide.avif"
          alt="Jamal Tour Guide in Oman"
          width={900}
          height={500}
          className="rounded-2xl shadow-lg mx-auto"
        />
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-700 leading-relaxed">
          My name is <strong>Jamal</strong>, a licensed tour guide based in Oman
          with over 8 years of experience guiding visitors from all over the
          world. My mission is to share the beauty, history, and culture of Oman
          through personalized tours that create unforgettable memories.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Whether it’s exploring the golden dunes of Wahiba Sands, walking
          through ancient forts, or enjoying the refreshing wadis — I’m here to
          make your journey safe, insightful, and truly Omani.
        </p>
      </section>

      {/* Why Choose Me Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Me</h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>
            Licensed professional tour guide certified by Oman’s Ministry of
            Heritage and Tourism.
          </li>
          <li>
            Fluent in English and Arabic, with great communication and
            storytelling skills.
          </li>
          <li>
            Customized private tours to match your preferences and travel style.
          </li>
          <li>
            Comfortable and safe transportation options for individuals and
            groups.
          </li>
          <li>
            Authentic local experiences — from Omani cuisine to hidden gems off
            the beaten path.
          </li>
        </ul>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">What My Guests Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Review Card 1 */}
          <div className="border rounded-2xl p-6 shadow-sm bg-white">
            <p className="italic text-gray-600">
              “Jamal was an amazing guide! We discovered places we’d never find
              on our own. Highly recommended!”
            </p>
            <p className="mt-4 font-semibold text-gray-800">— Sarah, UK</p>
          </div>

          {/* Review Card 2 */}
          <div className="border rounded-2xl p-6 shadow-sm bg-white">
            <p className="italic text-gray-600">
              “Professional, friendly, and knowledgeable. He made our trip to
              Oman unforgettable.”
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              — Mark & Anna, Germany
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
