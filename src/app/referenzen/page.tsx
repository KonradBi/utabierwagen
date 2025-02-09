import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const references = [
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
    title: "Geschäftshaus Prager Straße",
    subtitle: "Prager Straße 11, Dresden, Schuhgeschäft Salamander",
    image: "/images/referenz_prager_strasse_.jpg",
  },
  {
    title: "EKZ Scheunenhof Pirna",
    subtitle: "Projekt der Edeka AG; Vermietung Einzelhandel, Praxen, Betreutes Wohnen",
    image: "/images/EKZ-Scheunenhof.jpg",
  },
  {
    title: "Shopping-Center Wallstraße",
    subtitle: "Wallstraße 11, Stuttgarter Hofbräu, Dresden",
    image: "/images/referenz_wallstrasse.jpg",
  },
  {
    title: "Geschäftshaus Altmarkt",
    subtitle: "Altmarkt 10, Dresden, Filiale BB Bank",
    image: "/images/referenz_bbbank.jpg",
  },
  {
    title: "Sachsenpark Leipzig",
    subtitle: "denn's Biomarkt",
    image: "/images/sachsenpark.jpg",
  },
  {
    title: "Ferdinandhof Büro- und Geschäftshaus",
    subtitle: "Ferdinandplatz 1-2, Dresden-City, Niederlassung der HUK Coburg Versicherungsgruppe",
    image: "/images/referenz_huk.jpg",
  },
  {
    title: "Pohlandpassage Büro- und Geschäftshaus",
    subtitle: "Schandauer Straße 34, Dresden, TÜV Rheinland, Bildung und Consulting",
    image: "/images/referenz_pohlandpassage.jpg",
  },
  {
    title: "Projekt EKZ Großenhainer Straße",
    subtitle: "Großenhainer Straße 109-119, Dresden",
    image: "/images/ekz-grossenhainerstrasse.jpg",
  },
  {
    title: "Fachmarktcenter Coswig",
    subtitle: "Moritzburger Straße 84, Verkauf Investment",
    image: "/images/FMZ-Moritzburger-Strasse-Coswig.jpg",
  },
  {
    title: "Ostplatzarkaden Leipzig",
    subtitle: "Geschäftshaus Prager Str. 34/36, TÜV Rheinland, Bildung und Consulting, Inlingua Sprachschule",
    image: "/images/referenz_leipzig.jpg",
  },
  {
    title: "C&A Modekaufhaus",
    subtitle: "Untermarkt 12/14, Freiberg/Sa.",
    image: "/images/CundA-Freiberg.jpg",
  },
  {
    title: "Kolping City Center",
    subtitle: "Haydnstr. 39, Dresden, Ausbildungs- und Bürokomplex Deutsches Rotes Kreuz Bildungswerk Sachsen e.V.",
    image: "/images/referenz_drk.jpg",
  },
  {
    title: "Ärzte- und Bürohaus",
    subtitle: "Dr. Külz-Ring 15, Dresden, Ärzthaus und Wellnessressort 'Dayspa'",
    image: "/images/referenz_dresden.jpg",
  },
  {
    title: "Einzelhandelszentrum Meißen-Krögis",
    subtitle: "",
    image: "/images/referenz_ehz_meissen.jpg",
  },
  {
    title: "Zellwaldcenter",
    subtitle: "Hotel-, Restaurant- und Einzelhandelskomplex, Verkauf Investmentobjekt",
    image: "/images/referenz_zellwald.jpg",
  },
  {
    title: "Weißer Hirsch",
    subtitle: "Parkhotel Weißer Hirsch, Bautzner Landstr. 7, Dresden, Kakadu Bar",
    image: "/images/referenz_kakadu.jpg",
  },
  {
    title: "Biomarkt Schillerplatz, Dresden",
    subtitle: "Vorwerk Podemus",
    image: "/images/Biomarkt -Vorwerk-Podemus-001.jpg",
  },
  {
    title: "Studentenapartmenthaus",
    subtitle: "Uhlandstraße 39, 88 Apartments im Dresdner Univiertel",
    image: "/images/uhlandstraße.jpg",
  },
  {
    title: "dm Drogeriemarkt",
    subtitle: "Obermarkt 4, Freiberg/Sa.",
    image: "/images/dm-dresden-immobilie.jpg",
  },
  {
    title: "Biomarkt",
    subtitle: "Korngasse 5, Freiberg/Sa.",
    image: "/images/Vorwerk-Podemus-Logo 1.png",
  },
  {
    title: "Café Radebeul in den Sidonienhöfen",
    subtitle: "Sidonienstraße, Radebeul-Ost, Dresdner Backhaus GmbH",
    image: "/images/Sidonienhoefe-Radebeul.jpg",
  },
  {
    title: "Kornmarkthaus Bautzen",
    subtitle: "Kornmarkt 20, Mäc Geiz Filiale",
    image: "/images/Kornmarkt-immobilie.jpg",
  },
  {
    title: "EKZ Großenhainer Straße Dresden",
    subtitle: "Ernsting's family",
    image: "/images/Ernstings-family-001.jpg",
  },
  {
    title: "Schillerplatz Dresden",
    subtitle: "Hüblerstraße, anika Schuhgeschäft",
    image: "/images/Huebler6-3k.jpg",
  },
  {
    title: "Vorwerk Podemus Biomarkt",
    subtitle: "Augsburger Straße 4, Dresden",
    image: "/images/Biomarkt-Podemus.jpg",
  },
  {
    title: "Sachsenpark Leipzig",
    subtitle: "Jeans Fritz Filiale",
    image: "/images/Sachsenpark-08-2016-3525.jpg",
  },
];

export default function References() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
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
                <span className="absolute -left-4 top-0 text-6xl font-extralight text-primary/20">03</span>
                <h1 className="relative ml-8 font-heading text-6xl font-light tracking-tight sm:text-7xl">
                  Referenzen
                </h1>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
              </div>
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
              {references.map((reference, index) => (
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
                    {reference.subtitle && (
                      <p className="text-sm font-light text-muted-foreground">
                        {reference.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 