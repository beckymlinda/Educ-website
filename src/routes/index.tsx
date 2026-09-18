import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/educ-consulting-hero.png";
import dashboardImage from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EDUC Consulting International — Education & Pharmacy Systems" },
      {
        name: "description",
        content:
          "EDUC Consulting International builds pharmacy stock and POS systems, configures and supports Moodle, and delivers HEQAMIS, a complete higher education management and quality assurance platform.",
      },
      {
        property: "og:title",
        content: "EDUC Consulting International — Education & Pharmacy Systems",
      },
      {
        property: "og:description",
        content:
          "Pharmacy POS and stock control, Moodle configuration and support, and the HEQAMIS higher education management platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const heqamisModules = [
  {
    code: "MODULE_01",
    title: "Learning Management",
    body: "A full LMS for course content, assessments, grading and classroom communication.",
  },
  {
    code: "MODULE_02",
    title: "Student & Lecturer Portals",
    body: "Separate secure portals for students and lecturers covering results, schedules and materials.",
  },
  {
    code: "MODULE_03",
    title: "Applications & Selection",
    body: "Online student applications with structured screening and selection workflows.",
  },
  {
    code: "MODULE_04",
    title: "Finance & Tuition",
    body: "Tuition tracking, student ledgers, statements and payment reconciliation.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-brand-blue/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-background/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <img src="/logo.jpg" alt="EDUC Consulting International" className="h-10 w-auto" />
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider md:flex">
            <a href="#solutions" className="transition-colors hover:text-brand-blue">
              Solutions
            </a>
            <a href="#heqamis" className="transition-colors hover:text-brand-blue">
              HEQAMIS
            </a>
            <a href="#approach" className="transition-colors hover:text-brand-blue">
              Approach
            </a>
            <a
              href="#contact"
              className="rounded-sm bg-brand-blue px-5 py-2 text-white transition-colors hover:bg-brand-blue/90"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-white">
        <h1 className="sr-only">EDUC Consulting International</h1>
        <img
          src={heroImage}
          alt="EDUC Consulting International — powering education and healthcare with reliable software"
          width={1368}
          height={768}
          className="block h-auto w-full"
        />
      </header>

      {/* Pillars */}
      <section id="solutions" className="border-y border-black/5 bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-xl">
            <span className="font-mono text-sm uppercase tracking-widest text-brand-blue">
              01 // Core Domains
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
              Institutional Solutions
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-black/5 bg-background p-8 transition-all hover:border-brand-blue/20">
              <div className="mb-8 flex size-12 items-center justify-center rounded bg-brand-blue/10 font-mono font-bold text-brand-blue">
                P.01
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold">Pharmacy Systems</h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/60">
                Complete stock control and point of sale for pharmacies, with clear profit and
                loss tracking across every product line.
              </p>
              <ul className="space-y-2 text-xs font-medium uppercase tracking-tighter text-foreground/80">
                <li>— Point of sale &amp; receipts</li>
                <li>— Stock levels &amp; expiry alerts</li>
                <li>— Profit &amp; loss reporting</li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/5 bg-background p-8 transition-all hover:border-brand-green/20">
              <div className="mb-8 flex size-12 items-center justify-center rounded bg-brand-green/10 font-mono font-bold text-brand-green">
                M.02
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold">Moodle Services</h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/60">
                Configuration, deployment and ongoing technical support for Moodle learning
                environments of any size.
              </p>
              <ul className="space-y-2 text-xs font-medium uppercase tracking-tighter text-brand-green">
                <li>— Installation &amp; hosting setup</li>
                <li>— Plugins, themes &amp; integration</li>
                <li>— Staff training &amp; support</li>
              </ul>
            </div>

            <div className="rounded-lg bg-foreground p-8 text-background shadow-xl ring-1 ring-black/10">
              <div className="mb-8 flex size-12 items-center justify-center rounded bg-brand-amber font-mono font-bold text-foreground">
                H.03
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-white">HEQAMIS Platform</h3>
              <p className="mb-6 text-sm leading-relaxed text-background/60">
                Our education management system: learning, portals, admissions, finance and
                quality assurance in one place.
              </p>
              <a
                href="#heqamis"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-amber transition-transform hover:translate-x-1"
              >
                Detailed Module View &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HEQAMIS */}
      <section id="heqamis" className="bg-background px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="font-mono text-sm uppercase tracking-widest text-brand-amber">
              Our Own Platform
            </span>
            <h2 className="mt-4 font-display text-5xl font-black uppercase tracking-tighter">
              HEQAMIS
            </h2>
          </div>

          <div className="grid gap-1 lg:grid-cols-4">
            {heqamisModules.map((m) => (
              <div key={m.code} className="border border-black/5 bg-white p-6">
                <div className="mb-4 font-mono text-[10px] text-brand-blue">{m.code}</div>
                <h4 className="mb-2 font-display text-lg font-bold">{m.title}</h4>
                <p className="text-sm text-foreground/60">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-1 border border-black/5 bg-white p-12">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <h3 className="mb-6 font-display text-3xl font-bold tracking-tight">
                  Quality assurance built in
                </h3>
                <p className="mb-8 text-foreground/70">
                  Beyond day-to-day administration, HEQAMIS gives institutions the evidence they
                  need for accreditation and internal review.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-2 size-2 shrink-0 bg-brand-green" />
                    <div>
                      <span className="block font-bold">Teacher evaluation</span>
                      <span className="text-sm text-foreground/60">
                        Structured student and peer evaluation of lecturers, with reportable
                        results.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 size-2 shrink-0 bg-brand-blue" />
                    <div>
                      <span className="block font-bold">Self-assessment</span>
                      <span className="text-sm text-foreground/60">
                        Departmental quality assurance self-assessment against defined standards.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 size-2 shrink-0 bg-brand-amber" />
                    <div>
                      <span className="block font-bold">Management reporting</span>
                      <span className="text-sm text-foreground/60">
                        Enrolment, finance and academic performance in one dashboard.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={dashboardImage}
                alt="HEQAMIS management dashboard"
                loading="lazy"
                width={1008}
                height={704}
                className="h-full w-full rounded border border-black/5 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-black/5 bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-xl">
            <span className="font-mono text-sm uppercase tracking-widest text-brand-blue">
              02 // Methodology
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
              How we work with you
            </h2>
          </div>
          <div className="grid gap-1 md:grid-cols-4">
            {[
              ["01", "Assess", "We study your current processes, records and pain points."],
              ["02", "Configure", "We tailor the system to your structure, fees and policies."],
              ["03", "Deploy", "Data migration, installation and staff training on site."],
              ["04", "Support", "Ongoing maintenance, updates and responsive help."],
            ].map(([n, title, body]) => (
              <div key={n} className="border border-black/5 bg-background p-8">
                <div className="mb-6 font-mono text-xs text-brand-green">STEP_{n}</div>
                <h4 className="mb-2 font-display text-xl font-bold">{title}</h4>
                <p className="text-sm text-foreground/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/5 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="mb-8 font-display text-4xl font-bold tracking-tight">
                Talk to our <br />
                consultants
              </h2>
              <div className="space-y-8">
                <div>
                  <span className="mb-2 block font-mono text-xs uppercase text-foreground/40">
                    Office
                  </span>
                  <p className="text-sm">Blantyre, Malawi</p>
                </div>
                <div>
                  <span className="mb-2 block font-mono text-xs uppercase text-foreground/40">
                    Enquiries
                  </span>
                  <p className="text-sm font-bold">info@educconsulting.com</p>
                  <p className="text-sm">+265999 67 27 75</p>
                </div>
                <div className="flex gap-1">
                  <div className="size-6 bg-brand-blue" />
                  <div className="size-6 bg-brand-green" />
                  <div className="size-6 bg-brand-amber" />
                </div>
              </div>
            </div>

            <div className="border border-black/5 bg-white p-10 lg:col-span-2">
              <form
                className="grid grid-cols-2 gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:info@educconsulting.com";
                }}
              >
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    Organisation
                  </label>
                  <input
                    type="text"
                    className="border border-black/5 bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    placeholder="University, college or pharmacy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    Interest
                  </label>
                  <select className="border border-black/5 bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none">
                    <option>HEQAMIS implementation</option>
                    <option>Pharmacy stock &amp; POS</option>
                    <option>Moodle configuration &amp; support</option>
                  </select>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border border-black/5 bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    placeholder="you@institution.ac"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    What do you need?
                  </label>
                  <textarea
                    rows={4}
                    className="border border-black/5 bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    placeholder="Describe your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="col-span-2 bg-brand-blue py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-blue/90"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 font-mono text-[10px] uppercase tracking-widest text-foreground/40 md:flex-row">
          <span>&copy; 2026 EDUC Consulting International. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#solutions" className="hover:text-brand-blue">
              Solutions
            </a>
            <a href="#heqamis" className="hover:text-brand-blue">
              HEQAMIS
            </a>
            <a href="#contact" className="hover:text-brand-blue">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
