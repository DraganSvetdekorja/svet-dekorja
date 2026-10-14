import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/hero1.jpg',
      title: 'Preobrazite svoj dom z vrhunskimi tapetami in fototapetami',
      subtitle: 'Ekskluzivne notranje obloge, samolepilne folije in tkanine vodilnih svetovnih proizvajalcev.',
    },
    {
      image: '/hero2.jpg',
      title: 'Samolepilne folije za hitro in enostavno obnovo namestja',
      subtitle: 'Brez kleja, brez muke, brez zamuda. Izberite iz stotih vzorcev.',
    },
    {
      image: '/hero3.jpg',
      title: 'Luksuzni tepihi in wall tattoos za vsako sobo',
      subtitle: 'Dodajte toplost in karakter vašem prostoru z našo izbirko.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="relative bg-gray-50">
              <img
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="object-cover w-full h-[600px] md:h-[700px]"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-6">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="px-6 py-3 bg-terracotta text-white font-medium rounded hover:bg-terracotta/90 transition-colors"
                    >
                      Razišči kolekcije
                    </button>
                    <button
                      className="px-6 py-3 border border-terracotta text-terracotta font-medium rounded hover:bg-terracotta/10 transition-colors"
                    >
                      Rezerviraj brezplačno svetovanje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? 'bg-terracotta'
                : 'bg-white/50 hover:bg-white/70'
            } transition-colors`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}