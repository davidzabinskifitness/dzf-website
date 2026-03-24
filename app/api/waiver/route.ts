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
        <p><em>Full waiver text was presented and acknowledged by the client.</em></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waiver submission error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
