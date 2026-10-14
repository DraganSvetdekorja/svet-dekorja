import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-terracotta/10 border-b border-terracotta/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <p className="text-sm text-terracotta font-medium">
          Brezplačna dostava nad 50 € | Obiščite naš salon Svet Dekorja v Ljubljani
        </p>
        <div className="flex items-center space-x-4 text-sm">
          <Link href="/sl" className="hover:text-terracotta">
            SLO
          </Link>
          <Link href="/hr" className="hover:text-terracotta">
            HR
          </Link>
          <Link href="/en" className="hover:text-terracotta">
            EN
          </Link>
        </div>
      </div>
    </div>
  );
}