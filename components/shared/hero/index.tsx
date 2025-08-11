import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HardHat, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Atlantic Hotels",
    description: "Moderna stambena zgrada sa 120 stanova",
    image: "/image/projekat1.jpg",
    category: "Hochbau",
  },
  {
    id: 2,
    title: "Unique",
    description: "Troetažna podzemna garaža za 200 vozila",
    image: "/image/csm_18_006_191107_unique_Perspektive_01_3d11008033.jpg",
    category: "Hochbau",
  },
  {
    id: 3,
    title: "Europahafenkopf",
    description: "Savremeni poslovni objekat sa 15 spratova",
    image: "/image/csm_BlickEuropahafenNacht_cd3e8e02d8a.jpg",
    category: "Hochbau",
  },
  {
    id: 4,
    title: "Zech Hotels",
    description: "Izgradnja mosta i pristupnih saobraćajnica",
    image: "/image/csm_Eingang_972e6e3383.jpg",
    category: "Hochbau",
  },
  {
    id: 5,
    title: "Severin",
    description: "Izgradnja mosta i pristupnih saobraćajnica",
    image: "/image/csm_Severins_Keitum_1f01136896.jpg",
    category: "Hochbau",
  },
];

export default function Hero() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  return (
    <>
      <section
        id='home'
        className='relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24'
      >
        <div className='absolute inset-0 bg-black opacity-70'>
          <Image
            src={"/image/thatselby--7QPeGK2_iU-unsplash.jpg"}
            alt='hero'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Wir bauen Ihre <span className='text-[#06f]'>Zukunft</span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200'>
              Mehr als 20 Jahre Erfahrung im Tief- und Hochbau. Ihr
              zuverlässiger Partner für alle Arten von Bauarbeiten.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                variant='ghost'
                size='lg'
                className='bg-[#06f] hover:bg-[#06f]/80 text-lg px-8 py-3'
              >
                <Link href='/referenzen'>
                  <HardHat className='h-5 w-5 mr-2' />
                  Unsere Projekte
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='text-gray-900 border-gray-900 hover:bg-white/90 hover:text-gray-900 text-lg px-8 py-3 bg-white'
              >
                <Link href='/kontakt'>Kontaktieren Sie uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section id='projects' className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Unsere Projekte
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Werfen Sie einen Blick auf einige der wichtigsten Projekte, die
              wir erfolgreich abgeschlossen haben
            </p>
          </div>

          <div className='relative'>
            <div className='overflow-hidden rounded-lg'>
              <div
                className='flex transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className='w-full flex-shrink-0'>
                    <div className='grid md:grid-cols-2 gap-8 items-center md:p-12'>
                      <div className='order-2 md:order-1'>
                        <Badge className='mb-4 bg-orange-100 text-orange-800'>
                          {project.category}
                        </Badge>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                          {project.title}
                        </h3>
                        <p className='text-gray-600 text-lg mb-6'>
                          {project.description}
                        </p>
                        <Button className='bg-[#06f] hover:bg-[#06f] text-white'>
                          Weitere Informationen
                        </Button>
                      </div>
                      <div className='order-1 md:order-2'>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className='rounded-lg shadow-lg object-contain'
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className='absolute right-20 md:top-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50'
            >
              <ChevronLeft className='h-6 w-6 text-gray-600' />
            </button>
            <button
              onClick={nextProject}
              className='absolute right-5 md:top-0 transform -translate-y-1/2 bg-white cursor-pointer rounded-full p-2 shadow-lg hover:bg-gray-50'
            >
              <ChevronRight className='h-6 w-6 text-gray-600' />
            </button>

            <div className='flex justify-center mt-6 space-x-2'>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentProject ? "bg-[#06f]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
