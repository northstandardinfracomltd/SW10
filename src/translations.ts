import { TranslationContent, BaseInfo, AircraftInfo, UseCase } from './types';

export const translations: Record<string, TranslationContent> = {
  en: {
    navHome: "Home",
    navBases: "Our Bases",
    navFleet: "Our Fleet",
    navSafety: "Safety & Crew",
    navUseCases: "Activities",
    navAbout: "Our Legacy",
    navContact: "Inquire Now",
    
    heroTitle: "Helicopter & Private Jet Charter",
    heroSubtitle: "Direct operator access for Helicopter & Jet charters across Ibiza, Mallorca, Monaco, Malta, Zurich, London, and Megève. Superior efficiency, elite crews, and unmatched direct pricing.",
    heroCta: "Book Your Charter",
    
    aboutTitle: "Direct Operator Excellence Since 2003",
    aboutBadge: "Direct Booking Advantage",
    aboutP1: "Founded in 2003, FlyPerceval is a premier direct operator of luxury aviation services. Unlike the majority of agencies who function merely as brokers, we own, control, and operate our flights. When you search for Mallorca Ibiza charter helicopter or Monaco Helicopter, you deserve a direct-to-crew connection, not an expensive intermediate broker markup.",
    aboutP2: "By circumventing third-party middlemen, we provide the absolute best guaranteed pricing for your flight routes. For over two decades, we have maintained impeccable safety standards, flying thousands of elite business and leisure travelers to the Mediterranean's most exclusive destinations.",
    aboutHighlightTitle: "Why Book Direct With Us?",
    aboutHighlightDesc: "Many flight providers outsource their flight bookings to us. By choosing FlyPerceval directly, you skip the middleman, secure wholesale pricing, and gain immediate operational updates from our flight coordinators.",
    
    basesTitle: "Exclusive Flight Bases",
    basesSubtitle: "Connecting Europe's most prestigious hubs. Direct dispatch at premium departure and arrival points.",
    
    fleetTitle: "Our Elite Fleet",
    fleetSubtitle: "From heavy-lift twin helicopters to ultra-long-range private jets. Selected for high efficiency, speed, and absolute comfort.",
    fleetSpecs: "Specifications",
    fleetPax: "Passengers",
    fleetSpeed: "Cruising Speed",
    fleetRange: "Range",
    fleetRequestBtn: "Request this aircraft",
    
    safetyTitle: "Safety First: Prohibited Items & Crew Standards",
    safetySubtitle: "Rigorous standards for a seamless flight experience. Please read our safety guidelines carefully.",
    safetyForbiddenTitle: "Strictly Prohibited on Board",
    safetyForbiddenDesc: "In accordance with international aviation security rules, the following items are strictly prohibited in both carry-on and checked luggage on all flights:",
    safetyPilotsTitle: "Seasoned Pilots & Ultimate Safety",
    safetyPilotsDesc: "At FlyPerceval, we maintain a flawless safety record. All of our pilots are veteran commanders with thousands of logged hours in high-density European airspace. Every captain undergo rigorous bi-annual flight safety evaluations and simulator training.",
    safetyTwoPilots: "Dual-Pilot Crew: For maximum peace of mind, a two-pilot crew is available upon request for any of our helicopter or jet transfers.",
    
    forbiddenItemsList: [
      "Explosives, fireworks, ammunition, and flares.",
      "Flammable liquids and solids (e.g., lighter fuels, matches, paints, solvents).",
      "Compressed gases (flammable, non-flammable, or poisonous camping gas, butane, propane).",
      "Corrosive materials (acids, alkalis, mercury, wet-cell batteries).",
      "Toxic, infectious, or hazardous bio-substances.",
      "Unlicensed weapons, firearms, or sharp objects of tactical nature."
    ],
    
    useCasesTitle: "Tailored Aviation Solutions",
    useCasesSubtitle: "Whatever your mission, FlyPerceval executes with military-grade precision and absolute luxury.",
    
    contactTitle: "Inquire Flight Availability",
    contactSubtitle: "FlyPerceval operates strictly on-demand. To secure the best prices, submit your bespoke request below or email us directly. No middleman, no automated generic pricing.",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormRoute: "Requested Route / Destination",
    contactFormAircraft: "Preferred Aircraft",
    contactFormDate: "Target Flight Date & Time",
    contactFormPassengers: "Number of Passengers",
    contactFormTwoPilots: "Request 2-Pilot Crew (On-demand configuration)",
    contactFormNotes: "Special Requirements & Flight Notes",
    contactFormSubmit: "Submit Flight Query",
    contactSuccessMessage: "Thank you for your request. Our direct flight coordinators will review your itinerary and reply within 15 minutes with a custom quotation.",
    contactDirectEmailText: "For urgent manifest requests, contact our crew operations directly at:",
    
    legalMentionsTitle: "Legal Mentions & Aviation Regulatory Disclaimers",
    legalMentionsContent: "FlyPerceval S.A. is a licensed air carrier operating under EU aviation security protocols. Founded in 2003, we manage a private fleet of helicopters and jets. Flight operations are subject to weather conditions and air traffic control clearance. All reservations are custom contracts, governed by international aviation standards.",
    footerRights: "© 2026 FlyPerceval S.A. All rights reserved. Direct Operator.",
    footerOperatorDisclaimer: "Optimized for Helicopter Ibiza, Mallorca Ibiza helicopter, Monaco Helicopter, Malta helicopter, Malte helicopter, and Mallorca Ibiza charter helicopter.",
    experiencesTitle: "CLIENTS OF ALL TYPES"
  },
  de: {
    navHome: "Startseite",
    navBases: "Unsere Basen",
    navFleet: "Unsere Flotte",
    navSafety: "Sicherheit & Crew",
    navUseCases: "Aktivitäten",
    navAbout: "Unsere Tradition",
    navContact: "Flug anfragen",
    
    heroTitle: "Hubschrauber & Privatjet-Charter",
    heroSubtitle: "Direkter Betreiberzugang für Hubschrauber- und Jet-Charter in Ibiza, Mallorca, Monaco, Malta, Zürich, London und Megève. Überragende Effizienz, Elite-Crews und unschlagbare Direktpreise.",
    heroCta: "Charter buchen",
    
    aboutTitle: "Exzellenz als Direktbetreiber seit 2003",
    aboutBadge: "Vorteil der Direktbuchung",
    aboutP1: "FlyPerceval wurde 2003 gegründet und ist ein führender Direktbetreiber von Luxusluftfahrtdiensten. Im Gegensatz zu den meisten Agenturen, die nur als Vermittler (Broker) auftreten, besitzen, kontrollieren und betreiben wir unsere Flüge selbst. Wenn Sie nach Mallorca Ibiza charter helicopter oder Monaco Helicopter suchen, verdienen Sie eine direkte Verbindung zur Crew ohne teure Aufschläge von Zwischenhändlern.",
    aboutP2: "Durch die Umgehung von Drittanbietern bieten wir die absolut besten garantierten Preise für Ihre Flugrouten. Seit über zwei Jahrzehnten halten wir makellose Sicherheitsstandards ein und fliegen Tausende von Elite-Geschäfts- und Freizeitreisenden zu den exklusivsten Zielen des Mittelmeers.",
    aboutHighlightTitle: "Warum direkt bei uns buchen?",
    aboutHighlightDesc: "Viele Fluganbieter lagern ihre Flugbuchungen an uns aus. Wenn Sie sich direkt für FlyPerceval entscheiden, überspringen Sie den Zwischenhändler, sichern sich Großhandelspreise und erhalten sofortige betriebliche Updates von unseren Flugkoordinatoren.",
    
    basesTitle: "Exklusive Flugbasen",
    basesSubtitle: "Verbindung der renommiertesten Drehkreuze Europas. Direkte Abfertigung an Premium-Start- und Landepunkten.",
    
    fleetTitle: "Unsere Elite-Flotte",
    fleetSubtitle: "Von zweimotorigen Schwerlasthubschraubern bis hin zu Privatjets mit極 großer Reichweite. Ausgewählt für hohe Effizienz, Geschwindigkeit und absoluten Komfort.",
    fleetSpecs: "Spezifikationen",
    fleetPax: "Passagiere",
    fleetSpeed: "Reisegeschwindigkeit",
    fleetRange: "Reichweite",
    fleetRequestBtn: "Dieses Flugzeug anfragen",
    
    safetyTitle: "Sicherheit zuerst: Verbotene Gegenstände & Crew-Standards",
    safetySubtitle: "Strenge Standards für ein reibungsloses Flugerlebnis. Bitte lesen Sie unsere Sicherheitsrichtlinien sorgfältig durch.",
    safetyForbiddenTitle: "An Bord strengstens verboten",
    safetyForbiddenDesc: "In Übereinstimmung mit den internationalen Luftsicherheitsvorschriften sind die folgenden Gegenstände sowohl im Handgepäck als auch im aufgegebenen Gepäck auf allen Flügen strengstens verboten:",
    safetyPilotsTitle: "Erfahrene Piloten & Ultimative Sicherheit",
    safetyPilotsDesc: "Bei FlyPerceval blicken wir auf eine makellose Sicherheitsbilanz zurück. Alle unsere Piloten sind erfahrene Kommandanten mit Tausenden von protokollierten Stunden im hochfrequentierten europäischen Luftraum. Jeder Kapitän unterzieht sich strengen halbjährlichen Flugsicherheitsbewertungen und Simulatortrainings.",
    safetyTwoPilots: "Doppel-Pilot-Crew: Für maximale Sicherheit steht auf Anfrage für jeden unserer Hubschrauber- oder Jet-Transfers eine Zwei-Piloten-Crew zur Verfügung.",
    
    forbiddenItemsList: [
      "Sprengstoffe, Feuerwerkskörper, Munition und Leuchtraketen.",
      "Entflammbare Flüssigkeiten und Feststoffe (z. B. Feuerzeugbenzin, Streichhölzer, Farben, Lösungsmittel).",
      "Komprimierte Gase (brennbares, ungiftiges oder giftiges Campinggas, Butan, Propan).",
      "Ätzende Stoffe (Säuren, Laugen, Quecksilber, Nassbatterien).",
      "Toxische, infektiöse oder gefährliche biologische Substanzen.",
      "Nicht lizenzierte Waffen, Schusswaffen oder scharfe Gegenstände taktischer Natur."
    ],
    
    useCasesTitle: "Maßgeschneiderte Luftfahrtlösungen",
    useCasesSubtitle: "Was auch immer Ihre Mission ist, FlyPerceval führt sie mit militälicher Präzision und absolutem Luxus aus.",
    
    contactTitle: "Flugverfügbarkeit anfragen",
    contactSubtitle: "FlyPerceval arbeitet ausschließlich auf Anfrage. Um sich die besten Preise zu sichern, senden Sie Ihre maßgeschneiderte Anfrage unten ab oder schreiben Sie uns direkt per E-Mail. Kein Zwischenhändler, keine automatisierten Pauschalpreise.",
    contactFormName: "Vollständiger Name",
    contactFormEmail: "E-Mail-Adresse",
    contactFormRoute: "Angeforderte Route / Zielort",
    contactFormAircraft: "Bevorzugtes Flugzeug",
    contactFormDate: "Gewünschtes Flugdatum & Uhrzeit",
    contactFormPassengers: "Anzahl der Passagiere",
    contactFormTwoPilots: "2-Piloten-Crew anfordern (On-Demand-Konfiguration)",
    contactFormNotes: "Besondere Anforderungen & Flugnotizen",
    contactFormSubmit: "Fluganfrage senden",
    contactSuccessMessage: "Vielen Dank für Ihre Anfrage. Unsere Direktflug-Koordinatoren werden Ihre Reiseroute prüfen und innerhalb von 15 Minuten mit einem maßgeschneiderten Angebot antworten.",
    contactDirectEmailText: "Für dringende Manifestanfragen wenden Sie sich direkt an unsere Crew-Einsatzleitung unter:",
    
    legalMentionsTitle: "Rechtliche Hinweise & Luftfahrtrechtliche Haftungsausschlüsse",
    legalMentionsContent: "FlyPerceval S.A. ist ein lizenziertes Luftfahrtunternehmen, das unter den Luftsicherheitsprotokollen der EU operiert. Gegründet im Jahr 2003, verwalten wir eine private Flotte von Hubschraubern und Jets. Der Flugbetrieb unterliegt den Wetterbedingungen und der Freigabe durch die Flugsicherung. Alle Reservierungen sind maßgeschneiderte Verträge, die den internationalen Luftfahrtstandards unterliegen.",
    footerRights: "© 2026 FlyPerceval S.A. Alle Rechte vorbehalten. Direktbetreiber.",
    footerOperatorDisclaimer: "Optimiert für Helicopter Ibiza, Mallorca Ibiza helicopter, Monaco Helicopter, Malta helicopter, Malte helicopter, und Mallorca Ibiza charter helicopter.",
    experiencesTitle: "KUNDEN ALLER ART"
  },
  nl: {
    navHome: "Home",
    navBases: "Onze Bases",
    navFleet: "Onze Vloot",
    navSafety: "Veiligheid & Crew",
    navUseCases: "Activiteiten",
    navAbout: "Onze Erfenis",
    navContact: "Aanvraag indienen",
    
    heroTitle: "Helikopter & Privéjet Charter",
    heroSubtitle: "Directe toegang tot operator voor helikopter- en jetcharters in Ibiza, Mallorca, Monaco, Malta, Zürich, Londen en Megève. Superieure efficiëntie, elite bemanningen en ongeëvenaarde directe prijzen.",
    heroCta: "Boek uw Charter",
    
    aboutTitle: "Directe Operator Uitmuntendheid Sinds 2003",
    aboutBadge: "Voordeel van Direct Boeken",
    aboutP1: "FlyPerceval is opgericht in 2003 en is een toonaangevende directe operator van luxe luchtvaartdiensten. In tegenstelling tot de meerderheid van de agentschappen die louter als makelaar (broker) fungeren, bezitten, controleren en exploiteren wij onze vluchten zelf. Wanneer u zoekt naar Mallorca Ibiza charter helicopter of Monaco Helicopter, verdient u een directe verbinding met de bemanning, niet een dure opslag van een tussenpersoon.",
    aboutP2: "Door tussenpersonen te omzeilen, bieden wij de absoluut best gegarandeerde prijzen voor uw vliegroutes. Al meer dan twee decennia handhaven we onberispelijke veiligheidsnormen en vliegen we duizenden elite zakelijke en vrijetijdsreizigers naar de meest exclusieve bestemmingen van de Middellandse Zee.",
    aboutHighlightTitle: "Waarom direct bij ons boeken?",
    aboutHighlightDesc: "Veel vluchtaanbieders besteden hun vluchtboekingen aan ons uit. Door rechtstreeks voor FlyPerceval te kiezen, slaat u de tussenpersoon over, stelt u groothandelsprijzen veilig en ontvangt u onmiddellijke operationele updates van onze vluchtcoördinatoren.",
    
    basesTitle: "Exclusieve Vliegbases",
    basesSubtitle: "Verbinding maken met de meest prestigieuze hubs van Europa. Directe afhandeling op premium vertrek- en aankomstpunten.",
    
    fleetTitle: "Onze Elite Vloot",
    fleetSubtitle: "Van tweemotorige helikopters voor zwaar transport tot privéjets met een ultra-groot bereik. Geselecteerd op hoge efficiëntie, snelheid en absoluut comfort.",
    fleetSpecs: "Specificaties",
    fleetPax: "Passagiers",
    fleetSpeed: "Kruissnelheid",
    fleetRange: "Bereik",
    fleetRequestBtn: "Vraag dit vliegtuig aan",
    
    safetyTitle: "Veiligheid Eerst: Verboden Voorwerpen & Bemanningseisen",
    safetySubtitle: "Strenge normen voor een naadloze vliegervaring. Lees onze veiligheidsrichtlijnen aandachtig door.",
    safetyForbiddenTitle: "Ten strengste verboden aan boord",
    safetyForbiddenDesc: "In overeenstemming met de internationale regels voor de beveiliging van de luchtvaart zijn de volgende voorwerpen ten strengste verboden in zowel handbagage als ruimbagage op alle vluchten:",
    safetyPilotsTitle: "Ervaren Piloten & Ultieme Veiligheid",
    safetyPilotsDesc: "Bij FlyPerceval behouden we een onberispelijke veiligheidshistorie. Al onze piloten zijn ervaren commandanten met duizenden vlieguren in het drukke Europese luchtruim. Elke gezagvoerder ondergaat rigoureuze halfjaarlijkse vliegveiligheidsevaluaties en simulatortraining.",
    safetyTwoPilots: "Dubbele Piloot Bemanning: Voor maximale gemoedsrust is er op aanvraag een bemanning van twee piloten beschikbaar voor al onze helikopter- of jet-transfers.",
    
    forbiddenItemsList: [
      "Explosieven, vuurwerk, munitie en fakkels.",
      "Brandbare vloeistoffen en vaste stoffen (bijv. aanstekerbrandstoffen, lucifers, verf, oplosmiddelen).",
      "Samengeperste gassen (brandbaar, niet-brandbaar of giftig campinggas, butaan, propaan).",
      "Bijtende stoffen (zuren, alkaliën, kwik, natte-celbatterijen).",
      "Toxische, infectieuze of gevaarlijke biologische stoffen.",
      "Niet-gelicentieerde wapens, vuurwapens of scherpe voorwerpen van tactische aard."
    ],
    
    useCasesTitle: "Luchtvaartoplossingen op maat",
    useCasesSubtitle: "Wat uw missie ook is, FlyPerceval voert deze uit met militaire precisie en absolute luxe.",
    
    contactTitle: "Vraag Vluchtbeschikbaarheid aan",
    contactSubtitle: "FlyPerceval werkt uitsluitend op aanvraag. Om de beste prijzen te garanderen, dient u hieronder uw specifieke verzoek in of e-mailt u ons rechtstreeks. Geen tussenpersoon, geen geautomatiseerde algemene tarieven.",
    contactFormName: "Volledige Naam",
    contactFormEmail: "E-mailadres",
    contactFormRoute: "Gevraagde Route / Bestemming",
    contactFormAircraft: "Voorkeur Vliegtuig",
    contactFormDate: "Gewenste Vliegdatum & Tijdstip",
    contactFormPassengers: "Aantal Passagiers",
    contactFormTwoPilots: "Vraag 2-koppige bemanning aan (On-demand configuratie)",
    contactFormNotes: "Speciale Wensen & Vluchtnotities",
    contactFormSubmit: "Vlucht aanvraag indienen",
    contactSuccessMessage: "Dank u voor uw aanvraag. Onze directe vluchtcoördinatoren zullen uw reisschema beoordelen en binnen 15 minuten antwoorden met een offerte op maat.",
    contactDirectEmailText: "Voor dringende manifestverzoeken kunt u rechtstreeks contact opnemen met onze operationele crew via:",
    
    legalMentionsTitle: "Juridische Vermeldingen & Disclaimers voor de Luchtvaart",
    legalMentionsContent: "FlyPerceval S.A. is een gelicentieerde luchtvaartmaatschappij die opereert onder de EU-beveiligingsprotocollen voor de luchtvaart. Opgericht in 2003, beheren we een particuliere vloot van helikopters en jets. Vluchtuitvoering is afhankelijk van de weersomstandigheden en toestemming van de luchtverkeersleiding. Alle reserveringen zijn maatwerkcontracten, beheerst door internationale luchtvaartnormen.",
    footerRights: "© 2026 FlyPerceval S.A. Alle rechten voorbehouden. Directe Operator.",
    footerOperatorDisclaimer: "Geoptimaliseerd voor Helicopter Ibiza, Mallorca Ibiza helicopter, Monaco Helicopter, Malta helicopter, Malte helicopter, en Mallorca Ibiza charter helicopter.",
    experiencesTitle: "KLANTEN VAN ELK TYPE"
  },
  es: {
    navHome: "Inicio",
    navBases: "Nuestras Bases",
    navFleet: "Nuestra Flota",
    navSafety: "Seguridad y Tripulación",
    navUseCases: "Actividades",
    navAbout: "Nuestra Historia",
    navContact: "Solicitud de Vuelo",
    
    heroTitle: "Chárter de Helicópteros y Jets Privados",
    heroSubtitle: "Acceso directo a operador para vuelos y chárteres en helicóptero y jet privado en Ibiza, Mallorca, Mónaco, Malta, Zúrich, Londres y Megève. Eficiencia superior, tripulaciones de élite y precios directos garantizados.",
    heroCta: "Reserve su Chárter",
    
    aboutTitle: "Excelencia como Operador Directo desde 2003",
    aboutBadge: "Ventaja de Reserva Directa",
    aboutP1: "Fundada en 2003, FlyPerceval es un operador directo líder de servicios de aviación de lujo. A diferencia de la mayoría de las agencias que funcionan simplemente como intermediarios (brokers), nosotros poseemos, controlamos y operamos nuestros vuelos. Cuando busca Mallorca Ibiza charter helicopter o Monaco Helicopter, merece una conexión directa con la tripulación, no un recargo de un intermediario costoso.",
    aboutP2: "Al evitar a los intermediarios externos, ofrecemos los mejores precios garantizados para sus rutas de vuelo. Durante más de dos décadas, hemos mantenido estándares de seguridad impecables, transportando a miles de viajeros de negocios y de ocio de élite a los destinos más exclusivos del Mediterráneo.",
    aboutHighlightTitle: "¿Por qué reservar directamente con nosotros?",
    aboutHighlightDesc: "Muchos proveedores de vuelos nos subcontratan sus reservas de vuelos. Al elegir directamente a FlyPerceval, se salta al intermediario, asegura precios de mayorista y obtiene actualizaciones operativas inmediatas de nuestros coordinadores de vuelo.",
    
    basesTitle: "Bases de Vuelo Exclusivas",
    basesSubtitle: "Conectando los centros más prestigiosos de Europa. Despacho directo en puntos de salida y llegada premium.",
    
    fleetTitle: "Nuestra Flota de Élite",
    fleetSubtitle: "Desde helicópteros bimotores de carga pesada hasta jets privados de ultra largo alcance. Seleccionados por su alta eficiencia, velocidad y comodidad absoluta.",
    fleetSpecs: "Especificaciones",
    fleetPax: "Pasajeros",
    fleetSpeed: "Velocidad de Crucero",
    fleetRange: "Autonomía",
    fleetRequestBtn: "Solicitar esta aeronave",
    
    safetyTitle: "La Seguridad es lo Primero: Artículos Prohibidos y Estándares de Tripulación",
    safetySubtitle: "Estándares rigurosos para una experiencia de vuelo fluida. Lea atentamente nuestras pautas de seguridad.",
    safetyForbiddenTitle: "Estrictamente Prohibido a Bordo",
    safetyForbiddenDesc: "De acuerdo con las normas internacionales de seguridad de la aviación, los siguientes artículos están estrictamente prohibidos tanto en el equipaje de mano como en el facturado en todos los vuelos:",
    safetyPilotsTitle: "Pilotos Experimentados y Máxima Seguridad",
    safetyPilotsDesc: "En FlyPerceval, mantenemos un historial de seguridad impecable. Todos nuestros pilotos son comandantes veteranos con miles de horas registradas en el espacio aéreo europeo de alta densidad. Cada capitán se somete a rigurosas evaluaciones semestrales de seguridad de vuelo y entrenamiento en simulador.",
    safetyTwoPilots: "Tripulación de Doble Piloto: Para una máxima tranquilidad, una tripulación de dos pilotos está disponible a pedido para cualquiera de nuestros traslados en helicóptero o jet.",
    
    forbiddenItemsList: [
      "Explosivos, fuegos artificiales, municiones y bengalas.",
      "Líquidos y sólidos inflamables (por ejemplo, combustibles para encendedores, fósforos, pinturas, disolventes).",
      "Gases comprimidos (gas de camping inflamable, no inflamable o venenoso, butano, propano).",
      "Materiales corrosivos (ácidos, álcalis, mercurio, baterías de celda húmeda).",
      "Sustancias biológicas tóxicas, infecciosas o peligrosas.",
      "Armas sin licencia, armas de fuego u objetos punzantes de carácter táctico."
    ],
    
    useCasesTitle: "Soluciones de Aviación a Medida",
    useCasesSubtitle: "Sea cual sea su misión, FlyPerceval la ejecuta con precisión militar y lujo absoluto.",
    
    contactTitle: "Consultar Disponibilidad de Vuelo",
    contactSubtitle: "FlyPerceval opera estrictamente bajo demanda. Para asegurar los mejores precios, envíe su solicitud personalizada a continuación o envíenos un correo electrónico directamente. Sin intermediarios, sin tarifas genéricas automatizadas.",
    contactFormName: "Nombre Completo",
    contactFormEmail: "Correo Electrónico",
    contactFormRoute: "Ruta / Destino Solicitado",
    contactFormAircraft: "Aeronave de Preferencia",
    contactFormDate: "Fecha y Hora de Vuelo Previstas",
    contactFormPassengers: "Número de Pasajeros",
    contactFormTwoPilots: "Solicitar tripulación de 2 pilotos (Configuración bajo demanda)",
    contactFormNotes: "Requisitos Especiales y Notas de Vuelo",
    contactFormSubmit: "Enviar Consulta de Vuelo",
    contactSuccessMessage: "Gracias por su solicitud. Nuestros coordinadores de vuelo directo revisarán su itinerario y responderán en un plazo de 15 minutos con una cotización personalizada.",
    contactDirectEmailText: "Para solicitudes de manifiesto urgentes, póngase en contacto con operaciones de tripulación directamente en:",
    
    legalMentionsTitle: "Menciones Legales y Descargos de Responsabilidad de Aviación",
    legalMentionsContent: "FlyPerceval S.A. es una compañía aérea con licencia que opera bajo los protocolos de seguridad de la aviación de la UE. Fundada en 2003, gestionamos una flota privada de helicópteros y jets. Las operaciones de vuelo están sujetas a las condiciones meteorológicas y a la autorización del control del tráfico aéreo. Todas las reservas son contratos personalizados, regidos por las normas de aviación internacionales.",
    footerRights: "© 2026 FlyPerceval S.A. Todos los derechos reservados. Operador Directo.",
    footerOperatorDisclaimer: "Optimizado para Helicopter Ibiza, Mallorca Ibiza helicopter, Monaco Helicopter, Malta helicopter, Malte helicopter, y Mallorca Ibiza charter helicopter.",
    experiencesTitle: "CLIENTES DE TODO TIPO"
  },
  fr: {
    navHome: "Accueil",
    navBases: "Nos Bases",
    navFleet: "Notre Flotte",
    navSafety: "Sécurité & Équipage",
    navUseCases: "Activités",
    navAbout: "Notre Histoire",
    navContact: "Nous Contacter",
    
    heroTitle: "Location d’Hélicoptères & Jets Privés",
    heroSubtitle: "Accès opérateur direct pour vos vols et charters en hélicoptère et jet privé à Ibiza, Majorque, Monaco, Malte, Zurich, Londres et Megève. Efficacité supérieure, équipages d'élite et tarifs directs garantis.",
    heroCta: "Demander un Devis",
    
    aboutTitle: "Opérateur Direct d'Excellence Depuis 2003",
    aboutBadge: "Avantage Réservation Directe",
    aboutP1: "Fondée en 2003, FlyPerceval est un opérateur direct de premier plan pour l'aviation d'affaires et de loisirs de luxe. Contrairement à la majorité des agences qui ne sont que de simples courtiers (brokers), nous possédons, contrôlons et opérons directement nos appareils. Lorsque vous recherchez un Mallorca Ibiza charter helicopter ou un Monaco Helicopter, vous méritez de traiter en direct avec l'exploitant, sans commission intermédiaire exorbitante.",
    aboutP2: "En éliminant tout intermédiaire, nous garantissons les meilleurs tarifs pour l'ensemble de vos trajets. Depuis plus de deux décennies, nous maintenons des standards de sécurité irréprochables, accompagnant des milliers de voyageurs d'affaires et de VIP vers les destinations les plus prestigieuses de la Méditerranée.",
    aboutHighlightTitle: "Pourquoi Réserver en Direct ?",
    aboutHighlightDesc: "De nombreux courtiers sous-traitent leurs réservations chez nous. En choisissant FlyPerceval en direct, vous évitez les frais de courtage, profitez de tarifs de gros et bénéficiez d'une réactivité opérationnelle immédiate avec nos équipages.",
    
    basesTitle: "Nos Hubs d'Excellence",
    basesSubtitle: "Une desserte directe des destinations les plus prestigieuses d'Europe. Embarquement prioritaire et discret.",
    
    fleetTitle: "Une Flotte d'Exception",
    fleetSubtitle: "De l'hélicoptère bimoteur agile aux jets d'affaires long-courriers de prestige. Alliez vitesse, rayon d'action et confort absolu.",
    fleetSpecs: "Caractéristiques",
    fleetPax: "Passagers",
    fleetSpeed: "Vitesse de croisière",
    fleetRange: "Rayon d'action",
    fleetRequestBtn: "Sélectionner cet appareil",
    
    safetyTitle: "Normes de Sécurité : Matières Interdites & Équipages",
    safetySubtitle: "Des standards rigoureux pour votre sérénité. Veuillez prendre connaissance de nos consignes de sécurité.",
    safetyForbiddenTitle: "Strictement Interdit à Bord",
    safetyForbiddenDesc: "Conformément aux réglementations aériennes internationales, les matières et objets suivants sont strictement interdits en cabine et en soute sur l'ensemble de nos vols :",
    safetyPilotsTitle: "Pilotes Émérites & Sécurité Optimale",
    safetyPilotsDesc: "FlyPerceval affiche un bilan de sécurité exemplaire depuis 2003. Tous nos pilotes sont des professionnels chevronnés comptant des milliers d'heures de vol dans les espaces aériens européens les plus denses. Chaque commandant de bord suit des évaluations de sécurité et des entraînements sur simulateur bi-annuels.",
    safetyTwoPilots: "Double Équipage : Pour votre confort et une sécurité absolue, un équipage à 2 pilotes est disponible sur simple demande pour l'ensemble de nos vols.",
    
    forbiddenItemsList: [
      "Explosifs, feux d'artifice, munitions et fusées de détresse.",
      "Liquides et solides inflammables (combustibles pour briquets, allumettes, peintures, solvants).",
      "Gaz comprimés (gaz de camping inflammable, toxique ou non, butane, propane).",
      "Matières corrosives (acides, alcalis, mercure, batteries à électrolyte liquide).",
      "Substances toxiques, infectieuses ou matières biologiques dangereuses.",
      "Armes sans licence, armes à feu ou objets tranchants à caractère tactique."
    ],
    
    useCasesTitle: "Des Vols Adaptés à Vos Exigences",
    useCasesSubtitle: "Quelle que soit votre destination, FlyPerceval orchestre votre vol avec une rigueur militaire et un luxe discret.",
    
    contactTitle: "Faire une Demande de Vol",
    contactSubtitle: "FlyPerceval opère exclusivement sur-mesure. Pour obtenir le meilleur prix direct opérateur, complétez le formulaire ci-dessous. Notre équipe dédiée vous répondra en moins de 15 minutes. Aucun numéro de téléphone surtaxé, uniquement un service d'excellence en direct.",
    contactFormName: "Nom Complet",
    contactFormEmail: "Adresse E-mail",
    contactFormRoute: "Itinéraire / Destination Souhaitée",
    contactFormAircraft: "Appareil Souhaité",
    contactFormDate: "Date & Heure Souhaitées du Vol",
    contactFormPassengers: "Nombre de Passagers",
    contactFormTwoPilots: "Demander un équipage à 2 pilotes (En option)",
    contactFormNotes: "Exigences Particulières / Consignes de Vol",
    contactFormSubmit: "Envoyer ma Demande de Vol",
    contactSuccessMessage: "Merci pour votre demande. Nos coordinateurs de vol étudient votre itinéraire et vous transmettront un devis sur-mesure sous 15 minutes.",
    contactDirectEmailText: "Pour toute demande de manifeste urgente, contactez notre équipe opérationnelle directement sur :",
    
    legalMentionsTitle: "Mentions Légales & Conditions Réglementaires de l'Aviation",
    legalMentionsContent: "FlyPerceval S.A. est un transporteur aérien certifié opérant conformément aux protocoles de sécurité de l'Union Européenne. Établie en 2003, la compagnie exploite sa propre flotte d'hélicoptères et de jets privés. Les vols sont soumis aux conditions météorologiques et aux autorisations de contrôle aérien. Chaque réservation donne lieu à un contrat de transport régi par les conventions internationales.",
    footerRights: "© 2026 FlyPerceval S.A. Tous droits réservés. Opérateur Aérien Direct.",
    footerOperatorDisclaimer: "Optimisé pour Helicopter Ibiza, Mallorca Ibiza helicopter, Monaco Helicopter, Malta helicopter, Malte helicopter, et Mallorca Ibiza charter helicopter.",
    experiencesTitle: "DES CLIENTS DE TOUS TYPES"
  }
};

