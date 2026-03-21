"use client";

import { useState } from "react";

const subjects = [
  "In-Person Training",
  "Golf Fitness",
  "Online Coaching",
  "General Inquiry",
];

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] border border-[#CC0000] p-10 text-center">
        <div className="text-[#CC0000] text-4xl mb-4">✓</div>
        <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-3">
          Message Sent!
        </h3>
        <p className="text-[#a0a0a0]">
          Thank you for reaching out. David will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#a0a0a0] text-xs tracking-widest uppercase mb-2">
            Name *
          </label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-[#a0a0a0] text-xs tracking-widest uppercase mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[#a0a0a0] text-xs tracking-widest uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formState.phone}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555]"
            placeholder="(000) 000-0000"
          />
        </div>
        <div>
          <label className="block text-[#a0a0a0] text-xs tracking-widest uppercase mb-2">
            Subject *
          </label>
          <select
            required
            value={formState.subject}
            onChange={(e) =>
              setFormState({ ...formState, subject: e.target.value })
            }
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Select subject
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[#a0a0a0] text-xs tracking-widest uppercase mb-2">
          Message *
        </label>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors resize-none placeholder-[#555]"
          placeholder="Tell David about your goals..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto px-12 py-4"
      >
        Send Message
      </button>
    </form>
  );
}
