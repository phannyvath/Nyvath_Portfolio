import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_20250506',      // Replace with your EmailJS service ID
      'template_8xkk83a',
      form.current,
      'sEwDAUPnpjhbB8p-oe'
    ).then(
      (result) => {
        setSent(true);
        setLoading(false);
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="bg-tertiary rounded-xl p-8 shadow-2xl w-full max-w-md flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="p-3 rounded bg-primary text-white" />
        <input type="email" name="user_email" placeholder="Your Email" required className="p-3 rounded bg-primary text-white" />
        <textarea name="message" placeholder="Your Message" required className="p-3 rounded bg-primary text-white min-h-[120px]" />
        <button type="submit" className="bg-secondary text-primary font-bold py-3 rounded hover:bg-white transition">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {sent && <p className="text-green-400 text-center mt-2">Message sent! I'll get back to you soon.</p>}
      </form>
    </section>
  );
};

export default Contact; 