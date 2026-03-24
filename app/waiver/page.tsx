"use client";

import { useState } from "react";

export default function WaiverPage() {
  const [acknowledged, setAcknowledged] = useState(false);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [signature, setSignature] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Manual validation — don't rely on HTML5 required
    if (!name.trim()) { setError("Please enter your full name."); return; }
    if (!dob.trim()) { setError("Please enter your date of birth."); return; }
    if (!email.trim()) { setError("Please enter your email."); return; }
    if (!emergencyName.trim()) { setError("Please enter an emergency contact name."); return; }
    if (!emergencyPhone.trim()) { setError("Please enter an emergency contact phone."); return; }
    if (!date.trim()) { setError("Please enter the date signed."); return; }
    if (!signature.trim()) { setError("Please type your full name as your signature."); return; }
    if (!acknowledged) { setError("You must check the acknowledgment box before submitting."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waiver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          dob,
          emergencyName,
          emergencyPhone,
          medicalConditions,
          email,
          phone,
          date,
          signature,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call (713) 822-0738.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 md:pt-24 pb-20 bg-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="bg-[#1a1a1a] border border-[#CC0000] p-12">
            <div className="text-[#CC0000] text-5xl mb-6">✓</div>
            <h2 className="text-white font-bold text-2xl uppercase tracking-wide mb-4">
              Waiver Submitted
            </h2>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Thank you, {name}. Your signed waiver has been received by David Zabinski Fitness. A copy has been sent to our records. If you have any questions, call (713) 822-0738.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#141414]">
      {/* Header */}
      <section className="bg-[#1a1a1a] border-b border-[#2a2a2a] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#CC0000] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            David Zabinski Fitness
          </p>
          <h1 className="section-title mb-4">Client Liability Waiver</h1>
          <div className="w-16 h-[3px] bg-[#CC0000] mx-auto mb-4" />
          <p className="text-white text-sm">&amp; Informed Consent</p>
          <div className="mt-6 text-white text-sm space-y-1">
            <p className="font-semibold text-white">David Zabinski Fitness</p>
            <p>5528 Cornish St Unit A, Houston TX 77007</p>
            <p>
              <a href="tel:7138220738" className="hover:text-[#CC0000] transition-colors">
                (713) 822-0738
              </a>
            </p>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
          {/* Print button */}
          <div className="flex justify-end print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-outline text-sm px-6 py-2"
            >
              Print / Save as PDF
            </button>
          </div>

          {/* Waiver Text */}
          <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 space-y-6 text-[#e5e5e5] text-sm leading-relaxed">
            <h2 className="text-white font-bold text-lg uppercase tracking-wide">
              Assumption of Risk, Waiver of Liability &amp; Indemnity Agreement
            </h2>

            <p>
              In consideration of being allowed to participate in any way in the personal training programs, fitness activities, and related events offered by David Zabinski Fitness (&ldquo;Trainer&rdquo;), I, the undersigned, acknowledge, appreciate, and agree that:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  1. Assumption of Risk
                </h3>
                <p>
                  The risk of injury from the activities involved in personal fitness training is significant, including the potential for permanent paralysis and death, and while particular rules, equipment, and personal discipline may reduce this risk, the risk of serious injury does exist. I KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS, both known and unknown, EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASED PARTIES or others, and assume full responsibility for my participation.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  2. Waiver of Liability
                </h3>
                <p>
                  I, for myself and on behalf of my heirs, assigns, personal representatives and next of kin, HEREBY RELEASE AND HOLD HARMLESS David Zabinski Fitness, David Zabinski, their officers, officials, agents, and/or employees (&ldquo;Released Parties&rdquo;), WITH RESPECT TO ANY AND ALL INJURY, DISABILITY, DEATH, or loss or damage to person or property, WHETHER ARISING FROM THE NEGLIGENCE OF THE RELEASED PARTIES OR OTHERWISE, to the fullest extent permitted by law.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  3. Indemnity Agreement
                </h3>
                <p>
                  I agree to indemnify, defend and hold harmless the Released Parties from and against any and all claims, demands, losses, liability, costs, and expenses (including attorneys&rsquo; fees) arising out of or in connection with my participation in personal fitness training activities, unless such claims arise solely from the gross negligence or willful misconduct of the Released Parties.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  4. Medical Clearance &amp; Health Representation
                </h3>
                <p>
                  I represent and warrant that I am in good physical condition and have no disability, impairment, or ailment preventing me from engaging in active or passive exercise or that would be detrimental to my health, safety, comfort, or physical condition if I do so. I have either obtained a physician&rsquo;s approval or have determined through my own assessment that I am physically fit to participate in these activities. I agree to immediately inform my Trainer of any changes to my health status.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  5. Informed Consent
                </h3>
                <p>
                  I understand that the personal fitness training program I will undertake with David Zabinski Fitness may include, but is not limited to: strength and resistance training, cardiovascular exercise, flexibility and mobility work, nutritional guidance, and movement assessment. I understand that these activities may carry certain risks and hazards, and I consent to participate in these activities with full knowledge of the risks involved.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  6. Photography &amp; Media Release
                </h3>
                <p>
                  I grant David Zabinski Fitness permission to use photographs, videos, or other media of me taken during training sessions for promotional and educational purposes, including on social media and the website, unless I indicate otherwise in writing. My name will not be used without separate written consent.
                </p>
              </div>

              <div>
                <h3 className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  7. Governing Law
                </h3>
                <p>
                  This agreement shall be governed by and construed in accordance with the laws of the State of Texas. If any provision of this agreement is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </div>
            </div>
          </section>

          {/* Client Information Form */}
          <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 space-y-6">
            <h2 className="text-white font-bold text-lg uppercase tracking-wide mb-6">
              Client Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm"
                  placeholder="First and Last Name"
                />
              </div>

              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm"
                  placeholder="(000) 000-0000"
                />
              </div>

              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm"
                  placeholder="(000) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Medical Conditions, Injuries, or Physical Limitations
              </label>
              <p className="text-white text-xs mb-2">
                Please list any current or past injuries, surgeries, medical conditions, medications, or physical limitations that David should be aware of.
              </p>
              <textarea
                rows={5}
                value={medicalConditions}
                onChange={(e) => setMedicalConditions(e.target.value)}
                className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors resize-none placeholder-[#555] text-sm"
                placeholder="List any conditions, injuries, surgeries, or medications here. Write 'None' if not applicable."
              />
            </div>

            <div>
              <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Date Signed *
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full sm:w-48 bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors text-sm"
              />
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 space-y-6">
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-6">
              Acknowledgment &amp; Signature
            </h2>
            <p className="text-[#e5e5e5] text-sm leading-relaxed mb-6">
              I HAVE READ THIS WAIVER OF LIABILITY AND ASSUMPTION OF RISK AGREEMENT FULLY. I UNDERSTAND IT AND SIGN IT VOLUNTARILY AS MY OWN FREE ACT AND DEED; NO ORAL REPRESENTATIONS, STATEMENTS, OR INDUCEMENTS, APART FROM THE FOREGOING WRITTEN AGREEMENT, HAVE BEEN MADE. I AM AT LEAST 18 YEARS OF AGE, AND I AM LEGALLY COMPETENT TO SIGN THIS AGREEMENT.
            </p>

            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                />
                <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${acknowledged ? "border-[#CC0000] bg-[#CC0000]" : "border-[#555] bg-transparent group-hover:border-[#CC0000]"}`}>
                  {acknowledged && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[#e5e5e5] text-sm leading-relaxed">
                I acknowledge that I have read and fully understand the above Assumption of Risk, Waiver of Liability &amp; Informed Consent. I agree to all terms and conditions stated herein and confirm that all information provided is accurate and complete.
              </span>
            </label>

            <div>
              <label className="block text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Typed Signature (Full Name) *
              </label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full bg-[#141414] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors placeholder-[#555] text-sm italic"
                placeholder="Type your full name as your signature"
              />
            </div>
          </section>

          {error && (
            <p className="text-[#CC0000] text-sm text-center">{error}</p>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-outline text-sm px-8 py-3"
            >
              Print / Save as PDF
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary text-sm px-8 py-3 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Waiver"}
            </button>
          </div>

          <p className="text-center text-[#555] text-xs">
            For questions, contact David Zabinski Fitness at (713) 822-0738 or davidzabinskifitness@gmail.com
          </p>
        </div>
      </form>
    </div>
  );
}
