import Link from 'next/link';

export default function FeaturedCategoriesGrid() {
  const categories = [
    {
      title: 'Fototapete',
      image: '/category-fototapete.jpg',
      href: '/fototapete',
    },
    {
      title: 'Flis tapete',
      image: '/category-flis.jpg',
      href: '/tapete?material=flis',
    },
    {
      title: 'Samolepilne folije',
      image: '/category-folije.jpg',
      href: '/folije',
    },
    {
      title: 'Tepihi',
      image: '/category-tepihi.jpg',
      href: '/tepahi',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Razpredeljena kategorija
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group block overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-50">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}