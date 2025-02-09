import { SiteHeader } from "@/components/site-header";
import { LogoWall } from "@/components/logo-wall";
import Image from "next/image";
import Link from "next/link";

const featuredReferences = [
  {
    title: "Business Park – Airport Leipzig/Halle",
    subtitle: "Distributioncenter",
    image: "/images/businesspark.jpg",
  },
  {
    title: "Garbe World Cargo Center - Flughafen Leipzig/Halle",
    subtitle: "BITZER Kühlmaschinenbau Schkeuditz GmbH",
    image: "/images/Garbe-World-Cargo-Center-Leipzig.jpg",
  },
  {
    title: "EKZ Scheunenhof Pirna",
    subtitle: "Projekt der Edeka AG; Vermietung Einzelhandel, Praxen, Betreutes Wohnen",
    image: "/images/EKZ-Scheunenhof.jpg",
  },
  {
    title: "Ferdinandhof Büro- und Geschäftshaus",
    subtitle: "Ferdinandplatz 1-2, Dresden-City, Niederlassung der HUK Coburg Versicherungsgruppe",
    image: "/images/referenz_huk.jpg",
  },
  {
    title: "Geschäftshaus Prager Straße",
    subtitle: "Prager Straße 11, Dresden, Schuhgeschäft Salamander",
    image: "/images/referenz_prager_strasse_.jpg",
  },
  {
    title: "Kolping City Center",
    subtitle: "Haydnstr. 39, Dresden, Ausbildungs- und Bürokomplex Deutsches Rotes Kreuz Bildungswerk Sachsen e.V.",
    image: "/images/referenz_drk.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative min-h-screen overflow-hidden">
          {/* Editorial Background */}
          <div className="absolute inset-0">
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 h-[120vh] w-[80vw] -translate-y-[10%] translate-x-[20%] rotate-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-[30%] h-[80vh] w-[50vw] -translate-x-[30%] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content Container */}
          <div className="container relative grid min-h-screen grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_2px_1fr]">
            {/* Left Column - Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="group relative">
                {/* Image Background Effects */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 blur-2xl opacity-70 transition-all duration-500 group-hover:opacity-100" />
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary/50 to-transparent opacity-50 backdrop-blur transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Main Image */}
                <div className="relative aspect-square w-[280px] overflow-hidden rounded-full border border-primary/10 bg-background/50 p-1 backdrop-blur lg:w-[400px]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/uta_bierwagen_2.png"
                      alt="Uta Bierwagen - Ihre Immobilienexpertin in Dresden"
                      fill
                      sizes="(max-width: 768px) 280px, 400px"
                      className="rounded-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden h-[70vh] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />

            {/* Right Column - Text Content */}
            <div className="relative space-y-8 text-center lg:text-left">
              {/* Small Title */}
              <div className="space-y-1">
                <span className="inline-block text-sm font-light tracking-widest text-primary">SEIT 1990</span>
                <p className="text-base font-light tracking-wide text-muted-foreground">
                  {Array.from("IMMOBILIENEXPERTIN").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block animate-fade-in opacity-0"
                      style={{ animationDelay: `${i * 50 + 200}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="font-heading text-6xl font-extralight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                    <span className="relative">Uta</span>
                  </span>
                  <br />
                  <span className="relative inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Bierwagen
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="mx-auto max-w-[42rem] text-balance text-lg font-light leading-relaxed text-muted-foreground lg:mx-0">
                Als Ihre vertrauensvolle Partnerin für exklusive Gewerbeimmobilien in Dresden 
                verbinde ich jahrzehntelange Expertise mit einem ausgeprägten Gespür für 
                außergewöhnliche Objekte und deren Potenzial.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col items-center gap-6 pt-8 lg:items-start lg:pt-12 sm:flex-row">
                <a
                  href="/kontakt"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary/50 bg-background/80 px-8 py-4 text-base font-light text-primary backdrop-blur transition-all hover:border-primary hover:bg-background"
                >
                  <span className="absolute inset-0 -z-10 translate-y-[150%] bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-90 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="transition-colors duration-500 group-hover:text-primary-foreground">
                    Persönliches Gespräch
                  </span>
                </a>
                <a
                  href="/referenzen"
                  className="group inline-flex items-center justify-center gap-2 text-base font-light text-muted-foreground transition-colors hover:text-primary pt-4"
                >
                  Referenzen
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Expertise Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">01</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Service
                </h2>
              </div>
              <div className="hidden h-full w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Mit über 30 Jahren Erfahrung in der Immobilienvermittlung verbinde ich 
                  tiefgreifendes Marktverständnis mit einem ausgeprägten Gespür für die 
                  individuellen Bedürfnisse meiner Kunden.
                </p>
              </div>
            </div>

            {/* Main Categories */}
            <div className="space-y-32">
              {/* Residential */}
              <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
                <div className="relative overflow-hidden rounded-2xl lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/residential.png"
                    alt="Residential Real Estate"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-heading text-4xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>Residential</h3>
                    <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                      Diskrete Vermittlung hochwertiger Wohnimmobilien-Portfolios durch exzellente 
                      Marktkontakte. Durch unser weitreichendes Netzwerk finden wir den passenden 
                      Käufer für Ihr Portfolio.
                    </p>
                  </div>
                  <ul className="space-y-4 text-base font-light text-muted-foreground">
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span>Wohnimmobilien-Portfolios</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span>Mehrfamilienhäuser</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span>Wohnquartiere</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Retail */}
              <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
                <div className="space-y-8 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="font-heading text-4xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>Retail</h3>
                    <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                      Premium-Einzelhandelsflächen in Bestlagen. Maximale Sichtbarkeit und 
                      optimale Kundenfrequenz für Ihren Geschäftserfolg.
                    </p>
                  </div>
                  <ul className="space-y-4 text-base font-light text-muted-foreground">
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h18v18H3z M3 9h18 M9 21V9 M15 21V9" />
                        </svg>
                      </div>
                      <span>Ladenflächen</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span>Shopping-Center</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h18v18H3z M3 9h18 M9 21V9 M15 21V9" />
                        </svg>
                      </div>
                      <span>Fachmarktzentren</span>
                    </li>
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-2xl lg:aspect-[4/3] lg:order-2">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/retail.png"
                    alt="Retail Real Estate"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>

              {/* Commercial */}
              <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
                <div className="relative overflow-hidden rounded-2xl lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/commercial.png"
                    alt="Commercial Real Estate"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-heading text-4xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>Commercial</h3>
                    <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                      Professionelle Vermittlung hochwertiger Gewerbeimmobilien durch langjährige 
                      Marktkontakte. Durch unser weitreichendes Netzwerk finden wir die passende 
                      Immobilie für Ihre Anforderungen.
                    </p>
                  </div>
                  <ul className="space-y-4 text-base font-light text-muted-foreground">
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span>Büroflächen & Geschäftshäuser</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      </div>
                      <span>Logistikimmobilien & Gewerbeparks</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span>Industrie- & Produktionsflächen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Philosophy Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Magazine Style Layout */}
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
              {/* Left Column */}
              <div className="relative space-y-12">
                <div className="relative space-y-4">
                  <div className="relative">
                    <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>02</span>
                    <div className="relative ml-12">
                      <span className="text-sm font-light tracking-widest text-primary animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>UNSERE VISION</span>
                      <h2 className="font-heading text-5xl font-extralight tracking-tight sm:text-6xl">
                        <span className="animate-fade-in opacity-0 block" style={{ animationDelay: '600ms' }}>Die Kunst der</span>
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in opacity-0 block" style={{ animationDelay: '800ms' }}>
                          Immobilien&shy;vermittlung
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/vision_1.png"
                    alt="Elegante Immobilienvermittlung"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="relative mt-12 space-y-12 lg:mt-24">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/vision_2.png"
                    alt="Premium Immobilien"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8">
                  <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground">
                    Immobilienvermittlung ist für uns mehr als nur ein Geschäft – es ist eine Kunstform. 
                    Jedes Objekt erzählt seine eigene Geschichte, hat seinen eigenen Charakter und wartet 
                    darauf, von den richtigen Menschen entdeckt zu werden.
                  </p>

                  <div className="grid gap-8 text-base font-light leading-relaxed text-muted-foreground md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-light tracking-tight text-foreground">Philosophie</h3>
                      <p>
                        Wir verstehen uns als Kuratoren exklusiver Immobilien, die mit Expertise, 
                        Fingerspitzengefühl und Leidenschaft die perfekte Verbindung zwischen 
                        Immobilie und Interessent schaffen.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-light tracking-tight text-foreground">Anspruch</h3>
                      <p>
                        Höchste Qualität in der Beratung, absolute Diskretion und ein Gespür für 
                        die individuellen Bedürfnisse unserer Kunden zeichnen unsere Arbeit aus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Elements */}
            <div className="mt-24 grid grid-cols-1 gap-12 border-t border-primary/10 pt-24 md:grid-cols-3">
              {[
                {
                  number: "30+",
                  label: "Jahre Erfahrung",
                  description: "Expertise und Vertrauenswürdigkeit seit 1990"
                },
                {
                  number: "500+",
                  label: "Erfolgreiche Vermittlungen",
                  description: "Zufriedene Kunden in Dresden und Umgebung"
                },
                {
                  number: "100%",
                  label: "Engagement",
                  description: "Persönliche Betreuung von Anfang bis Ende"
                }
              ].map((stat, index) => (
                <div key={index} className="group space-y-4 text-center">
                  <div className="relative">
                    <span className="relative inline-block font-heading text-5xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: `${index * 200 + 200}ms` }}>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                      <span className="relative bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                    </span>
                    <div className="mt-2 h-px w-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-500 group-hover:w-24 mx-auto animate-fade-in opacity-0" style={{ animationDelay: `${index * 200 + 400}ms` }} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: `${index * 200 + 600}ms` }}>{stat.label}</h3>
                    <p className="mt-2 text-sm font-light text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: `${index * 200 + 800}ms` }}>{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Quote */}
            <figure className="mx-auto max-w-[80ch]">
              <blockquote className="relative">
                <div className="absolute -left-12 -top-12 text-[12rem] font-black text-primary/10">"</div>
                <p className="relative font-heading text-4xl font-light leading-relaxed tracking-tight sm:text-5xl md:text-6xl">
                  {["Mit", "Frau", "Bierwagen", "haben", "wir", "eine", "Partnerin", "gefunden,", "die", "nicht", "nur", "Immobilien", "vermittelt,", "sondern", "unsere", "Vision", "von", "der", "ersten", "Minute", "an", "versteht", "und", "perfekt", "umsetzt."].map((word, i) => (
                    <span
                      key={i}
                      className="inline-block animate-fade-in opacity-0"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        marginRight: '0.3em'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </p>
                <div className="mt-12 flex items-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '2600ms' }}>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  <div className="text-right">
                    <div className="text-lg font-medium">Michael Schneider</div>
                    <div className="text-base font-light text-muted-foreground">Vorstandsmitglied EDEKA Sachsen</div>
                  </div>
                </div>
              </blockquote>
            </figure>
          </div>
        </section>

        <LogoWall />

        {/* Featured References Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">04</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Referenzen
                </h2>
              </div>
              <div className="hidden h-full w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Eine Auswahl unserer erfolgreich realisierten Projekte. Von Einzelhandelsflächen 
                  über Bürokomplexe bis hin zu Logistikimmobilien – jedes Objekt steht für unsere 
                  Expertise und unser Engagement.
                </p>
              </div>
            </div>

            {/* References Grid */}
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {featuredReferences.map((reference, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col gap-6"
                >
                  {/* Image */}
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-primary/5 transition-colors duration-700 group-hover:bg-primary/10" />
                    <Image
                      src={reference.image}
                      alt={reference.title}
                      fill
                      className="object-cover transition-transform duration-700 scale-110 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-light tracking-tight transition-colors duration-700 group-hover:text-primary">
                      {reference.title}
                    </h3>
                    <p className="text-sm font-light text-muted-foreground">
                      {reference.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="mt-16 flex justify-center">
              <Link
                href="/referenzen"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/50 bg-background/80 px-8 py-4 text-base font-light text-primary backdrop-blur transition-all hover:border-primary hover:bg-background"
              >
                <span className="absolute inset-0 -z-10 translate-y-[150%] bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-90 transition-transform duration-500 group-hover:translate-y-0" />
                <span className="transition-colors duration-500 group-hover:text-primary-foreground">
                  Alle Referenzen ansehen
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">05</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Kontakt
                </h2>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
              </div>
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Vereinbaren Sie ein 
                  persönliches Gespräch oder kontaktieren Sie mich direkt für eine 
                  individuelle Beratung.
                </p>
              </div>
            </div>

            {/* Contact Grid */}
            <div className="max-w-3xl">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="group relative space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-light tracking-tight">Telefon</h3>
                        <a href="tel:+49035181068800172" className="text-lg font-light text-muted-foreground transition-colors hover:text-primary">
                          0351 81068800172
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group relative space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-light tracking-tight">E-Mail</h3>
                        <a href="mailto:info@bierwagen-immobilien.de" className="text-lg font-light text-muted-foreground transition-colors hover:text-primary">
                          info@bierwagen-immobilien.de
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group relative space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-light tracking-tight">Adresse</h3>
                        <p className="text-lg font-light text-muted-foreground">
                          Bautzner Straße 123<br />
                          01099 Dresden
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="relative mt-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/[0.02] to-primary/5 rounded-2xl -m-4" />
                  <form className="relative space-y-6 bg-background/80 backdrop-blur rounded-2xl p-8">
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-light text-muted-foreground">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-2 text-base font-light backdrop-blur transition-colors focus:border-primary focus:outline-none"
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-light text-muted-foreground">
                            E-Mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-2 text-base font-light backdrop-blur transition-colors focus:border-primary focus:outline-none"
                            placeholder="Ihre E-Mail"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-light text-muted-foreground">
                          Betreff
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-2 text-base font-light backdrop-blur transition-colors focus:border-primary focus:outline-none"
                          placeholder="Betreff"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-light text-muted-foreground">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-2 text-base font-light backdrop-blur transition-colors focus:border-primary focus:outline-none"
                          placeholder="Ihre Nachricht"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary/50 bg-background/80 px-8 py-4 text-base font-light text-primary backdrop-blur transition-all hover:border-primary hover:bg-background"
                    >
                      <span className="absolute inset-0 -z-10 translate-y-[150%] bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-90 transition-transform duration-500 group-hover:translate-y-0" />
                      <span className="transition-colors duration-500 group-hover:text-primary-foreground">
                        Nachricht senden
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container relative border-t border-primary/10">
          <div className="py-16">
            <div className="grid gap-8 lg:grid-cols-[2fr_1px_1fr_1px_1fr] lg:gap-16">
              {/* Company Info */}
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
                <h4 className="font-heading text-xl font-light tracking-tight">bierwagen immobilien</h4>
                <div className="text-sm font-light leading-relaxed text-muted-foreground">
                  <p>Grenzstr. 18</p>
                  <p>01640 Coswig b. Dresden</p>
                  <p className="mt-2">Tel: 0351 8106880</p>
                  <p>Mobil: 0172 3536789</p>
                  <p>E-Mail: info@bierwagen-immobilien.de</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent lg:block" />

              {/* Quick Links */}
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                <h4 className="font-heading text-xl font-light tracking-tight">Navigation</h4>
                <ul className="space-y-2 text-sm font-light text-muted-foreground">
                  <li>
                    <Link href="/" className="transition-colors hover:text-primary">Startseite</Link>
                  </li>
                  <li>
                    <Link href="/ueber-mich" className="transition-colors hover:text-primary">Über mich</Link>
                  </li>
                  <li>
                    <Link href="/referenzen" className="transition-colors hover:text-primary">Referenzen</Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="transition-colors hover:text-primary">Kontakt</Link>
                  </li>
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent lg:block" />

              {/* Legal */}
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
                <h4 className="font-heading text-xl font-light tracking-tight">Rechtliches</h4>
                <ul className="space-y-2 text-sm font-light text-muted-foreground">
                  <li>
                    <Link href="/impressum" className="transition-colors hover:text-primary">Impressum</Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="transition-colors hover:text-primary">Datenschutz</Link>
                  </li>
                  <li>
                    <Link href="/agb" className="transition-colors hover:text-primary">Allgemeine Geschäftsbedingungen</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 border-t border-primary/10 pt-8 text-center animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
              <p className="text-sm font-light text-muted-foreground">
                © {new Date().getFullYear()} bierwagen immobilien. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
