"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Target, Heart, CheckCircle } from "lucide-react";
import Image from "next/image";
import Header from "@/components/shared/header";
import Footer from "@/components/footer/footer";
import Head from "next/head";

const values = [
  {
    icon: Target,
    title: "Präzision",
    description:
      "Wir arbeiten mit höchster Genauigkeit und Sorgfalt an jedem Detail Ihres Projekts.",
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    description:
      "Bauen ist unsere Leidenschaft - das spüren Sie in jedem unserer Projekte.",
  },
  {
    icon: CheckCircle,
    title: "Qualität",
    description:
      "Qualität steht bei uns an erster Stelle - von der Planung bis zur Übergabe.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Nur im Team können wir Großes erreichen - intern und mit unseren Kunden.",
  },
];

export default function UberUnsPage() {
  return (
    <>
      <Head>
        <title>Über uns | ISO - 1a Bau GmbH</title>
        <meta
          name='description'
          content='ISO - 1a Bau GmbH ist Ihr zuverlässiger Baupartner für Tiefbau, Hochbau und Installationen mit über 20 Jahren Erfahrung und höchsten Qualitätsstandards.'
        />
        <meta property='og:url' content='https://www.1a-bau.de/uber-uns' />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />

        <section className='bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Über uns</h1>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Lernen Sie das Team kennen, das Ihre Bauprojekte zum Erfolg führt
            </p>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                  Unsere Geschichte
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  Seit über 20 Jahren steht ISO - 1a Bau GmbH für Qualität,
                  Zuverlässigkeit und Innovation im Bauwesen. Was als kleines
                  Familienunternehmen begann, ist heute ein etablierter Partner
                  für Bauprojekte jeder Größenordnung.
                </p>
                <p className='text-lg text-gray-600 mb-6'>
                  Unser Erfolg basiert auf der Kombination aus traditionellem
                  Handwerk und modernster Technologie. Wir sind stolz darauf,
                  dass wir durch kontinuierliche Weiterbildung und Investitionen
                  in neue Technologien immer am Puls der Zeit bleiben.
                </p>
                <p className='text-lg text-gray-600 mb-8'>
                  Heute beschäftigen wir über 80 qualifizierte Mitarbeiter und
                  haben mehr als 200 Projekte erfolgreich realisiert. Unser Ziel
                  ist es, auch in Zukunft der bevorzugte Partner für
                  anspruchsvolle Bauprojekte zu sein.
                </p>
                <div className='grid grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-[#06f] mb-2'>
                      80+
                    </div>
                    <div className='text-gray-600'>Mitarbeiter</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-[#06f] mb-2'>
                      200+
                    </div>
                    <div className='text-gray-600'>Projekte</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-[#06f] mb-2'>
                      20+
                    </div>
                    <div className='text-gray-600'>Jahre</div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  width={450}
                  height={450}
                  src='/image/projekat1.jpg'
                  alt='Unser Unternehmen'
                  className='rounded-lg shadow-lg w-full h-96 object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Unsere Werte
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Diese Grundsätze leiten uns bei allem, was wir tun
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {values.map((value, index) => (
                <Card
                  key={index}
                  className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                >
                  <CardHeader>
                    <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                      <value.icon className='h-8 w-8 text-[#06f]' />
                    </div>
                    <CardTitle className='text-xl'>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-600'>
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
