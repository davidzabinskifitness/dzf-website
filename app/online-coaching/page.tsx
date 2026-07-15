import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Online Personal Training | Remote Fitness Coaching Anywhere",
  description:
    "Remote personal training from David Zabinski. Weekly 1-on-1 coaching, custom programming, nutrition guidance, and direct support. Train anywhere in the world.",
  openGraph: {
    title: "Online Personal Training | David Zabinski Fitness",
    description:
      "Expert remote coaching with weekly Zoom calls and custom programming.",
  },
};

const included = [
  "Weekly 1-on-1 Zoom call with David",
  "Fully customized training program (updated monthly)",
  "Nutrition guidance and meal structure",
  "Progress tracking and weekly check-ins",
  "Form review via video submission",
  "Direct access to David via messaging",
  "Access to David's full methodology and programming system",
];

export default function OnlineCoachingPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] border-b border-[#2a2a2a] py-24 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #CC0000 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Remote Training
          </p>
          <h1 className="section-title mb-4">Online Coaching</h1>
          <div className="gold-line mb-6" />
          <p className="text-white text-xl max-w-2xl">
            David&apos;s expertise. Your schedule. Anywhere in the world.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-16">
        {/* The Package — price + what's included, up front */}
        <section>
          {/* Price card */}
          <div className="max-w-md mx-auto mb-10">
            <div className="bg-[#CC0000]/5 border-2 border-[#CC0000] p-8 flex flex-col gap-4 text-center">
              <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase">3 Months</p>
              <p className="text-5xl font-black text-white">$1,200</p>
              <p className="text-white text-sm">Complete 3-month coaching program</p>
            </div>
          </div>

          {/* What's Included */}
          <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {included.map((item, i) => (
              <div
                key={item}
                className={`bg-[#1a1a1a] border p-6 flex gap-4 items-start transition-colors ${
                  i === 0
                    ? "border-[#CC0000] hover:border-[#CC0000]"
                    : "border-[#2a2a2a] hover:border-[#CC0000]"
                }`}
              >
                <span className="font-black text-lg flex-shrink-0 text-[#CC0000]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`${i === 0 ? "text-white font-semibold" : "text-[#e5e5e5]"}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white text-sm leading-relaxed mb-8 text-center max-w-xl mx-auto">
            Pricing includes weekly 1-on-1 Zoom calls, custom programming, nutrition guidance, and direct access to David.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Apply for Online Coaching
            </Link>
          </div>
        </section>

        {/* What It Looks Like — Weekly Zoom Call, 2-column with photo */}
        <section className="border-2 border-[#CC0000] bg-[#CC0000]/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/images/contact-headshot.jpg"
                alt="David Zabinski — online coaching"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#CC0000]/10" />
            </div>
            {/* Content */}
            <div className="p-10">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-[#CC0000] text-4xl flex-shrink-0">📹</span>
                <div>
                  <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                    The #1 Difference
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white mb-4">
                    The Weekly Zoom Call
                  </h2>
                </div>
              </div>
              <p className="text-[#e5e5e5] text-lg leading-relaxed mb-6">
                Every online client gets a{" "}
                <span className="text-white font-bold">
                  live 1-on-1 Zoom call with David every single week
                </span>{" "}
                — no pre-recorded check-ins, no AI feedback, no form emails. Real
                coaching, in real time.
              </p>
              <p className="text-white leading-relaxed">
                This is where the program gets refined. David reviews your progress,
                adjusts your training and nutrition, and answers every question. Most
                programs offer a monthly check-in; David gives you a weekly
                conversation — and that standing commitment is what keeps you
                accountable and separates the clients who get results from the ones
                who don&apos;t.
              </p>
            </div>
          </div>
        </section>

        {/* Beginners Welcome */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-10">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            All Experience Levels Welcome
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
            Complete Beginners Are Welcome
          </h2>
          <p className="text-[#e5e5e5] text-lg leading-relaxed">
            David has coached every level online — from complete beginners to
            advanced athletes. Every program starts where you are, not where someone
            else is.
          </p>
        </section>

        {/* Who It's For */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-10">
          <h2 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
            Who It&apos;s For
          </h2>
          <p className="text-[#e5e5e5] text-lg leading-relaxed">
            Online coaching is for the person who is serious about results but
            can&apos;t make it to Houston. Whether you&apos;re across town or
            across the country, if you&apos;re committed to the process, David is
            committed to your results.
          </p>
        </section>

        {/* Spots Limited */}
        <section className="border border-[#CC0000] bg-[#CC0000]/5 p-10 text-center">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Availability
          </p>
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">
            Spots Are Limited
          </h2>
          <p className="text-[#e5e5e5] text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            David keeps his online roster small to ensure every client gets a
            premium experience — including that weekly Zoom call.
          </p>
          <Link href="/contact" className="btn-primary">
            Apply for Online Coaching
          </Link>
        </section>
      </div>
    </div>
  );
}
