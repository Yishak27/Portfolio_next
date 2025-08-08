import React, { useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('feedback').insert([
        { name: form.name, email: form.email, message: form.message }
      ]);
      if (error) throw error;
      // console.log('data', data);
    } catch (error) {
      // console.error('Error inserting data:', error);
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-2xl shadow p-8 border border-[var(--color-secondary)] mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">Contact Me</h1>
        {submitted ? (
          <div className="text-center text-[var(--color-primary)] text-lg font-semibold py-8">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="items-center gap-2 mt-2 px-6 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-background-2)] transition-colors hover:bg-[var(--color-botton)]  text-lg"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 flex flex-col items-center gap-2 text-[var(--color-primary)]">
          <div className="font-semibold">Or reach me at:</div>
          <a href="mailto:inbox@ermiyas.dev"  aria-label='Email' className="hover:text-[var(--color-botton)] transition-colors">inbox@ermiyas.dev</a>
          <a href="tel:+251924193077" aria-label='Phone' className="hover:text-[var(--color-botton)] transition-colors">+251 924 193 077</a>
        </div>
      </div>
    </section>
  );
}