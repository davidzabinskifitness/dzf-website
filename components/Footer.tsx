import Link from "next/link";
import Image from "next/image";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/logo-white.png"
                  alt="David Zabinski Fitness"
                  width={100}
                  height={67}
                  className="object-contain"
              
                />
              </Link>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5">
              Elite personal training in Houston, TX. Where passion meets expertise.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/david__zabinski/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#CC0000] transition-colors group"
              >
                <InstagramIcon />
                <span className="text-xs font-semibold tracking-wider uppercase group-hover:text-[#CC0000]">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@davidzabinskifitness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#CC0000] transition-colors group"
              >
                <YouTubeIcon />
                <span className="text-xs font-semibold tracking-wider uppercase group-hover:text-[#CC0000]">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/training", label: "Training" },
                { href: "/golf-fitness", label: "Golf Fitness" },
                { href: "/online-coaching", label: "Online Coaching" },
                { href: "/facility", label: "The Garage" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/waiver", label: "Client Waiver" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a0a0a0] text-sm hover:text-[#CC0000] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-[#a0a0a0] text-sm">
              <li>
                <a
                  href="tel:7138220738"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  (713) 822-0738
                </a>
              </li>
              <li>
                <a
                  href="mailto:davidzabinskifitness@gmail.com"
                  className="hover:text-[#CC0000] transition-colors"
                >
                  davidzabinskifitness@gmail.com
                </a>
              </li>
              <li>5528 Cornish St Unit A</li>
              <li>Houston, TX 77007</li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/david__zabinski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#CC0000] transition-colors"
                >
                  <InstagramIcon />
                  <span>@david__zabinski</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@davidzabinskifitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#CC0000] transition-colors"
                >
                  <YouTubeIcon />
                  <span>@davidzabinskifitness</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-6 text-center text-[#a0a0a0] text-sm">
          © 2026 David Zabinski Fitness | (713) 822-0738 |{" "}
          <a
            href="mailto:davidzabinskifitness@gmail.com"
            className="hover:text-[#CC0000] transition-colors"
          >
            davidzabinskifitness@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/david__zabinski/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CC0000] transition-colors"
          >
            @david__zabinski
          </a>
        </div>
      </div>
    </footer>
  );
}