export const basesData: BaseInfo[] = [
  {
    id: "ibiza",
    name: "Ibiza Airport (IBZ)",
    location: "Ibiza, Spain",
    seoTag: "Helicopter Ibiza & Charter Flights",
    description: "The primary hub for luxury transfers in the Balearics. Pristine access point for standard Helicopter Ibiza connections, with immediate helicopter transfers straight from private jets to villas or yachts.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Ibiza.jpg"
  },
  {
    id: "mallorca",
    name: "Mallorca Airport (PMI)",
    location: "Palma de Mallorca, Spain",
    seoTag: "Mallorca Ibiza Helicopter Charters",
    description: "A crucial base for premium transit in Spain. Linking Mallorca Ibiza charter helicopter hops, offering scenic flight tracks over crystalline bays and immediate dispatch clearance.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Mallorca.jpg"
  },
  {
    id: "monaco",
    name: "Monaco Helipad (MCM)",
    location: "Fontvieille, Monaco",
    seoTag: "Monaco Helicopter Excellence",
    description: "The peak of luxury flight operations. Ideal for Monaco Helicopter transfers linking Monaco Helipad Fontvieille with Nice Côte d'Azur Airport (NCE) and alpine ski resorts in record time.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Monaco.jpg"
  },
  {
    id: "malta",
    name: "Malta Airport (MLA)",
    location: "Luqa, Malta",
    seoTag: "Malta Helicopter Transfers",
    description: "Connecting the heart of the central Mediterranean. Delivering rapid Malta helicopter and Malte helicopter connections to Gozo, Comino, Sicily, and visiting superyachts.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Malta.jpg"
  },
  {
    id: "zurich",
    name: "Zurich Airport (ZRH)",
    location: "Zurich, Switzerland",
    seoTag: "Zurich Private Jet & Alpine Shuttles",
    description: "Switzerland's preeminent financial and travel gateway. Ideal for seamless helicopter transfers from your private jet arrival directly to elite alpine ski chalets in St. Moritz, Zermatt, and Davos.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Zurich.jpg"
  },
  {
    id: "london",
    name: "London Heliport (EGLW)",
    location: "London, United Kingdom",
    seoTag: "London VIP Helicopter Transfers",
    description: "The premier heliport in the United Kingdom, located in Battersea. Offers rapid luxury shuttle flights from private airports like Farnborough and Biggin Hill directly into the heart of London.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/London.jpg"
  },
  {
    id: "megeve",
    name: "Megève Altiport (MVV)",
    location: "Megève, France",
    seoTag: "Megève Heliport & Alpine Flights",
    description: "Nestled directly within the beautiful French Alps. A crucial base for elite winter ski transfers, Alpine sightseeing flights, and immediate connections to Geneva and Chamonix.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Mege%CC%80ve.jpg"
  }
];

