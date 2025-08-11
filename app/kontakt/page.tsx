"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/shared/header";
import Footer from "@/components/footer/footer";
import Head from "next/head";

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>Kontakt | ISO - 1a Bau GmbH</title>
        <meta
          name='description'
          content='Kontaktieren Sie ISO - 1a Bau GmbH für Anfragen zu Tiefbau, Hochbau, Installationen und Bauplanung. Wir freuen uns auf Ihre Nachricht.'
        />
        <meta property='og:url' content='https://www.1a-bau.de/kontakt' />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />

        <section className='bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Kontakt</h1>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein
              Projekt besprechen? Wir sind für Sie da!
            </p>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-8 mb-16'>
              <Card className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                    <Phone className='h-8 w-8 text-[#06f]' />
                  </div>
                  <CardTitle className='text-xl'>Telefon</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <p className='text-gray-600'>Rufen Sie uns an:</p>
                  <p className='text-lg font-semibold text-gray-900'>
                    +49 30 123 456 789
                  </p>
                  <p className='text-gray-600'>Mobil: +49 172 987 654 321</p>
                </CardContent>
              </Card>

              <Card className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                    <Mail className='h-8 w-8 text-[#06f]' />
                  </div>
                  <CardTitle className='text-xl'>E-Mail</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <p className='text-gray-600'>Schreiben Sie uns:</p>
                  <p className='text-lg font-semibold text-gray-900'>
                    info@ISO - 1a Bau GmbH.de
                  </p>
                  <p className='text-gray-600'>angebote@ISO - 1a Bau GmbH.de</p>
                </CardContent>
              </Card>

              <Card className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                    <MapPin className='h-8 w-8 text-[#06f]' />
                  </div>
                  <CardTitle className='text-xl'>Adresse</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <p className='text-gray-600'>Besuchen Sie uns:</p>
                  <p className='text-lg font-semibold text-gray-900'>
                    Aslar 123
                  </p>
                  <p className='text-gray-600'>10115 Wetzlar, Deutschland</p>
                </CardContent>
              </Card>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-1 gap-12'>
              <div className='space-y-8'>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-xl flex items-center'>
                      <Clock className='h-5 w-5 mr-2 text-[#06f]' />
                      Öffnungszeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Montag - Freitag:</span>
                      <span className='font-semibold'>07:00 - 17:00 Uhr</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Samstag:</span>
                      <span className='font-semibold'>08:00 - 12:00 Uhr</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Sonntag:</span>
                      <span className='font-semibold'>Geschlossen</span>
                    </div>
                    <div className='pt-3 border-t'>
                      <p className='text-sm text-gray-600'>
                        <strong>Notfall-Hotline:</strong> 24/7 verfügbar
                        <br />
                        +49 172 999 888 777
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle className='text-xl'>Standort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
                      <div className='text-center text-gray-500'>
                        <MapPin className='h-12 w-12 mx-auto mb-2' />
                        <p>Interaktive Karte</p>
                        <p className='text-sm'>Musterstraße 123, Berlin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Bereit für Ihr Bauprojekt?
            </h2>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
              Kontaktieren Sie uns noch heute für ein unverbindliches
              Beratungsgespräch
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-[#06f] hover:bg-[#06f] text-white'
              >
                <Phone className='h-5 w-5 mr-2' />
                +49 30 123 456 789
              </Button>
              <Button size='lg' variant='outline'>
                <Mail className='h-5 w-5 mr-2' />
                E-Mail schreiben
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
