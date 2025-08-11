"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Hammer,
  FocusIcon as Foundation,
  Home,
  Wrench,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/shared/header";
import Hero from "@/components/shared/hero";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    icon: Foundation,
    title: "Tiefbau",
    description:
      "Fundamentarbeiten, Tiefbauwerke, Kanalisations- und Wasserinstallationen",
  },
  {
    icon: Home,
    title: "Hochbau",
    description:
      "Wohn- und Geschäftshäuser, Umbauten und Adaptierungen bestehender Gebäude",
  },
  {
    icon: Wrench,
    title: "Installationen",
    description: "Elektro-, Sanitär-, Heizungs- und Klimaanlageninstallationen",
  },
  {
    icon: Shield,
    title: "Entwerfen",
    description: "Komplettes Design vom Konzept- bis zum Ausführungsprojekt",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>
          ISO - 1a Bau GmbH | Tiefbau, Hochbau, Installationen & Planung
        </title>
        <meta
          name='description'
          content='ISO - 1a Bau GmbH – Ihr Partner für Tiefbau, Hochbau, Fundamentarbeiten, Kanal- und Wasserinstallationen, Umbauten, Elektro-, Sanitär-, Heizungs- und Klimaanlagen sowie komplette Bauplanung.'
        />
        <meta
          name='keywords'
          content='Bauunternehmen, Tiefbau, Hochbau, Fundamentarbeiten, Kanalbau, Wasserinstallation, Elektroinstallation, Heizungsinstallation, Sanitärinstallation, Klimaanlagen, Umbau, Bauplanung'
        />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='de' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='ISO - 1a Bau GmbH | Tiefbau, Hochbau & Installationen'
        />
        <meta
          property='og:description'
          content='Fundamentarbeiten, Tiefbauwerke, Hochbau, Kanal- und Wasserinstallationen, Umbauten, Elektro-, Sanitär-, Heizungs- und Klimaanlagen – alles aus einer Hand.'
        />
        <meta property='og:image' content='/image/2024-05-07.webp' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.1a-bau.de' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='ISO - 1a Bau GmbH | Tiefbau, Hochbau & Installationen'
        />
        <meta
          name='twitter:description'
          content='Ihr Baupartner für Tiefbau, Hochbau, Installationen und komplette Bauplanung.'
        />
        <meta name='twitter:image' content='/image/2024-05-07.webp' />

        {/* Schema.org */}
        <script type='application/ld1+json'>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ISO - 1a Bau GmbH",
            url: "https://www.1a-bau.de",
            logo: "https://www.1a-bau.de/logo.png",
            description:
              "ISO - 1a Bau GmbH – Ihr Partner für Tiefbau, Hochbau, Installationen und Bauplanung.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beispielstraße 1",
              addressLocality: "Berlin",
              postalCode: "10115",
              addressCountry: "DE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+49 30 1234567",
              contactType: "customer service",
              areaServed: "DE",
            },
          })}
        </script>

        <link rel='icon' href='/app/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />
        <Hero />

        <section id='services' className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Unsere Leistungen
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Wir bieten komplette Bauleistungen vom Entwurf bis zur
                Fertigstellung
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {services.map((service, index) => (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                >
                  <CardHeader className='text-center'>
                    <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                      <service.icon className='h-8 w-8 text-[#06f]' />
                    </div>
                    <CardTitle className='text-xl'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-center text-gray-600'>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='about' className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                  Über uns
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  ISO - 1a Bau GmbH ist ein renommiertes Bauunternehmen mit über
                  20 Jahren Erfahrung Erfahrung im Bauingenieurwesen und
                  Tiefbau. Unser Team von Experten ist bestrebt,
                  Dienstleistungen höchster Qualität zu erbringen und Umsetzung
                  von Projekten auf höchstem Niveau.
                </p>
                <p className='text-lg text-gray-600 mb-6'>
                  Wir sind spezialisiert auf den Bau von Wohn- und
                  Gewerbegebäuden, Infrastrukturprojekte sowie komplette
                  Installationsarbeiten. Unsere Mission ist es, nicht nur
                  Gebäude, sondern auch langfristige Beziehungen aufzubauen mit
                  unseren Kunden.
                </p>
                <div className='grid grid-cols-2 gap-6 mb-8'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-[#06f] mb-2'>
                      200+
                    </div>
                    <div className='text-gray-600'>Abgeschlossene Projekte</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-[#06f] mb-2'>
                      20+
                    </div>
                    <div className='text-gray-600'>Jahre Erfahrung</div>
                  </div>
                </div>
                <Button
                  className='bg-[#06f] hover:bg-[#06f]/80 text-white'
                  asChild
                  variant='ghost'
                >
                  <Link href='/uber-uns'>
                    <Hammer className='h-4 w-4 mr-2' />
                    Erfahren Sie mehr über uns
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src='/image/2024-05-07.webp'
                  alt='O nama'
                  width={600}
                  height={500}
                  className='rounded-lg shadow-lg w-full h-96 object-cover'
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
