import Image from "next/image";

export function LogoWall() {
  const partners = [
    {
      name: "EDEKA",
      logo: "/logos/edeka.svg",
    },
    {
      name: "REWE",
      logo: "/logos/rewe.svg",
    },
    {
      name: "Centerscape",
      logo: "/logos/centerscape.svg",
    },
    {
      name: "Amazon",
      logo: "/logos/amazon.svg",
    },
    {
      name: "Warburg Bank",
      logo: "/logos/warburg.svg",
    },
    {
      name: "Decathlon",
      logo: "/logos/decathlon.svg",
    },
    {
      name: "Globus",
      logo: "/logos/globus.svg",
    },
    {
      name: "Kaufland",
      logo: "/logos/kaufland.svg",
    },
    {
      name: "IKEA",
      logo: "/logos/ikea.svg",
    },
    {
      name: "ALDI",
      logo: "/logos/aldi.svg",
    },
  ];

  return (
    <section className="container relative min-h-[50vh] py-32">
      {/* Editorial Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Abstract Shapes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-background to-primary/[0.02]" />
        <div className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-primary/[0.08] via-primary/[0.03] to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Editorial Header */}
        <div className="mb-24 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2px_1fr] lg:gap-16">
          <div className="relative">
            <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">03</span>
            <h2 className="relative ml-12 font-heading text-6xl font-light tracking-tight sm:text-7xl">
              Partner
            </h2>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
            <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
          </div>
          <div className="relative ml-8 lg:ml-0">
            <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              Langjährige Partnerschaften mit führenden Unternehmen bestätigen unsere 
              Expertise und Zuverlässigkeit in der Immobilienvermittlung.
            </p>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border border-primary/10 bg-background/50 p-6 transition-all duration-500 hover:border-primary/30 hover:bg-background/80 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Logo Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-[1px]" />
              
              {/* Logo */}
              <div className="relative h-12 w-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 