import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GarageMap from "@/components/GarageMap";

export const metadata: Metadata = {
  title: "The Garage | David Zabinski Fitness",
  description:
    "Private training facility in Houston, TX. Zero distractions, elite equipment, infrared sauna, cold plunge, and full amenities. Located at 5528 Cornish St Unit A.",
};

const features = [
  "Private training facility",
  "Infrared Sauna (active clients only)",
  "Cold Plunge (active clients only)",
  "Full changing room",
  "Bathroom with shower",
  "Fresh towels + organic products provided",
  "Traditional + unconventional equipment",
];

export default function FacilityPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/facility-exterior.jpg" alt="The Garage exterior" fill className="object-cover object-center opacity-100" priority />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-32">
          <h1 className="section-title mb-4">The Garage</h1>
          <div className="gold-line mb-6" />
          <p className="text-[#a0a0a0] text-xl max-w-2xl">
            A private training environment built for results.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-16">
        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              The best thing about the Garage is that it&apos;s a safe space.
              Whether you&apos;re just starting your health journey or you&apos;re
              an elite athlete, the Garage offers a unique environment to focus
              on your success. Zero distractions, only results.
            </p>
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              David has invested in top of the line equipment to fully outfit his
              private training facility. With a wide variety of equipment from
              traditional barbells and dumbbells, to the unconventional
              kettlebells and mobility tools. The gym is fully equipped and he is
              constantly upgrading year to year.
            </p>
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              On site there is also a full recovery space, including Infrared
              Sauna and Cold Plunge that active clients only have access to. On
              site there is also a full changing room, a fully equipped bathroom
              with shower, fresh clean towels, organic shampoo, conditioner and
              body wash. Whether you&apos;re stopping by before work or your lunch
              hour, we&apos;ve got you covered.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Facility Features
            </h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-[#CC0000] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-[#e5e5e5]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Facility photo grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/facility-exterior.jpg" alt="The Garage exterior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/facility-interior.jpg" alt="The Garage interior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/facility-recovery.jpg" alt="Cold plunge recovery" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/facility-detail.jpg" alt="Equipment accessories wall" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </section>

        <div className="border-t border-[#2a2a2a]" />

        {/* Location */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Location
          </h2>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white font-bold text-lg mb-2">
                  5528 Cornish St Unit A
                </p>
                <p className="text-[#a0a0a0] mb-4">Houston, TX 77007</p>
                <p className="text-[#e5e5e5] leading-relaxed">
                  Located in Cottage Grove just south of the Heights, off TC
                  Jester and I-10 — less than 30 seconds off the highway.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=5528+Cornish+St+Unit+A+Houston+TX+77007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-center"
                >
                  Get Directions
                </a>
                <Link href="/contact" className="btn-primary text-center">
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section>
          <GarageMap />
        </section>
      </div>
    </div>
  );
}
