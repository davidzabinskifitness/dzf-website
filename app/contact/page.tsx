import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | David Zabinski Fitness",
  description:
    "Get in touch with David Zabinski Fitness. Book a consultation for in-person training, golf fitness, or online coaching in Houston, TX.",
};

const contactInfo = [
  { label: "Phone", value: "(713) 822-0738", href: "tel:7138220738" },
  {
    label: "Email",
    value: "davidzabinskifitness@gmail.com",
    href: "mailto:davidzabinskifitness@gmail.com",
  },
  {
    label: "Address",
    value: "5528 Cornish St Unit A, Houston, TX 77007",
    href: "https://maps.google.com/?q=5528+Cornish+St+Unit+A+Houston+TX+77007",
  },
  {
    label: "Instagram",
    value: "@david__zabinski",
    href: "https://www.instagram.com/david__zabinski/",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="border-b border-[#2a2a2a] bg-[#141414]">
        <div className="flex flex-col items-center justify-center text-center py-24 px-4">
          <h1 className="section-title mb-4">Contact</h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-white text-2xl sm:text-3xl max-w-2xl font-semibold tracking-wide" style={{ textShadow: "1px 2px 8px rgba(0,0,0,0.8)" }}>
            We will be happy to hear from you, so please feel free to reach out.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: headshot + contact info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Headshot */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/contact-headshot.jpg"
                alt="David Zabinski"
                fill
                className="object-cover object-top"
              />
            </div>

            <div>
              <h2 className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-6">
                Contact Information
              </h2>
              <ul className="space-y-6">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    <p className="text-white text-xs tracking-widest uppercase mb-1">
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-[#e5e5e5] hover:text-[#CC0000] transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#2a2a2a] pt-8">
              <p className="text-white text-sm leading-relaxed">
                Located in Cottage Grove, Houston — less than 30 seconds off
                I-10 and TC Jester.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
