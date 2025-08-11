"use client";

import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header";
import { ProjectGallery } from "@/components/projects/ProjectsGallery";
import Head from "next/head";

const terrasse = "/image/projekat1.jpg";
const außenbereich2 = "/image/projekat1.jpg";
const außenbereich3 = "/image/projekat1.jpg";
const plannung = "/image/projekat1.jpg";
const renovierung2 = "/image/projekat1.jpg";
const garten = "/image/projekat1.jpg";

const projects = [
  {
    id: "1",
    title: "Komplette Hausrenovierung",
    description:
      "Umfassende Sanierung eines historischen Gebäudes mit Erhalt der charakteristischen Elemente.",
    imageSrc: plannung,
    category: "Tiefbau",
    href: "#",
  },
  {
    id: "2",
    title: "Moderne Terrasse",
    description:
      "Neugestaltung eines 500m² großen Gartens mit Terrasse, Wegen und umfangreichen Pflanzarbeiten.",
    imageSrc: terrasse,
    category: "Hochbau",
    href: "#",
  },
  {
    id: "3",
    title: "Gartenumgestaltung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: garten,
    category: "Hochbau",
    href: "#",
  },
  {
    id: "4",
    title: "Badezimmersanierung",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: renovierung2,
    category: "Tiefbau",
    href: "#",
  },
  {
    id: "5",
    title: "Steinmauer",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: außenbereich2,
    category: "Tiefbau",
    href: "#",
  },
  {
    id: "6",
    title: "Pflasterarbeiten",
    description:
      "Komplette Innenrenovierung mit neuen Böden, Wänden und moderner Elektroinstallation.",
    imageSrc: außenbereich3,
    category: "Hochbau",
    href: "#",
  },
];

const categories = ["Alle", "Hochbau", "Tiefbau"];

export default function ReferenzenPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredProjects =
    selectedCategory === "Alle"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Referenzen | ISO - 1a Bau GmbH</title>
        <meta
          name='description'
          content='Sehen Sie unsere erfolgreich abgeschlossenen Bauprojekte im Tiefbau, Hochbau, Installationen und mehr. ISO - 1a Bau GmbH – Qualität seit über 20 Jahren.'
        />
        <meta property='og:url' content='https://www.1a-bau.de/referenzen' />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />

        <section className='bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Unsere Referenzen
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Entdecken Sie unsere erfolgreich realisierten Bauprojekte der
              letzten Jahre
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className='py-8 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Filter className='h-5 w-5 text-gray-600' />
                <span className='text-gray-700 font-medium'>Filter:</span>
              </div>
              <div className='flex space-x-2'>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-[#06f] hover:bg-[#06f] text-white"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.map((project, index) => (
                <ProjectGallery
                  id={project.id}
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  href={project.href}
                  category={project.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Unsere Erfolge in Zahlen
              </h2>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#06f] mb-2'>200+</div>
                <div className='text-gray-600'>Abgeschlossene Projekte</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#06f] mb-2'>20+</div>
                <div className='text-gray-600'>Jahre Erfahrung</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#06f] mb-2'>50M+</div>
                <div className='text-gray-600'>Euro Projektvolumen</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#06f] mb-2'>100%</div>
                <div className='text-gray-600'>Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
