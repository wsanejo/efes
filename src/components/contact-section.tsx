"use client";

import { SectionHeading } from "@/components/section-heading";
import { company, contact } from "@/data/site";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.body} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-slate-200 bg-graphite p-8 text-white shadow-glass"
          >
            <div className="grid gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <Mail className="text-ember" />
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/55">Email</p>
                <p className="mt-2 text-lg">{company.email}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <Phone className="text-ember" />
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/55">Mobile</p>
                <p className="mt-2 text-lg">{company.phone}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <MapPin className="text-ember" />
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/55">Office</p>
                <p className="mt-2 text-lg leading-8">{company.address}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">Map Placeholder</p>
              <div className="mt-5 flex h-64 items-center justify-center rounded-[1.4rem] border border-dashed border-white/15 bg-black/15 text-center text-sm text-white/55">
                {company.mapLabel}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-graphite">Full Name</span>
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ember" placeholder="Juan Dela Cruz" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-graphite">Company</span>
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ember" placeholder="NorthForge Holdings" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-graphite">Email</span>
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ember" placeholder="name@company.com" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-graphite">Phone</span>
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ember" placeholder="+63 9XX XXX XXXX" />
              </label>
            </div>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-medium text-graphite">Service Required</span>
              <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ember">
                <option>Engineering Services</option>
                <option>Construction Services</option>
                <option>Design and Build</option>
                <option>Project Management</option>
                <option>FDAS / Fire Protection Works</option>
                <option>Renovation / Fit-out</option>
                <option>MEP / Technical Works</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-medium text-graphite">Project Brief</span>
              <textarea
                rows={6}
                className="rounded-[1.6rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-ember"
                placeholder="Tell us about your facility, scope, target timeline, and site constraints."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-graphite px-6 py-4 text-sm font-medium text-white transition hover:bg-ember"
            >
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