export const aircraftData: AircraftInfo[] = [
  {
    id: "h135",
    name: "Airbus H135",
    type: "helicopter",
    passengers: 6,
    speed: "254 km/h",
    range: "635 km",
    seoText: "The premier twin-engine light utility helicopter, perfect for Helicopter Ibiza hops, Monaco Helicopter shuttles, and Mallorca Ibiza charter helicopter flights. Quiet, spacious, and safe.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Airbus+H135.jpg"
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300",
    type: "jet",
    passengers: 9,
    speed: "830 km/h",
    range: "3,650 km",
    seoText: "An industry-defining light business jet. Perfect for high-speed luxury flights connecting Ibiza, Mallorca, Malta, and mainland European cities.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Embraer+Phenom+300.jpg"
  },
  {
    id: "citation_cj4",
    name: "Cessna Citation CJ4",
    type: "jet",
    passengers: 10,
    speed: "835 km/h",
    range: "4,010 km",
    seoText: "The ideal blend of light-jet economy and midsize-cabin luxury. Perfect for direct flights from Monaco Helipad or Nice to Ibiza and Mallorca.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Cessna+Citation+CJ4.jpg"
  },
  {
    id: "g650",
    name: "Gulfstream G650",
    type: "jet",
    passengers: 19,
    speed: "956 km/h",
    range: "12,960 km",
    seoText: "The gold standard of ultra-long-range luxury jets. Connect any continental destination directly to Mallorca, Ibiza, or Malta in unmatched luxury.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Gulfstream+G650.jpg"
  },
  {
    id: "global6000",
    name: "Bombardier Global 6000",
    type: "jet",
    passengers: 17,
    speed: "934 km/h",
    range: "11,100 km",
    seoText: "Engineered to deliver exceptional comfort and state-of-the-art office environments high above the weather, for pristine business jet flights.",
    imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/Bombardier+Global+6000.jpg"
  }
];

export const useCasesData: UseCase[] = [
  {
    id: "business",
    title: "Business & Executive Transfer",
    description: "Time is your most valuable asset. Arrive at critical summits, yacht charters, or offshore business meetings without delays. Complete privacy and high-speed satellite connectivity on board.",
    iconName: "Briefcase"
  },
  {
    id: "leisure",
    title: "Pleasure & Villa Shuttles",
    description: "Experience direct resort-to-villa transitions. We land you closer to your private estate, beach club, or yacht deck, dodging ground transit congestion entirely.",
    iconName: "Compass"
  },
  {
    id: "repatriation",
    title: "Medical & Repatriation Flights",
    description: "Immediate emergency air evacuation and high-end critical care flight systems. Highly coordinated, swift, and certified medical crews available 24/7.",
    iconName: "Heart"
  },
  {
    id: "events",
    title: "VIP Events & Weddings",
    description: "Create an unforgettable memory. Spectacular grand entries for luxury wedding manifests, Grand Prix racing transfers, VIP concerts, and bespoke aerial photography.",
    iconName: "Sparkles"
  }
];
