import { SiteHeader } from "@/components/site-header";

export default function ImpressumPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container relative py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-light tracking-tight">Impressum</h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                Informationen gemäß § 5 Telemediengesetz (TMG)
              </p>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Anbieter dieser Website</h2>
                <div className="text-lg font-light leading-relaxed text-muted-foreground space-y-2">
                  <p>Dipl. Ing. Oec. Uta Bierwagen</p>
                  <p>Grenzstraße 18, 01640 Coswig</p>
                  <p>Tel. +49 (0)172 35 36 789</p>
                  <p>E-Mail: u.bierwagen@bierwagen-immobilien.de</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Unternehmensdetails</h2>
                <div className="text-lg font-light leading-relaxed text-muted-foreground space-y-2">
                  <p>Einzelunternehmerin</p>
                  <p>Umsatzsteuer-Identifikationsnummer: DE 224552225</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Berufliche Zulassung</h2>
                <div className="text-lg font-light leading-relaxed text-muted-foreground space-y-2">
                  <p>
                    Uta Bierwagen betreibt als Immobilienmaklerin ausschließlich erlaubnispflichtige Tätigkeiten nach § 34c GewO. 
                    Die Erlaubnis wurde durch die Landeshauptstadt Dresden, Ordnungsamt, 01001 Dresden, Postfach 120020, erteilt.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 