import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Training | David Zabinski Fitness",
  description:
    "Science-backed personal training in Houston, TX. 13+ years in the industry. Strength, fat loss, golf fitness, movement, and longevity — built around you.",
};

export default function TrainingPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/facility-exterior.jpg" alt="The Garage — David Zabinski Fitness" fill className="object-cover object-center opacity-100" priority />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-32">
          <h1 className="section-title mb-4">Training Style</h1>
          <div className="gold-line" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        {/* Main description */}
        <div className="max-w-3xl mb-20">
          <p className="text-[#e5e5e5] text-xl leading-relaxed">
            With over 13 years in the industry, David cuts through the noise and
            focuses on science-backed training principles that deliver real
            results. Every program is built around you — your goals, your body,
            and your life. David adapts to what you need, whether that means
            strength, fat loss, mobility, or performance. No cookie-cutter
            programs. Just smart, personalized coaching.
          </p>
        </div>

        {/* Philosophy — image banner with text overlay */}
        <div className="mb-20">
          <div className="relative overflow-hidden mb-10">
            <Image
              src="/images/facility-interior.jpg"
              alt="The Garage — David Zabinski Fitness private facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#141414]/75" />
            <div className="relative z-10 px-8 sm:px-14 py-16">
              <h2 className="section-title mb-4">The Approach</h2>
              <div className="gold-line mb-8" />
              <p className="text-white text-xl leading-relaxed max-w-3xl">
                With over 13 years in the industry, David cuts through the noise and focuses on science-backed training principles that deliver real results. Every program is built around you — your goals, your body, and your life. David adapts to what you need, whether that means strength, fat loss, mobility, or performance. No cookie-cutter programs. Just smart, personalized coaching.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing / Investment */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Investment</h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* 1-on-1 Training */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 flex flex-col">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                1-on-1 Training
              </h3>
              <div className="text-[#CC0000] text-3xl font-black mb-1">$120</div>
              <div className="text-white text-xs tracking-widest uppercase mb-4">per session</div>
              <p className="text-white text-sm leading-relaxed flex-1">
                Private one-on-one session with David at The Garage. Fully customized programming, hands-on coaching, and direct accountability.
              </p>
            </div>

            {/* Partner Training */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 flex flex-col">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Partner Training
              </h3>
              <div className="text-[#CC0000] text-3xl font-black mb-1">$150</div>
              <div className="text-white text-xs tracking-widest uppercase mb-1">per session</div>
              <div className="text-white text-xs mb-4">($75/person)</div>
              <p className="text-white text-sm leading-relaxed flex-1">
                Train with a partner. Split the cost, share the energy. Same personalized attention, same results-driven approach.
              </p>
            </div>

            {/* Online Coaching */}
            <div className="bg-[#1a1a1a] border border-[#CC0000] p-8 flex flex-col">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Online Coaching
              </h3>
              <div className="text-[#CC0000] text-3xl font-black mb-1">Custom</div>
              <div className="text-white text-xs tracking-widest uppercase mb-4">pricing</div>
              <p className="text-white text-sm leading-relaxed flex-1">
                Fully personalized online coaching with weekly live Zoom calls. Apply to see if you&apos;re a good fit.
              </p>
              <Link
                href="/online-coaching"
                className="mt-6 text-[#CC0000] text-sm font-bold tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          </div>

          <p className="text-center text-white text-sm mb-8">
            Session packages and monthly rates available. Contact David to discuss options that fit your schedule and goals.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">
            Ready to Train?
          </h2>
          <p className="text-white mb-8 max-w-xl mx-auto">
            Book a session and experience what it means to train with a true
            professional.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
