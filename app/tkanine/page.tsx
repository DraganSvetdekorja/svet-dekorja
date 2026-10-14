import { Header } from '@/components/Header';

export default function TkaninePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-16rem)] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Dekorativne tkanine & Zavese</h1>
          <p className="text-lg text-gray-600">
            Stran za dekorativne tkanine in zavese je v izgradnji. Prosimo, poskusite kasneje.
          </p>
        </div>
      </main>
    </>
  );
}