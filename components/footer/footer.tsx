import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
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
            </div>
            <p className='text-gray-400 mb-4'>
              Ihr zuverlässiger Partner für Bauarbeiten aller Art. Wir bauen mit
              Leidenschaft und Engagement für Qualität.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Leistungen</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Tiefbau
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Hochbau
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Installationen
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Entwerfen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Unternehmen</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Leistung
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Referenzen
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-orange-500 transition-colors'
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
            <div className='space-y-3 text-gray-400'>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span>+381 11 123 4567</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <span>info@isobau.de</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>Wetzlar, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} ISO - 1a Bau GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
