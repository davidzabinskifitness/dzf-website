import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Zabinski Fitness | Personal Trainer Houston, TX",
  description:
    "Elite personal training in Houston, TX. 13+ years experience, 18,000+ sessions. In-person training, golf fitness, and online coaching.",
};

const stats = [
  { value: "18,000+", label: "Sessions" },
  { value: "13+", label: "Years Experience" },
  { value: "13+", label: "Certifications" },
  { value: "Houston, TX", label: "Location" },
];

const services = [
  {
    title: "In-Person Training",
    description:
      "Train in David's private facility with one-on-one attention, science-backed programming, and results-driven coaching tailored to you.",
    href: "/training",
    icon: "🏋️",
  },
  {
    title: "Golf Fitness",
    description:
      "TPI-certified golf fitness coaching to improve your mobility, rotational power, and performance on the course.",
    href: "/golf-fitness",
    icon: "⛳",
  },
  {
    title: "Online Coaching",
    description:
      "David's full methodology and personalized programming delivered to you anywhere in the world.",
    href: "/online-coaching",
    icon: "💻",
  },
];

const press = [
  { outlet: "Houston Chronicle", title: "Top Fitness Pros", year: "2020" },
  { outlet: "Yahoo Finance", title: "Top Trainer in Texas", year: "2021" },
  { outlet: "Equinox", title: "Top 50 Trainers", year: "2017 & 2018" },
  {
    outlet: "Google Reviews",
    title: "See What Clients Say",
    year: "",
    link: "https://www.google.com/search?q=David+Zabinski+Fitness+Houston+reviews",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end justify-center bg-[#141414] overflow-hidden" style={{ height: "85vh", maxHeight: "900px", minHeight: "600px" }}>
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="David Zabinski Fitness"
            fill
            className="object-contain opacity-100" style={{ objectPosition: "center top" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]/60" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pb-16">

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-none text-white mb-6">
            Where Passion
            <br />
            <span className="text-[#CC0000]">Meets Expertise</span>
          </h1>
          <p className="text-[#e5e5e5] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Work with a true professional who has real world experience working
            with clients just like you
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-block">
            Book a Consultation
          </Link>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://www.instagram.com/david__zabinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#CC0000] transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <span className="text-[#333]">|</span>
            <a
              href="https://www.youtube.com/@davidzabinskifitness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#CC0000] transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              YouTube
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#CC0000]" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#CC0000] py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black text-black">
                  {stat.value}
                </div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-black/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — slightly lighter for rhythm */}
      <section className="py-28 px-4 sm:px-6 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Services
            </p>
            <h2 className="section-title mb-4">Train With David</h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#CC0000] transition-all duration-300 flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-[#CC0000] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#CC0000] text-sm font-bold tracking-wider uppercase">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 px-4 sm:px-6 bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-6">Client Reviews</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex gap-1 text-[#CC0000] text-3xl">★★★★★</div>
            <span className="text-white text-4xl font-black">4.9</span>
          </div>
          <p className="text-[#a0a0a0] text-lg mb-8">Based on <span className="text-white font-semibold">67 reviews</span> on Google</p>
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
        </div>
      </section>

      {/* Social / Connect section */}
      <section className="py-24 px-4 sm:px-6 bg-[#1a1a1a] border-y border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Follow Along
            </p>
            <h2 className="section-title mb-4">Connect With David</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Instagram card */}
            <a
              href="https://www.instagram.com/david__zabinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#141414] border border-[#2a2a2a] hover:border-[#CC0000] p-10 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-[#CC0000] mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="text-white font-bold text-lg tracking-wide mb-1">@david__zabinski</div>
              <div className="text-[#a0a0a0] text-sm tracking-wider uppercase mb-6">Instagram</div>
              <div className="text-[#CC0000] text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                Follow on Instagram <span>→</span>
              </div>
            </a>

            {/* YouTube card */}
            <a
              href="https://www.youtube.com/@davidzabinskifitness"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#141414] border border-[#2a2a2a] hover:border-[#CC0000] p-10 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-[#CC0000] mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <div className="text-white font-bold text-lg tracking-wide mb-1">@davidzabinskifitness</div>
              <div className="text-[#a0a0a0] text-sm tracking-wider uppercase mb-6">YouTube</div>
              <div className="text-[#CC0000] text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                Watch on YouTube <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 px-4 sm:px-6 bg-[#141414] border-b border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-10">
            As Seen In
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {press.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-[#e5e5e5] font-extrabold text-lg tracking-wide mb-1">
                  {item.outlet}
                </div>
                <div className="text-[#CC0000] text-sm font-semibold tracking-wider mb-1">
                  &ldquo;{item.title}&rdquo;
                </div>
                {item.year && (
                  <div className="text-[#a0a0a0] text-xs tracking-widest">
                    {item.year}
                  </div>
                )}
                {"link" in item && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-[#CC0000] text-xs tracking-widest transition-colors mt-1 inline-block"
                  >
                    → View Reviews
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 px-4 sm:px-6 bg-[#1c1c1c] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-4">
            Ready to Start Your
            <br />
            <span className="text-[#CC0000]">Fitness Journey?</span>
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="text-[#a0a0a0] text-lg mb-10">
            Take the first step. Book a consultation and let&apos;s build the
            best version of you.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-block">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
