"use client";

export default function GarageMap() {
  return (
    <div className="w-full overflow-hidden border border-[#333]" style={{ height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.6!2d-95.4194!3d29.7745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c75b2e8b8b8b%3A0x0!2s5528+Cornish+St+Unit+A%2C+Houston%2C+TX+77007!5e0!3m2!1sen!2sus!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="David Zabinski Fitness — 5528 Cornish St Unit A, Houston TX 77007"
      />
    </div>
  );
}
