"use client";

import { Button } from "@/components/ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { Phone } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='bg-white/80 shadow-sm border-b sm:py-2 md:sticky md:top-0 md:z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <div className='relative w-32 h-16'>
              <Image
                src='/image/logo-blue.png'
                alt='Logo'
                fill
                className='object-contain'
              />
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className={`transition-colors ${
                pathname === "/"
                  ? "text-[#06f]"
                  : "text-gray-700 hover:text-[#06f]"
              }`}
            >
              Startseite
            </Link>

            <Link
              href='/leistung'
              className={`transition-colors ${
                pathname === "/leistung"
                  ? "text-[#06f]"
                  : "text-gray-700 hover:text-[#06f]"
              }`}
            >
              Leistung
            </Link>

            <Link
              href='/referenzen'
              className={`transition-colors ${
                pathname === "/referenzen"
                  ? "text-[#06f]"
                  : "text-gray-700 hover:text-[#06f]"
              }`}
            >
              Referenzen
            </Link>

            <Link
              href='/uber-uns'
              className={`transition-colors ${
                pathname === "/uber-uns"
                  ? "text-[#06f]"
                  : "text-gray-700 hover:text-[#06f]"
              }`}
            >
              Über uns
            </Link>

            <Link
              href='/kontakt'
              className={`transition-colors ${
                pathname === "/kontakt"
                  ? "text-[#06f]"
                  : "text-gray-700 hover:text-[#06f]"
              }`}
            >
              Kontakt
            </Link>
          </div>

          <div className='hidden md:block'>
            <Button asChild className='bg-[#06f] hover:bg-[#06f]/90 text-white'>
              <a href='tel:+49123456789'>
                <Phone className='h-4 w-4 mr-2' />
                Rufen Sie uns an
              </a>
            </Button>
          </div>

          <div className='md:hidden'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-white border-t ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className='px-4 pb-4 space-y-4'>
          <Link
            href='/'
            className={`block transition-colors ${
              pathname === "/"
                ? "text-[#06f]"
                : "text-gray-700 hover:text-[#06f]"
            }`}
          >
            Startseite
          </Link>
          <Link
            href='/leistung'
            className={`block transition-colors ${
              pathname === "/leistung"
                ? "text-[#06f]"
                : "text-gray-700 hover:text-[#06f]"
            }`}
          >
            Leistung
          </Link>
          <Link
            href='/referenzen'
            className={`block transition-colors ${
              pathname === "/referenzen"
                ? "text-[#06f]"
                : "text-gray-700 hover:text-[#06f]"
            }`}
          >
            Referenzen
          </Link>
          <Link
            href='/uber-uns'
            className={`block transition-colors ${
              pathname === "/uber-uns"
                ? "text-[#06f]"
                : "text-gray-700 hover:text-[#06f]"
            }`}
          >
            Über uns
          </Link>
          <Link
            href='/kontakt'
            className={`block transition-colors ${
              pathname === "/kontakt"
                ? "text-[#06f]"
                : "text-gray-700 hover:text-[#06f]"
            }`}
          >
            Kontakt
          </Link>
          <Button className='bg-[#06f] hover:bg-[#06f]/90 text-white w-full'>
            <Phone className='h-4 w-4 mr-2' />
            Rufen Sie uns an
          </Button>
        </div>
      </div>
    </nav>
  );
}
