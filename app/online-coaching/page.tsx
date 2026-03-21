import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Online Coaching | David Zabinski Fitness",
  description:
    "Online personal training with David Zabinski. Weekly live Zoom calls, custom programming, nutrition guidance, and direct access — anywhere in the world.",
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
        {/* Intro */}
        <section className="max-w-3xl">
          <p className="text-[#e5e5e5] text-xl leading-relaxed">
            Online coaching with David gives you access to the same
            science-backed programming and nutritional guidance that his
            in-person clients receive — delivered through a structured,
            personalized program designed around your life, your goals, and your
            schedule.
          </p>
        </section>

        {/* Weekly Zoom Call — 2-column with photo */}
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
                  live 1-on-1 Zoom call with David every single week.
                </span>{" "}
                No pre-recorded check-ins. No AI-generated feedback. No form emails.
                Real coaching, in real time, every week.
              </p>
              <p className="text-white leading-relaxed mb-6">
                This is where the program gets refined. David reviews your progress,
                adjusts your training and nutrition, addresses what&apos;s working
                and what isn&apos;t, and answers every question you have. Most online
                coaching programs offer a monthly check-in. David gives you a weekly
                conversation.
              </p>
              <p className="text-white leading-relaxed">
                <span className="text-white font-bold">Accountability.</span>{" "}
                Knowing you have a scheduled call with David every week changes how you show up — in the gym, in the kitchen, and in your mindset. You&apos;re not just following a program — you have someone in your corner. Someone who knows your goals, tracks your data, reviews your numbers, and shows up every week ready to push you forward. That&apos;s what having a coach on your team actually means. And that weekly commitment is what separates clients who get there from clients who don&apos;t.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </section>

        {/* Beginners Welcome */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-10">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            All Experience Levels Welcome
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
            Complete Beginners Are Welcome
          </h2>
          <p className="text-[#e5e5e5] text-lg leading-relaxed mb-4">
            David has coached everyone online — from complete beginners who have
            never touched a weight, to advanced athletes optimizing performance.
            Every program starts where you are, not where someone else is.
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

        {/* Pricing */}
        <section>
          <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* 3 Months */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 flex flex-col gap-4 hover:border-[#CC0000] transition-colors">
              <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase">3 Months</p>
              <p className="text-4xl font-black text-white">$1,200</p>
              <p className="text-white text-sm">Save vs. month-to-month</p>
            </div>
            {/* 6 Months */}
            <div className="bg-[#CC0000]/5 border-2 border-[#CC0000] p-8 flex flex-col gap-4 relative">
              <span className="absolute top-4 right-4 text-xs font-bold bg-[#CC0000] text-white px-3 py-1 uppercase tracking-widest">Best Value</span>
              <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase">6 Months</p>
              <p className="text-4xl font-black text-white">$2,100</p>
              <p className="text-white text-sm">Maximum results, maximum savings</p>
            </div>
          </div>
          <p className="text-white text-sm leading-relaxed mb-8">
            Pricing includes weekly 1-on-1 Zoom calls, custom programming, nutrition guidance, and direct access to David.
          </p>
          <Link href="/contact" className="btn-primary">
            Apply for Online Coaching
          </Link>
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
