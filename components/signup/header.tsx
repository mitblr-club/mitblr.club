import Image from 'next/image';

export function Header() {
  return (
    <header className="relative h-40 w-full">
      <Image
        src="https://abhigyantrips.dev/assets/background.jpg"
        alt="bg-sidebar-mobile"
        fill
        objectFit="cover"
      />
      <div className="absolute left-0 right-0 top-6 flex items-center justify-center">
        <span className="text-3xl font-bold text-white">mitblr.club</span>
      </div>
    </header>
  );
}
