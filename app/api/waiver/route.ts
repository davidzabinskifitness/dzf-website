import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      dob,
      emergencyName,
      emergencyPhone,
      medicalConditions,
      date,
      signature,
    } = await req.json();

    await resend.emails.send({
      from: "DZF Website <onboarding@resend.dev>",
      to: "davidzabinskifitness@gmail.com",
      subject: `Liability Waiver Signed — ${name}`,
      html: `
        <h2>New Liability Waiver Signed</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Emergency Contact:</strong> ${emergencyName || "Not provided"}</p>
        <p><strong>Emergency Phone:</strong> ${emergencyPhone || "Not provided"}</p>
        <p><strong>Medical Conditions / Injuries:</strong> ${medicalConditions || "None provided"}</p>
        <p><strong>Date Signed:</strong> ${date}</p>
        <p><strong>Signature (typed):</strong> ${signature}</p>
        <hr/>
        <h3>Waiver Text Acknowledged</h3>
        <p>The client read and acknowledged the following waiver in full:</p>
        <ol>
          <li><strong>Assumption of Risk</strong> — The risk of injury from personal fitness training is significant, including the potential for permanent paralysis and death. The client knowingly and freely assumes all such risks, both known and unknown, even if arising from the negligence of the Released Parties, and assumes full responsibility for their participation.</li>
          <li><strong>Waiver of Liability</strong> — The client, for themselves and on behalf of their heirs, assigns, personal representatives and next of kin, hereby releases and holds harmless David Zabinski Fitness, David Zabinski, their officers, officials, agents, and/or employees ("Released Parties"), with respect to any and all injury, disability, death, or loss or damage to person or property, whether arising from the negligence of the Released Parties or otherwise, to the fullest extent permitted by law.</li>
          <li><strong>Indemnity Agreement</strong> — The client agrees to indemnify, defend and hold harmless the Released Parties from and against any and all claims, demands, losses, liability, costs, and expenses (including attorneys' fees) arising out of or in connection with their participation in personal fitness training activities, unless such claims arise solely from the gross negligence or willful misconduct of the Released Parties.</li>
          <li><strong>Medical Clearance & Health Representation</strong> — The client represents and warrants that they are in good physical condition and have no disability, impairment, or ailment preventing them from engaging in active or passive exercise. They have either obtained a physician's approval or determined through their own assessment that they are physically fit to participate. They agree to immediately inform their Trainer of any changes to their health status.</li>
          <li><strong>Informed Consent</strong> — The client understands that the personal fitness training program may include strength and resistance training, cardiovascular exercise, flexibility and mobility work, nutritional guidance, and movement assessment. They consent to participate with full knowledge of the risks involved.</li>
          <li><strong>Photography & Media Release</strong> — The client grants David Zabinski Fitness permission to use photographs, videos, or other media taken during training sessions for promotional and educational purposes, including on social media and the website, unless indicated otherwise in writing.</li>
          <li><strong>Governing Law</strong> — This agreement shall be governed by and construed in accordance with the laws of the State of Texas.</li>
        </ol>
        <p><strong>The client checked the acknowledgment box confirming they read and fully understood the above waiver, and typed their full name as their legal signature.</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waiver submission error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
