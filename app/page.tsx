import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategoriesGrid from '@/components/FeaturedCategoriesGrid';
import ShowroomConsultationSection from '@/components/ShowroomConsultationSection';

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategoriesGrid />
        <ShowroomConsultationSection />
      </main>
    </>
  );
}