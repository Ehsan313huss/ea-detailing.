import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Car, Calendar, Phone, MapPin, CheckCircle2, Star, Clock, Sparkles, Facebook, Instagram, Mail, Send, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// EA Detailing – Single-file React site
// Styling: TailwindCSS + shadcn/ui components
// Notes for you to customise:
// - Update CONTACT_INFO and SERVICE_AREAS
// - Connect the booking form to your email/CRM later if you want (currently creates a mailto: link and optional SMS draft)
// - Replace image placeholders with your photos (use public URLs or local assets)

const CONTACT_INFO = {
  businessName: "EA Detailing",
  phone: "04xx xxx xxx", // TODO: replace with your number
  email: "bookings@eadetailing.au", // TODO: replace with your email
  abn: "ABN 00 000 000 000", // optional, helps trust
};

const SERVICE_AREAS = [
  "Brisbane CBD",
  "Northside",
  "Southside",
  "Logan",
  "Ipswich",
  "Redlands",
  "Moreton Bay",
  "Western Suburbs",
  "Inner-City Suburbs",
];

const SERVICES = [
  {
    key: "basic",
    name: "Basic Wash",
    price: "from $79",
    time: "~45–60 min",
    features: [
      "pH-neutral hand wash",
      "Wheel & tyre clean",
      "Streak-free dry",
      "Interior quick vacuum",
      "Windows inside & out",
    ],
  },
  {
    key: "interior",
    name: "Interior Detail",
    price: "from $159",
    time: "~1.5–2 hrs",
    features: [
      "Deep vacuum & crevices",
      "Shampoo seats & carpets",
      "Plastics cleaned & dressed",
      "Leather clean & condition",
      "Odour neutralise",
    ],
  },
  {
    key: "exterior",
    name: "Exterior Detail",
    price: "from $169",
    time: "~1.5–2 hrs",
    features: [
      "Snow foam pre-wash",
      "Two-bucket hand wash",
      "Iron & tar decon",
      "Machine polish (single stage)",
      "Paint sealant/wax",
    ],
  },
  {
    key: "full",
    name: "Full Detail (In & Out)",
    price: "from $279",
    time: "~3–4 hrs",
    features: [
      "Everything in Interior + Exterior",
      "Door jambs & boot",
      "Engine bay tidy (on request)",
      "Windows & mirrors",
      "Tyre shine & dress",
    ],
    featured: true,
  },
  {
    key: "ceramic",
    name: "Ceramic Coating (Add-on)",
    price: "POA",
    time: "Multi-hour",
    features: [
      "Paint prep & polish",
      "Durable hydrophobic layer",
      "Easier maintenance",
      "High gloss finish",
      "Warranty available",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Chris – Newstead",
    rating: 5,
    text:
      "EA Detailing did a full detail on my SUV. Looked better than the day I picked it up. Super convenient having them come to my apartment garage.",
  },
  {
    name: "Mia – Carindale",
    rating: 5,
    text:
      "Great communication, on time, and meticulous. Interior shampoo removed old coffee stains completely. Highly recommend!",
  },
  {
    name: "Tom – Springfield Lakes",
    rating: 5,
    text:
      "Booked the night before, they fit me in and smashed it out while I worked from home. Worth every dollar.",
  },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="px-3 py-2 text-sm font-medium hover:text-blue-300">
    {children}
  </a>
);

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />
      <div className="relative">
        <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold tracking-wide">EA Detailing</span>
          </div>
          <nav className="hidden md:flex items-center">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#why">Why Us</NavLink>
            <NavLink href="#areas">Service Area</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#booking">Book</NavLink>
          </nav>
          <div className="md:hidden">
            <Menu />
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Brisbane’s Premium Mobile Car Detailing — We Come to You
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-100">
            From quick washes to full corrections and coatings. Book a professional detail at your home or office anywhere in Brisbane.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking">
              <Button size="lg" className="rounded-2xl">Book Now</Button>
            </a>
            <a href="#services">
              <Button variant="secondary" size="lg" className="rounded-2xl bg-white/10 hover:bg-white/20 text-white">
                View Services
              </Button>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-blue-100 text-sm">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{CONTACT_INFO.phone}</span></div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>{CONTACT_INFO.email}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: typeof SERVICES[number] }) {
  return (
    <Card className={`relative h-full border-blue-900/20 ${s.featured ? "ring-2 ring-blue-500" : ""}`}>
      {s.featured && (
        <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">Most Popular</div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{s.name}</span>
          <span className="text-blue-700 font-semibold">{s.price}</span>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-slate-500"><Clock className="h-4 w-4" />{s.time}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {s.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" /> <span>{f}</span></li>
          ))}
        </ul>
        <a href="#booking" className="block mt-6">
          <Button className="w-full rounded-xl">Book {s.name}</Button>
        </a>
      </CardContent>
    </Card>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Detailing Services</h2>
          <p className="text-slate-600 max-w-2xl">
            Transparent packages with clear inclusions. Prices vary by vehicle size and condition. Ask about fleet & regular maintenance plans.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.key} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: <Car className="h-6 w-6" />, title: "Mobile Convenience", desc:
        "We bring pro-grade tools, power, and products to your driveway or office car park.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />, title: "Quality Obsessed", desc:
        "Top-tier chemicals and safe techniques — two-bucket wash, microfibre-only, careful polish.",
    },
    {
      icon: <Calendar className="h-6 w-6" />, title: "Flexible Scheduling", desc:
        "Morning, afternoon, and weekend slots available across Brisbane.",
    },
    {
      icon: <Star className="h-6 w-6" />, title: "Trusted Locals", desc:
        "Brisbane-based, fully insured, with 5★ service you’ll call back for.",
    },
  ];
  return (
    <section id="why" className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose EA Detailing</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700">{it.icon}</div>
                  <span>{it.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold">We Service Greater Brisbane</h2>
        </div>
        <p className="mt-2 text-slate-600 max-w-3xl">
          We’re fully mobile and come to you anywhere in Brisbane and nearby regions. Power and water available on-board if needed.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SERVICE_AREAS.map((a) => (
            <div key={a} className="rounded-xl border p-3 text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" /> {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1607863680177-0d4c45933bcb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521401292936-0a2129a30b22?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
        <p className="mt-2 text-slate-600">Swap these placeholders for your own photos and videos.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl shadow">
              <img src={src} alt="EA Detailing work" className="h-full w-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold">5‑Star Service</h2>
        </div>
        <p className="mt-2 text-slate-600">Real feedback from Brisbane customers.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{t.name}</span>
                  <StarRow />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    address: "",
    vehicle: "Sedan",
    package: "Full Detail",
    date: "",
    notes: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Booking Request – ${form.package}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Suburb: ${form.suburb}`,
        `Address: ${form.address}`,
        `Vehicle: ${form.vehicle}`,
        `Service: ${form.package}`,
        `Preferred date: ${form.date}`,
        `Notes: ${form.notes}`,
      ].join("\n")
    );
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const smsHref = useMemo(() => {
    const text = encodeURIComponent(
      `Hi EA Detailing, I'd like to book a ${form.package} for my ${form.vehicle} in ${form.suburb} on ${form.date}. My name is ${form.name}.`
    );
    return `sms:${CONTACT_INFO.phone}?&body=${text}`;
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="booking" className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-blue-700" />
          <h2 className="text-3xl md:text-4xl font-bold">Book a Detail</h2>
        </div>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Tell us what you need and your preferred time. We’ll confirm availability and send you a quick quote.
        </p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Booking Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="04xx xxx xxx" className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Suburb</label>
                  <input name="suburb" value={form.suburb} onChange={handleChange} placeholder="e.g. Carindale" className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Address (optional)</label>
                  <input name="address" value={form.address} onChange={handleChange} placeholder="Street address" className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Vehicle Type</label>
                  <select name="vehicle" value={form.vehicle} onChange={handleChange} className="w-full mt-1 rounded-xl border px-3 py-2">
                    <option>Sedan</option>
                    <option>Hatch</option>
                    <option>SUV</option>
                    <option>4WD</option>
                    <option>Ute</option>
                    <option>Van</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Service Package</label>
                  <select name="package" value={form.package} onChange={handleChange} className="w-full mt-1 rounded-xl border px-3 py-2">
                    {SERVICES.map((s) => (
                      <option key={s.key}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Preferred Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full mt-1 rounded-xl border px-3 py-2" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Pet hair? Stains? Access/parking details?" className="w-full mt-1 rounded-xl border px-3 py-2 h-28" />
                </div>
                <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
                  <a href={mailtoHref}><Button className="rounded-xl"><Send className="h-4 w-4 mr-2" /> Send by Email</Button></a>
                  <a href={smsHref}><Button variant="secondary" className="rounded-xl">Send SMS Draft</Button></a>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-3">
              <p><strong>1.</strong> We confirm your time and send a price based on vehicle size & condition.</p>
              <p><strong>2.</strong> We arrive with pro gear. Power & water available on-board if needed.</p>
              <p><strong>3.</strong> Payment: card or cash on completion. Receipts provided.</p>
              <div className="pt-2 border-t">
                <div className="flex items-center gap-2 text-slate-900"><Phone className="h-4 w-4" /> {CONTACT_INFO.phone}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {CONTACT_INFO.email}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">EA Detailing</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Premium mobile car detailing across Greater Brisbane. We come to you at home or work.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#why" className="hover:underline">Why Us</a></li>
            <li><a href="#areas" className="hover:underline">Service Area</a></li>
            <li><a href="#reviews" className="hover:underline">Reviews</a></li>
            <li><a href="#booking" className="hover:underline">Booking</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{CONTACT_INFO.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{CONTACT_INFO.email}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />Brisbane, QLD</li>
            <li className="text-slate-500">{CONTACT_INFO.abn}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-xl bg-white/5 hover:bg-white/10"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-xl bg-white/5 hover:bg-white/10"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} EA Detailing. All rights reserved.
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="bg-blue-700 text-white shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Car className="h-5 w-5" />
            <span>Ready for a showroom finish?</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#booking"><Button className="rounded-xl bg-white text-blue-700 hover:bg-white/90">Book Now</Button></a>
            <a href={`tel:${CONTACT_INFO.phone}`}><Button variant="secondary" className="rounded-xl bg-white/10 text-white hover:bg-white/20"><Phone className="h-4 w-4 mr-2"/> Call</Button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EADetailingSite() {
  // Simple JSON-LD for Local Business SEO (customise before deploying)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: CONTACT_INFO.businessName,
    areaServed: "Brisbane, QLD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    url: "https://your-domain.au",
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO structured data (works in Next.js as well) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero />
      <Services />
      <WhyUs />
      <Areas />
      <Gallery />
      <Reviews />
      <Booking />
      <Footer />
      <StickyCTA />

      {/* Back to top */}
      <a href="#top" className="fixed bottom-24 right-6 p-3 rounded-full shadow-lg bg-white border hover:bg-slate-50" aria-label="Back to top">
        <ChevronRight className="-rotate-90" />
      </a>
    </div>
  );
}
