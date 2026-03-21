import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | David Zabinski Fitness",
  description:
    "Learn about David Zabinski — personal trainer and licensed nutritionist with 13+ years of experience in Houston, TX. Competitive athlete, certified expert, passionate coach.",
};

const experience = [
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

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="border-b border-[#2a2a2a] bg-[#141414]">
        <div className="flex flex-col items-center justify-center text-center py-24 px-4">
          <h1 className="section-title mb-4">Biography</h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-white text-2xl sm:text-3xl max-w-2xl font-semibold tracking-wide" style={{ textShadow: "1px 2px 8px rgba(0,0,0,0.8)" }}>
            Helping you live better through health and fitness, one day at a time.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-20">
        {/* Bio with photo */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden" style={{ maxHeight: '480px', aspectRatio: '3/4' }}>
              <Image src="/images/about-main.jpg" alt="David Zabinski" fill className="object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              Where passion meets expertise; David Zabinski has been a personal
              trainer for over 13+ years. From competitive golf, bodybuilding,
              powerlifting, and Brazilian Jiu-Jitsu, David lives and breathes
              health and fitness. Focusing on movement, strength, and longevity he
              combines his unique backgrounds into the complete wellness program.
              His goal is to help you live better today and the rest of your life.
            </p>
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              David has been a licensed nutritionist for over 13+ years. Certified
              through Precision Nutrition; he has helped clients of all
              backgrounds. Helping multiple women&apos;s bikini competitors qualify
              for nationally ranked shows to helping others achieve over 150 lbs.
              of sustained weight loss. David focuses on helping you achieve a
              healthier relationship with food so no matter your experience —
              beginner to advanced — David is here to help you achieve a
              healthier, happier you moving forward.
            </p>
          </div>
        </section>

        <div className="border-t border-[#2a2a2a]" />

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
            <li className="flex items-start gap-4">
              <span className="text-[#CC0000] mt-1 flex-shrink-0">★</span>
              <span className="text-[#e5e5e5] text-lg">
                Google Reviews —{" "}
                <a
                  href="https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CC0000] hover:underline"
                >
                  See what clients say →
                </a>
              </span>
            </li>
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

        {/* Google Reviews */}
        <section>
          <h2 className="section-title mb-6">What Clients Say</h2>
          <div className="gold-line mb-10" />
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-1 text-[#CC0000] text-3xl">★★★★★</div>
            <span className="text-white text-4xl font-black">4.9</span>
          </div>
          <p className="text-white text-lg mb-8">Based on <span className="text-white font-semibold">67 reviews</span> on Google</p>
          <a
            href="https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#CC0000] text-white font-bold px-8 py-4 transition-all duration-300 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All 67 Reviews on Google
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </section>

        <div className="border-t border-[#2a2a2a]" />

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
