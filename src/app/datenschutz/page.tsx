import { SiteHeader } from "@/components/site-header";

export default function DatenschutzPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container relative py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-light tracking-tight">Datenschutzerklärung</h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                Besten Dank für Ihr Interesse an meinem Unternehmen sowie meinen Dienstleistungen. Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Homepage ist mir ein wichtiges Anliegen.
              </p>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Kontaktdaten des für die Verarbeitung Verantwortlichen</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Verantwortlicher im Sinne der DS-GVO bzw. der jeweils gültigen europäischen und nationalen Datenschutzgesetze ist:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Frau Uta Bierwagen</p>
                  <p>bierwagen immobilien</p>
                  <p>Grenzstraße 18, 01640 Coswig</p>
                  <p>Telefon: +49 (0)172 35 36 789</p>
                  <p>E-Mail: u.bierwagen@bierwagen-immobilien.de</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Erhebung von Daten beim Besuch dieser Seite</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Jeder Zugriff auf meine Homepage und jeder Abruf einer auf der Website hinterlegten Datei wird in einem sog. Logfile protokolliert. Die Speicherung dient unter anderem EDV-System bezogenen Zwecken zur Sicherstellung eines reibungslosen und sicheren Betriebes des Servers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Speicherdauer und Löschung</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Die personenbezogenen Daten werden nur so lange gespeichert, wie der Zweck oder eine gesetzliche Verpflichtung besteht. Im Falle von automatisch erhobenen Daten geschieht dies z. Teil bei Beenden der Session (Schließen oder Verlassen der Website) bei anderen wie z.B. Logfiles nach 1 Monat.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Betroffenrechte</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Folgende Rechte können Sie jederzeit in Anspruch nehmen. Hierzu genügt eine E-Mail an u.bierwagen@bierwagen-immobilien.de
                </p>
                <ul className="list-disc space-y-4 pl-6 text-muted-foreground">
                  <li>
                    <strong>Auskunftsrecht (Art. 15 DS-GVO)</strong>
                    <p>Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung.</p>
                  </li>
                  <li>
                    <strong>Berichtigung / Löschung / Sperrung (Art. 16 / 17 / 18 DS-GVO)</strong>
                    <p>Sie haben das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten.</p>
                  </li>
                  <li>
                    <strong>Recht auf Datenübertragbarkeit (Art. 20 DS-GVO)</strong>
                    <p>Sie haben das Recht, Daten an sich oder Dritte übertragen zu lassen.</p>
                  </li>
                  <li>
                    <strong>Recht auf Widerspruch (Art. 21 DS-GVO)</strong>
                    <p>Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</p>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Cookies</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Diese Internetseite verwendet teilweise Cookies. Cookies sind in der Regel nicht schädlich, sondern dienen bestimmten Funktionen und Benutzerinteraktionen auf der Website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">SSL-Verschlüsselung</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwende ich dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Kontakt</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Treten Sie per E-Mail mit mir in Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage, sowie für mögliche Anschlussfragen gespeichert.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-light tracking-tight">Google Maps</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
