import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience | David Zabinski Fitness",
  description:
    "13+ years of elite personal training experience. Equinox Top 50 Trainer, 18,000+ sessions, featured in Houston Chronicle and Yahoo Finance.",
};

const experience = [
  "18,000+ Personal Training Sessions Completed",
  "13+ Years Personal Training",
  "7+ Years Independent Training, David Zabinski Fitness — Houston, TX",
  "4 Years Equinox Tier 3+ Trainer — Houston, TX",
  "3 Years Equinox Master Instructor (Lead in Trainer Education) — Houston, TX",
  "2 Years 24 Hour Fitness Master Trainer — Houston, TX",
];

const achievements = [
  "2017 Equinox Top 50 Trainers in the Company",
  "2018 Equinox Top 50 Trainers in the Company",
  "2020 Top Fitness Pros — Houston Chronicle",
  "2021 Top Trainer in Texas — Yahoo Finance",
];

const certifications = [
  "College of Healthcare Professions — Personal Training Program",
  "National Academy of Sports Medicine — Personal Training Certification",
  "Titleist Performance Institute — Fitness Coach",
  "USA Weightlifting",
  "Functional Movement Systems",
  "Animal Flow",
  "Onnit Academy — Certified Trainer",
  "Kettlebell Athletics",
  "Anatomy Trains for Movement Specialist",
  "Trigger Point Therapy",
  "BR-200 Content Creation",
  "Metabolic Flexibility Diet Certification",
];

export default function ExperiencePage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/facility-interior.jpg" alt="The Garage" fill className="object-cover object-center opacity-100" priority />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-32">
          <h1 className="section-title mb-4">Experience</h1>
          <div className="gold-line" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-20">
        {/* Experience */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Experience
          </h2>
          <ul className="space-y-4">
            {experience.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-[#CC0000] mt-1 flex-shrink-0">▸</span>
                <span className="text-[#e5e5e5] text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#2a2a2a]" />

        {/* Achievements */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Achievements
          </h2>
          <ul className="space-y-4">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-[#CC0000] mt-1 flex-shrink-0">★</span>
                <span className="text-[#e5e5e5] text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#2a2a2a]" />

        {/* Certifications */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Education & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-[#1a1a1a] border border-[#2a2a2a] px-6 py-4 text-[#e5e5e5] text-sm leading-snug"
              >
                {cert}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link href="/contact" className="btn-primary">
            Work With David
          </Link>
        </div>
      </div>
    </div>
  );
}
