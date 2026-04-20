import { company, footerLinks } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-graphite px-6 pb-10 pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">EFES Engineering & Construction</p>
          <h3 className="mt-4 font-display text-3xl">Industrial excellence built with precision and accountability.</h3>
          <p className="mt-4 max-w-md leading-8 text-white/65">
            Serious project delivery for owners who value workmanship, technical clarity, and disciplined execution.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {footerLinks.quick.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">Core Services</p>
          <div className="mt-5 grid gap-3">
            {footerLinks.services.map((item) => (
              <Link key={item.label} href={item.href} className="text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">Contact</p>
          <div className="mt-5 grid gap-3 text-white/72">
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <p>{company.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
