import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // For now we simply open mailto. Replace with API when ready.
    const mailto = `mailto:seunice2116@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      form.name || "Visitor"
    )}&body=${encodeURIComponent(form.message || "")}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <h2 className="section-title">Contact Me</h2>
        <p>Interested in collaborating or want to say hi? Drop a message.</p>

        <form className="contact-form" onSubmit={onSubmit}>
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Your email" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="6" />
          <div className="form-actions">
            <button type="submit" className="btn">Send</button>
            <a className="btn ghost" href="mailto:seunice2116@gmail.com">Or email me</a>
          </div>
        </form>
      </div>
    </section>
  );
}
