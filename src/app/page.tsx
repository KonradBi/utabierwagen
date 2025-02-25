"use client";

import { SiteHeader } from "@/components/site-header";
import { NetworkVisualization } from "@/components/network-visualization";
import Image from "next/image";
import Link from "next/link";
import { Building2, LandPlot, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen overflow-hidden"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/frauenkirche bierwagen immobilien.jpg"
              alt="Frauenkirche Dresden"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background/50" />
          </motion.div>

          {/* Content Container */}
          <div className="container relative z-10 grid min-h-screen grid-cols-1 items-center gap-24 lg:grid-cols-[1fr_2px_1fr]">
            {/* Left Column - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="group relative">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70 blur-2xl opacity-70 transition-all duration-500 group-hover:opacity-100" 
                />
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary/50 to-transparent opacity-50 backdrop-blur transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Main Image */}
                <motion.div 
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative aspect-square w-[280px] overflow-hidden rounded-full border border-primary/10 bg-background/50 p-1 backdrop-blur lg:w-[400px]"
                >
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
                </motion.div>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden h-[70vh] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" 
            />

            {/* Right Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative space-y-8 text-center lg:text-left"
            >
              {/* Small Title */}
              <div className="space-y-3">
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="inline-block text-sm font-light tracking-[0.2em] text-white drop-shadow-lg"
                >
                  SEIT 1990
                </motion.span>
                <p className="text-base font-light tracking-[0.15em] text-white drop-shadow-lg">
                  {Array.from("IMMOBILIENEXPERTIN").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </p>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="font-heading text-6xl font-extralight tracking-tight text-white drop-shadow-lg sm:text-7xl md:text-8xl lg:text-9xl"
                >
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent blur-2xl" />
                    <span className="relative">Uta</span>
                  </span>
                  <br />
                  <span className="relative inline-block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Bierwagen
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mx-auto max-w-[42rem] text-balance text-lg font-light leading-relaxed text-white drop-shadow-lg lg:mx-0"
              >
                Als Ihre Immobilienexpertin in Dresden und Umgebung biete ich Ihnen maßgeschneiderte Lösungen für Ihre Immobilieninvestition. Mit langjähriger Erfahrung und fundierter Marktkenntnis begleite ich Sie bei jedem Schritt.
              </motion.p>

              {/* Call to Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col items-center gap-6 pt-8 lg:items-start lg:pt-12 sm:flex-row"
              >
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-black/40 px-8 py-4 text-base font-light text-white backdrop-blur-sm transition-all hover:border-white hover:bg-black/50"
                >
                  <span className="absolute inset-0 -z-10 translate-y-[150%] bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-90 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="transition-colors duration-500 group-hover:text-primary-foreground">
                    Persönliches Gespräch
                  </span>
                </Link>
                <Link
                  href="/referenzen"
                  className="group inline-flex items-center justify-center gap-2 text-base font-light text-white drop-shadow-lg transition-colors hover:text-white pt-4 hover:gap-3"
                >
                  Referenzen
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services & Expertise Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative py-32"
        >
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
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Mit meiner langjährigen Expertise im Immobilienbereich biete ich Ihnen eine umfassende Beratung und Betreuung. Ich verstehe die individuellen Bedürfnisse meiner Kunden und finde die perfekte Lösung für Ihre Anforderungen.
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
                    <p className="text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                      Als erfahrene Immobilienexpertin biete ich Ihnen eine vertrauliche Vermittlung hochwertiger Entwicklungsgrundstücke und Projektentwicklungen mit Fokus auf nachhaltige Wertschöpfung.
                    </p>
                  </div>
                  <ul className="space-y-4 text-base font-light text-muted-foreground">
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <span>Wohnimmobilien-Portfolios</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <LandPlot className="h-5 w-5" />
                      </div>
                      <span>Entwicklungsprojekte</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <Star className="h-5 w-5" />
                      </div>
                      <span>Diskrete Vermarktung</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Retail */}
              <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
                <div className="space-y-8 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="font-heading text-4xl font-light tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>Retail</h3>
                    <p className="text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
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
                    <p className="text-lg font-light leading-relaxed text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                      Als Ihre Spezialistin für Immobilien biete ich Ihnen eine maßgeschneiderte Beratung. Mit meiner langjährigen Erfahrung und meinem weitreichenden Netzwerk finde ich die optimale Immobilie für Ihre spezifischen Anforderungen.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 01-2 0V7a1 1 0 012 0v4a1 1 0 01-1 1H6v2" />
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
        </motion.section>

        {/* Stats Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          <div className="relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">02</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Erfahrung
                </h2>
              </div>
              <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Jahrzehntelange Expertise und ein tiefgreifendes Verständnis des Immobilienmarktes 
                  machen mich zu Ihrem verlässlichen Partner im Raum Dresden und deutschlandweit.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
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

        {/* Vision & Philosophy Section */}
        <section className="container relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
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
                    <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>03</span>
                    <div className="relative ml-12">
                      <span className="text-sm font-light tracking-widest text-primary animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>UNSERE VISION</span>
                      <h2 className="font-heading text-5xl font-extralight tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
                        <span className="animate-fade-in opacity-0 block" style={{ animationDelay: '800ms' }}>Die Kunst der</span>
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in opacity-0 block" style={{ animationDelay: '1000ms' }}>
                          Immobilien&shy;vermittlung
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-primary/5" />
                  <Image
                    src="/images/frauenkirche bierwagen immobilien.jpg"
                    alt="Frauenkirche Dresden"
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
                    Immobilienvermittlung ist für mich mehr als nur ein Geschäft – es ist eine Kunstform. 
                    Jedes Objekt erzählt seine eigene Geschichte, hat seinen eigenen Charakter und wartet 
                    darauf, von den richtigen Menschen entdeckt zu werden.
                  </p>

                  <div className="grid gap-8 text-base font-light leading-relaxed text-muted-foreground md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-light tracking-tight text-foreground">Philosophie</h3>
                      <p>
                        Als Spezialistin für Immobilien biete ich Ihnen eine diskrete und professionelle Beratung. Mit meinem fundierten Marktwissen und langjähriger Erfahrung begleite ich Sie bei Ihrer Investitionsentscheidung.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-light tracking-tight text-foreground">Anspruch</h3>
                      <p>
                        Höchste Qualität in der Beratung, absolute Diskretion und ein Gespür für 
                        die individuellen Bedürfnisse meiner Kunden zeichnen meine Arbeit aus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Visualization Section */}
        <section className="relative py-32">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          <div className="container relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">04</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Netzwerk
                </h2>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
              </div>
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Mein weitreichendes Netzwerk umfasst führende Unternehmen aus verschiedenen Branchen. 
                  Von Hotels über Einzelhandel bis hin zu Logistik - ich verbinde die richtigen Partner.
                </p>
              </div>
            </div>

            {/* Network Visualization Container */}
            <div className="h-[800px] w-full">
              <NetworkVisualization />
            </div>
          </div>
        </section>

        {/* Erfolgreich vermittelt Section */}
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
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">05</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Erfolgreich vermittelt
                </h2>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
              </div>
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Hier ist eine kuratierte Auswahl meiner erfolgreich vermittelten Objekte.
                </p>
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative w-full overflow-hidden">
              {/* Image Track */}
              <div className="flex w-full">
                <div className="animate-scroll flex gap-4">
                  {/* First Set of Images */}
                  {[
                    {
                      src: "/images/Worldcargocenter.jpg",
                      title: "World Cargo Center Leipzig",
                      location: "Vermietung"
                    },
                    {
                      src: "/images/Verkauf FMZ Center Dresden.JPG",
                      title: "Grundstücksvermittlung",
                      location: "EDEKA Fachmarktzentrum, Dresden"
                    },
                    {
                      src: "/images/Verkauf, Wasapark, Dresden.jpg",
                      title: "Verkauf",
                      location: "Wasapark, Radebeul"
                    },
                    {
                      src: "/images/Vermietung Biomarkt Dresden.jpg",
                      title: "Vermietung",
                      location: "Biomarkt Dresden"
                    },
                    {
                      src: "/images/Vermietung Biomarkt Leipzig.jpg",
                      title: "Vermietung",
                      location: "Biomarkt Leipzig"
                    },
                    {
                      src: "/images/Vermietung Gebäudeensemble Könneritzstraße 25, Dresden.jpg",
                      title: "Vermietung",
                      location: "Gebäudeensemble, Dresden"
                    },
                    {
                      src: "/images/Vermietung Pragerstraße 7 Dresden.jpg",
                      title: "Vermietung",
                      location: "Dresden"
                    },
                    {
                      src: "/images/Vermietung Sachsenpark, Leipzig.jpg",
                      title: "Vermietung",
                      location: "Einkaufszentrum Sachsenpark, Leipzig"
                    },
                    {
                      src: "/images/Vermietung Studenten Apartmenthaus, Univiertel Dresden Uhlandstr.39.JPG",
                      title: "Vermietung",
                      location: "Studenten Apartmenthaus, Dresden"
                    },
                    {
                      src: "/images/Vermietung denn s  Biomarkt EKZ Sachsenpark Leipzig.JPG",
                      title: "Vermietung",
                      location: "denn's Biomarkt, Leipzig"
                    },
                    {
                      src: "/images/Vermietung, Ernstings Family, Dresden.jpg",
                      title: "Vermietung",
                      location: "Ernsting's Family, Dresden"
                    },
                    {
                      src: "/images/Vermietung, Kornmarkthaus, Dresden.jpg",
                      title: "Vermietung",
                      location: "Kornmarkthaus, Bautzen"
                    },
                    {
                      src: "/images/Vermietung; Meininger Hotel, Dresden.jpg",
                      title: "Vermietung",
                      location: "Meininger Hotel, Dresden"
                    },
                    {
                      src: "/images/Investment Wohnanlage Dresden Seidnitz, DobritzerWinterberg Str.,.JPG",
                      title: "Investment",
                      location: "Wohnanlage Dresden"
                    },
                    {
                      src: "/images/Investment penny Markt, Dürer Str. 119, Dresden Johannstadt.jpg",
                      title: "Investment",
                      location: "Penny Markt, Dresden"
                    },
                    {
                      src: "/images/Komplexvermietung EKZ Scheunenhof Pirna.jpg",
                      title: "Exklusivvermietung",
                      location: "EKZ Scheunenhof Pirna"
                    },
                    {
                      src: "/images/Vermietung, BB Bank, Dresden.jpg",
                      title: "Vermietung",
                      location: "BB Bank, Dresden"
                    },
                    {
                      src: "/images/Vermietung Annika Schuhe, Dresden.jpg",
                      title: "Vermietung",
                      location: "Annika Schuhe, Dresden"
                    },
                  ].map((image, index) => (
                    <div key={`first-${index}`} className="relative aspect-[4/3] w-96 shrink-0 overflow-hidden rounded-xl border border-primary/10">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-heading text-xl font-light">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">{image.location}</p>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate Set of Images for seamless scrolling */}
                  {[
                    {
                      src: "/images/Worldcargocenter.jpg",
                      title: "World Cargo Center Leipzig",
                      location: "Vermietung"
                    },
                    {
                      src: "/images/Verkauf FMZ Center Dresden.JPG",
                      title: "Grundstücksvermittlung",
                      location: "EDEKA Fachmarktzentrum, Dresden"
                    },
                    {
                      src: "/images/Verkauf, Wasapark, Dresden.jpg",
                      title: "Verkauf",
                      location: "Wasapark, Radebeul"
                    },
                    {
                      src: "/images/Vermietung Biomarkt Dresden.jpg",
                      title: "Vermietung",
                      location: "Biomarkt, Dresden"
                    },
                    {
                      src: "/images/Vermietung Biomarkt Leipzig.jpg",
                      title: "Vermietung",
                      location: "Einkaufszentrum Sachsenpark, Leipzig"
                    },
                    {
                      src: "/images/Vermietung Gebäudeensemble Könneritzstraße 25, Dresden.jpg",
                      title: "Vermietung",
                      location: "Gebäudeensemble, Dresden"
                    },
                    {
                      src: "/images/Vermietung Pragerstraße 7 Dresden.jpg",
                      title: "Vermietung",
                      location: "Dresden"
                    },
                    {
                      src: "/images/Vermietung Sachsenpark, Leipzig.jpg",
                      title: "Vermietung",
                      location: "EinkaufszentrumSachsenpark, Leipzig"
                    },
                    {
                      src: "/images/Vermietung Studenten Apartmenthaus, Univiertel Dresden Uhlandstr.39.JPG",
                      title: "Vermietung",
                      location: "Studenten Apartmenthaus, Dresden"
                    },
                    {
                      src: "/images/Vermietung denn s  Biomarkt EKZ Sachsenpark Leipzig.JPG",
                      title: "Vermietung",
                      location: "denn's Biomarkt, Leipzig"
                    },
                    {
                      src: "/images/Vermietung, Ernstings Family, Dresden.jpg",
                      title: "Vermietung",
                      location: "Ernsting's Family, Dresden"
                    },
                    {
                      src: "/images/Vermietung, Kornmarkthaus, Dresden.jpg",
                      title: "Vermietung",
                      location: "Kornmarkthaus, Bautzen"
                    },
                    {
                      src: "/images/Vermietung; Meininger Hotel, Dresden.jpg",
                      title: "Vermietung",
                      location: "Meininger Hotel, Dresden"
                    },
                    {
                      src: "/images/Investment Wohnanlage Dresden Seidnitz, DobritzerWinterberg Str.,.JPG",
                      title: "Investment",
                      location: "Wohnanlage, Dresden"
                    },
                    {
                      src: "/images/Investment penny Markt, Dürer Str. 119, Dresden Johannstadt.jpg",
                      title: "Investment",
                      location: "Penny Markt, Dresden"
                    },
                    {
                      src: "/images/Komplexvermietung EKZ Scheunenhof Pirna.jpg",
                      title: "Komplexvermietung",
                      location: "EKZ Scheunenhof, Pirna"
                    },
                    {
                      src: "/images/Vermietung, BB Bank, Dresden.jpg",
                      title: "Vermietung",
                      location: "BB Bank, Dresden"
                    },
                    {
                      src: "/images/Vermietung Annika Schuhe, Dresden.jpg",
                      title: "Vermietung",
                      location: "Annika Schuhe, Dresden"
                    },
                  ].map((image, index) => (
                    <div key={`second-${index}`} className="relative aspect-[4/3] w-96 shrink-0 overflow-hidden rounded-xl border border-primary/10">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-heading text-xl font-light">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">{image.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

          <div className="relative">
            {/* Editorial Header */}
            <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="relative">
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">06</span>
                <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Kontakt
                </h2>
              </div>
              <div className="relative ml-8 lg:ml-0">
                <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  Ich freue mich darauf, Sie kennenzulernen und Ihre Immobilienanfragen persönlich zu besprechen. Kontaktieren Sie mich gerne direkt:
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              {/* Left Column */}
              <div className="relative">
              </div>

              {/* Right Column */}
              <div className="relative">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-light tracking-tight">Telefon</h3>
                        <Link href="tel:+49 (0)351 810 6880" className="text-lg font-light text-muted-foreground transition-colors hover:text-primary">
                          +49 (0)351 810 6880
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-light tracking-tight">E-Mail</h3>
                        <Link href="mailto:u.bierwagen@bierwagen-immobilien.de" className="text-lg font-light text-muted-foreground transition-colors hover:text-primary">
                          u.bierwagen@bierwagen-immobilien.de
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container relative border-t border-primary/10">
          <div className="py-16">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
              {/* Company Info */}
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
                <h4 className="font-heading text-xl font-light tracking-tight">bierwagen immobilien</h4>
                <div className="text-sm font-light leading-relaxed text-muted-foreground">
                  <p>Uta Bierwagen</p>
                  <p>Tel: +49 (0)351 810 6880</p>
                  <p>E-Mail: u.bierwagen@bierwagen-immobilien.de</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                <h4 className="font-heading text-xl font-light tracking-tight">Navigation</h4>
                <ul className="space-y-2 text-sm font-light text-muted-foreground">
                  <li>
                    <Link href="/" className="transition-colors hover:text-primary">Startseite</Link>
                  </li>
                  <li>
                    <Link href="#über" className="transition-colors hover:text-primary">Über</Link>
                  </li>
                  <li>
                    <Link href="#referenzen" className="transition-colors hover:text-primary">Referenzen</Link>
                  </li>
                  <li>
                    <Link href="#kontakt" className="transition-colors hover:text-primary">Kontakt</Link>
                  </li>
                </ul>
              </div>

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
                    <Link href="/agb" className="transition-colors hover:text-primary">AGB</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 border-t border-primary/10 pt-8 text-center animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
              <p className="text-sm font-light text-muted-foreground">
                &copy; {new Date().getFullYear()} bierwagen immobilien. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
