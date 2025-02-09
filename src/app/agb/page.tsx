import { SiteHeader } from "@/components/site-header";

export default function AGBPage() {
  const sections = [
    {
      number: "1",
      title: "Angebote",
      content: `Meinen Angeboten liegen die mir erteilten Auskünfte zugrunde.
        Die Angebote werden nach bestem Wissen und Gewissen erteilt.
        Sie sind freibleibend und unverbindlich. Irrtum, Zwischenverkauf
        bzw. Zwischenvermietung bleiben vorbehalten.`
    },
    {
      number: "2",
      title: "Weitergabe von Informationen und Unterlagen",
      content: `Meine Angebote und Mitteilungen sind nur für den Kunden
        bestimmt, von ihm vertraulich zu behandeln und dürfen Dritten
        nicht zugänglich gemacht werden. Gibt der Kunde mein Angebot
        oder meine Informationen an Dritte weiter und schließt der Dritte
        aufgrund dessen einen Hauptvertrag ab, der nach Maßgabe dieser
        Bedingungen provisionspflichtig wäre, so verpflichtet sich der
        Kunde zur Übernahme dieser Zahlung in Höhe der Provision auf
        Grundlage dieser Bedingungen. Ein weiter gehender
        Schadenersatzanspruch wegen unbefugter Weitergabe von
        Informationen bleibt hiervon unberührt.`
    },
    {
      number: "3",
      title: "Entstehen des Provisionsanspruchs",
      content: `Mein Provisionsanspruch entsteht, sobald aufgrund meines
        Nachweises bzw. meiner Vermittlung ein Hauptvertrag bezüglich
        des von mir benannten Objektes zustande gekommen ist. Hierbei
        genügt Mitursächlichkeit meiner Tätigkeit. Wird der Hauptvertrag
        zu anderen als den ursprünglich angebotenen Bedingungen
        abgeschlossen oder kommt er über ein anderes Objekt des von
        mir nachgewiesenen Vertragspartners zustande, so berührt dies
        meinen Provisionsanspruch nicht, sofern das zustande
        gekommene Geschäft mit dem von mir angebotenen Geschäft
        wirtschaftlich identisch ist oder in seinem wirtschaftlichen Erfolg
        nur unwesentlich von dem angebotenen Geschäft abweicht.

        Der Eintritt einer im Hauptvertrag vereinbarten auflösenden
        Bedingung lässt meinen Provisionsanspruch unberührt. Dasselbe
        gilt, wenn der Hauptvertrag durch Ausübung eines vertraglichen
        Rücktrittsrechtes erlischt, sofern dieses aus von einer Partei zu
        vertretenden Gründen oder in deren Verantwortungsbereich
        liegenden Gründen ausgeübt wird.

        Der Provisionsanspruch bleibt im Falle nachträglicher
        Unwirksamkeit des Hauptvertrages aus Gründen, die nicht in dem
        Verantwortungsbereich des Maklers liegen, unberührt.`
    },
    {
      number: "4",
      title: "Fälligkeit des Provisionsanspruchs",
      content: `Mein Provisionsanspruch wird bei Abschluss des Hauptvertrages
        fällig. Die Provision ist zahlbar innerhalb von 14 Tagen nach
        Rechnungslegung ohne jeden Abzug. Im Verzugsfalle sind
        Verzugszinsen in Höhe von 8 % p. a. über dem Basiszinssatz
        fällig.

        Erfolgt der Abschluss des Hauptvertrages ohne meine Teilnahme,
        so ist der Kunde verpflichtet, mir unverzüglich Auskunft über den
        wesentlichen Inhalt des Hauptvertrages zur Berechnung des
        Provisionsanspruchs zu erteilen.

        Auf mein Verlangen hin ist der Kunde verpflichtet, mir eine einfache
        Abschrift des Hauptvertrages zu überlassen.`
    },
    {
      number: "6",
      title: "Tätigwerden für Dritte",
      content: `Ich bin berechtigt, auch für den anderen Vertragsteil des
        Hauptvertrages entgeltlich oder unentgeltlich tätig zu werden.`
    },
    {
      number: "7",
      title: "Haftungsausschluss",
      content: `Die von mir gemachten Angaben beruhen auf Informationen und
        Mitteilungen durch Dritte, insbesondere durch die
        Grundstückseigentümer. Eine Haftung für inhaltliche Richtigkeit
        und / oder Vollständigkeit dieser Angaben wird nicht übernommen.`
    },
    {
      number: "8",
      title: "Erfüllungsort und Gerichtsstand",
      content: `Erfüllungsort und Gerichtsstand für Vollkaufleute ist Dresden.`
    },
    {
      number: "9",
      title: "Teilunwirksamkeit",
      content: `Sollten einzelne Regelungen unserer allgemeinen
        Geschäftsbedingungen unwirksam sein oder werden, so bleibt
        hierdurch die Wirksamkeit der übrigen Bestimmungen unberührt.
        An die Stelle eventueller unwirksamer oder nichtiger
        Bestimmungen treten die gesetzlichen Bestimmungen.`
    },
    {
      number: "10",
      title: "Widerrufsrecht",
      content: `Mit dem Tag der Anfrage und Annahme unseres
        Immobilienangebotes kommt ein Maklervertrag zustande. Sie haben
        das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab
        dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht
        auszuüben, müssen Sie uns:`,
      contact: {
        name: "bierwagen immobilien",
        owner: "Inhaber Dipl.-Ing. oec. Uta Bierwagen",
        address: "Grenzstraße 18",
        city: "01640 Coswig bei Dresden",
        phone: "Telefon: 0351/8106880, mobil: 0172/3536789",
        email: "E-Mail: u.bierwagen@bierwagen-immobilien.de"
      },
      contentAfterContact: `mittels einer eindeutigen Erklärung (z. B. Ein mit der Post
        versandter Brief, Telefax oder E-Mail) über Ihren Entschluss,
        diesen Vertrag zu widerrufen, informieren. Zur Wahrung der
        Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die
        Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.`
    },
    {
      number: "11",
      title: "Folgen des Widerrufs",
      content: `Im Falle eines wirksamen Widerrufs sind die beiderseits
        empfangenen Leistungen zurückzugewähren. Sie sind zur Zahlung
        von Wertersatz für die bis zum Widerruf erbrachte Dienstleistung
        verpflichtet, wenn Sie vor Abgabe Ihrer Vertragserklärung auf
        diese Rechtsfolge hingewiesen wurden und ausdrücklich
        zugestimmt haben, dass wir vor dem Ende der Widerrufsfrist mit
        der Ausführung der Gegenleistung beginnen. Besteht eine
        Verpflichtung zur Zahlung von Wertersatz, kann dies dazu führen,
        dass Sie die vertraglichen Zahlungsverpflichtungen für den
        Zeitraum bis zum Widerruf dennoch erfüllen müssen. Ihr
        Widerrufsrecht erlischt vorzeitig, wenn der Vertrag von beiden
        Seiten auf Ihren ausdrücklichen Wunsch vollständig erfüllt ist,
        bevor Sie Ihr Widerrufsrecht ausgeübt haben. Verpflichtungen zur
        Erstattung von Zahlungen müssen innerhalb von 30 Tagen erfüllt
        werden. Die Frist beginnt für Sie mit der Absendung Ihrer
        Widerrufserklärung, für uns mit dem Empfang dieser.`
    }
  ];

  const provisionssaetze = {
    number: "5",
    title: "Provisionssätze",
    intro: `Für meine Tätigkeit gelten nachstehende Provisionssätze
      zwischen dem Kunden und mir als vereinbart und sind von diesem
      mit Entstehen meines Provisionsanspruchs gem. Ziff. 3 an mich
      zu zahlen.

      Die Berechnung der Provision erfolgt nach Maßgabe der
      nachfolgenden Bestimmungen:`,
    subsections: [
      {
        letter: "a",
        title: "Kauf",
        content: `Bei Grundstückskäufen erfolgt die Berechnung auf Basis des
          vereinbarten Gesamtkaufpreises und aller damit in Verbindung
          stehenden Nebenleistungen, in Höhe von 5 %, soweit nicht anders
          vereinbart, und ist vom Kunden an mich zu zahlen.`
      },
      {
        letter: "b",
        title: "Übertragung von Gesellschaftsrechten",
        content: `Bei Übertragung von Gesellschaftsanteilen oder sonstigen
          Gesellschaftsrechten erfolgt die Berechnung auf Basis des
          Vertragswertes in Höhe von 5 %, soweit nicht anders vereinbart,
          und ist vom Kunden an mich zu zahlen. Vertragswert im Sinne
          dieser Regelung ist der jeweilige Grundstückswert.`
      },
      {
        letter: "c",
        title: "An- und Vorkaufsrecht",
        content: `Bei Vereinbarung von An- und Vorkaufsrechten beträgt die
          Provision 1 % des ermittelten Wertes und ist vom Kunden an mich
          zu zahlen. Die Berechnung des Wertes erfolgt auf Basis des
          Gesamtkaufpreises und aller damit in Verbindung stehenden
          Nebenleistungen.`
      },
      {
        letter: "d",
        title: "Vermietung und Verpachtung",
        bullets: [
          `Bei Verträgen mit einer Laufzeit von unter 10 Jahren beträgt die
          Provision 3,0 Nettomonatsmieten zahlbar durch den Kunden.`,
          `Bei Verträgen mit einer Laufzeit von 10 Jahren und mehr beträgt
          die Provision 4,0 Nettomonatsmieten zahlbar durch den Kunden.`,
          `Für die Ermittlung der Provisionshöhe gemäß vorstehenden
          Bestimmungen wird bei Vereinbarung einer Staffelmiete als
          Nettomonatsmiete die aus der Gesamtlaufzeit des Mietvertrages
          berechnete durchschnittliche monatliche Mietzahlung zugrunde
          gelegt.`,
          `Bei der Berechnung der Nettomonatsmiete bleiben Zeiten,
          während derer keine oder eine geminderte Miete zu zahlen ist,
          unberücksichtigt.`,
          `Die vorstehenden Bestimmungen gelten bei Abschluss eines
          Pachtvertrages entsprechend.`
        ]
      }
    ],
    outro: `Die vorstehend genannten Provisionssätze verstehen sich jeweils
      zzgl. Umsatzsteuer in gesetzlicher Höhe.`
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container relative py-24">
          {/* Editorial Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
            <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            <h1 className="font-heading text-4xl font-light tracking-tight sm:text-5xl mb-16">
              Allgemeine Geschäftsbedingungen
            </h1>

            <div className="divide-y divide-primary/5 space-y-16">
              {/* Regular sections before Provisionssätze */}
              {sections.slice(0, 4).map((section, index) => (
                <div key={index} className={`${index > 0 ? "pt-16" : ""} space-y-8`}>
                  <h2 className="text-3xl font-heading font-light tracking-tight text-foreground flex items-baseline gap-4">
                    <span className="text-primary/50 font-light">{section.number}.</span>
                    <span>{section.title}</span>
                  </h2>
                  <div className="prose prose-lg prose-p:font-light prose-p:text-muted-foreground">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Provisionssätze section */}
              <div className="pt-16 space-y-8">
                <h2 className="text-3xl font-heading font-light tracking-tight text-foreground flex items-baseline gap-4">
                  <span className="text-primary/50 font-light">{provisionssaetze.number}.</span>
                  <span>{provisionssaetze.title}</span>
                </h2>
                <div className="prose prose-lg prose-p:font-light prose-p:text-muted-foreground">
                  {provisionssaetze.intro.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                  <div className="pl-8 space-y-8">
                    {provisionssaetze.subsections.map((subsection, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-xl font-heading font-light tracking-tight text-foreground flex items-baseline gap-3">
                          <span className="text-primary/50 font-light">{subsection.letter})</span>
                          <span>{subsection.title}</span>
                        </h3>
                        {subsection.content && <p>{subsection.content}</p>}
                        {subsection.bullets && (
                          <ul className="list-none pl-0 space-y-4">
                            {subsection.bullets.map((bullet, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="text-primary/20">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  <p>{provisionssaetze.outro}</p>
                </div>
              </div>

              {/* Regular sections after Provisionssätze */}
              {sections.slice(4).map((section, index) => (
                <div key={index} className="pt-16 space-y-8">
                  <h2 className="text-3xl font-heading font-light tracking-tight text-foreground flex items-baseline gap-4">
                    <span className="text-primary/50 font-light">{section.number}.</span>
                    <span>{section.title}</span>
                  </h2>
                  <div className="prose prose-lg prose-p:font-light prose-p:text-muted-foreground">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph.trim()}</p>
                    ))}
                    {section.contact && (
                      <div className="not-prose bg-primary/5 p-8 rounded-lg my-8">
                        <p className="font-light text-muted-foreground">
                          {section.contact.name}<br />
                          {section.contact.owner}<br />
                          {section.contact.address}<br />
                          {section.contact.city}<br />
                          {section.contact.phone}<br />
                          {section.contact.email}
                        </p>
                      </div>
                    )}
                    {section.contentAfterContact && (
                      <p>{section.contentAfterContact}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 