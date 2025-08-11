"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FocusIcon as Foundation,
  Home,
  Wrench,
  Shield,
  Users,
  Clock,
  Award,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/shared/header";
import Footer from "@/components/footer/footer";
import Head from "next/head";

const services = [
  {
    icon: Foundation,
    title: "Tiefbau",
    description: "Komplette Tiefbauarbeiten für solide Fundamente",
    features: [
      "Erdarbeiten und Aushub",
      "Fundamentarbeiten",
      "Kanalisationsarbeiten",
      "Straßenbau",
      "Rohrleitungsbau",
    ],
    image: "/image/projekat1.jpg",
  },
  {
    icon: Home,
    title: "Hochbau",
    description: "Moderne Hochbaulösungen für Wohn- und Geschäftsgebäude",
    features: [
      "Wohngebäude",
      "Geschäftsgebäude",
      "Industriebauten",
      "Renovierung",
      "Sanierung",
    ],
    image: "/image/projekat1.jpg",
  },
  {
    icon: Wrench,
    title: "Installationen",
    description: "Professionelle Installationsarbeiten aller Art",
    features: [
      "Elektrische Installationen",
      "Sanitärinstallationen",
      "Heizungsanlagen",
      "Klimaanlagen",
      "Smart Home Systeme",
    ],
    image: "/image/projekat1.jpg",
  },
  {
    icon: Shield,
    title: "Projektmanagement",
    description: "Komplette Projektbetreuung von A bis Z",
    features: [
      "Projektplanung",
      "Bauüberwachung",
      "Qualitätskontrolle",
      "Terminplanung",
      "Kostenmanagement",
    ],
    image: "/image/projekat1.jpg",
  },
];

const benefits = [
  {
    icon: Award,
    title: "20+ Jahre Erfahrung",
    description: "Langjährige Expertise in allen Bereichen des Bauwesens",
  },
  {
    icon: Users,
    title: "Qualifiziertes Team",
    description: "Hochqualifizierte Fachkräfte und Ingenieure",
  },
  {
    icon: Clock,
    title: "Termingerechte Ausführung",
    description: "Zuverlässige Einhaltung aller vereinbarten Termine",
  },
  {
    icon: CheckCircle,
    title: "Qualitätsgarantie",
    description: "Höchste Qualitätsstandards bei allen Projekten",
  },
];

export default function LeistungPage() {
  return (
    <>
      <Head>
        <title>Unsere Leistungen | ISO - 1a Bau GmbH</title>
        <meta
          name='description'
          content='Erfahren Sie mehr über unsere Leistungen im Tiefbau, Hochbau, Fundamentarbeiten, Kanal- und Wasserinstallationen, Umbauten sowie Elektro-, Sanitär-, Heizungs- und Klimaanlagen.'
        />
        <meta property='og:url' content='https://www.1a-bau.de/leistungen' />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />

        <section className='bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Unsere Leistungen
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Komplette Baulösungen aus einer Hand - von der Planung bis zur
              Übergabe
            </p>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='space-y-16'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className='flex items-center mb-4'>
                      <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4'>
                        <service.icon className='h-6 w-6 text-[#06f]' />
                      </div>
                      <Badge className='bg-orange-100 text-orange-800'>
                        {service.title}
                      </Badge>
                    </div>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                      {service.title}
                    </h3>
                    <p className='text-lg text-gray-600 mb-6'>
                      {service.description}
                    </p>
                    <ul className='space-y-3 mb-8'>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='flex items-center'>
                          <CheckCircle className='h-5 w-5 text-green-500 mr-3' />
                          <span className='text-gray-700'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <Image
                      width={450}
                      height={450}
                      src={service.image || "/image/projekat1.jpg"}
                      alt={service.title}
                      className='rounded-lg shadow-lg w-full h-80 object-cover'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Warum ISO - 1a Bau GmbH?
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Ihre Vorteile bei der Zusammenarbeit mit unserem erfahrenen Team
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                >
                  <CardHeader>
                    <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                      <benefit.icon className='h-8 w-8 text-[#06f]' />
                    </div>
                    <CardTitle className='text-xl'>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-600'>
                      {benefit.description}
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
