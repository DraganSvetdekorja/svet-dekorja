import { useState } from 'react';
import Link from 'next/link';

export default function ShowroomConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Salon Svet Dekorja</h2>
            <p className="mb-4">Obiskajte nas za osebno svetovanje in ogled vzorcev.</p>
            <p className="mb-2 flex items-center">
              <svg className="h-5 w-5 text-terracotta mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966M15 11.034l3-3m0 0l-3-3m3 3Vm0 8.966c0 2.081-1.62 3.768-3.624 4.418-.55.146-1.136.21-1.752.21s-1.202-.064-1.752-.21C5.62 17.768 4 16.081 4 14m0 8.966v4.034c0 1.105.895 2 2 2h10a2 2 0 002-2v-4.034" />
              </svg>
              Šmartinska 53, 1000 Ljubljana
            </p>
            <p className="mb-2 flex items-center">
              <svg className="h-5 w-5 text-terracotta mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="tel:+38612345678" className="text-terracotta hover:underline">
                +386 1 234 56 78
              </a>
            </p>
            <p className="mb-2 flex items-center">
              <svg className="h-5 w-5 text-terracotta mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@intercont.si" className="text-terracotta hover:underline">
                info@intercont.si
              </a>
            </p>
            <div className="mt-6">
              <Link
                href="/salon"
                className="px-6 py-3 bg-terracotta text-white font-medium rounded hover:bg-terracotta/90 transition-colors"
              >
                Več informacij o salonu
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            {/* Map placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Salon Svet Dekorja lokacija"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.663330088213!2d14.50381831550034!3d46.05692237910302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1d46.05692237910302!2d14.50381831550034!4zMTQuNSwxNTMuMw!5e0!3m2!1ssl!2ssi!4v1620000000000!5m2!1ssl!2ssi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact request modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 hidden md:block" aria-hidden={true}>
          <div className="relative w-full max-w-md max-h-screen">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-medium text-gray-900">
                  Pošljite zahtevo za brezplačno svetovanje
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="float-right text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Vaše ime in priimek
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-terracotta focus:ring-terracotta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-poštni naslov
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-terracotta focus:ring-terracotta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon (neobvezno)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-terracotta focus:ring-terracotta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Sporočilo
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-terracotta focus:ring-terracotta sm:text-sm"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Prekliči
                  </button>
                  <button
                    type="submit"
                    className="ml-2 px-4 py-2 text-sm font-medium text-white bg-terracotta rounded-md hover:bg-terracotta/90"
                  >
                    Pošlji zahtevo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Button to open modal */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-terracotta text-white font-medium rounded hover:bg-terracotta/90 transition-colors"
          >
            Pošlji zahtevo za svetovanje
          </button>
        </div>
      </div>
    </section>
  );
}