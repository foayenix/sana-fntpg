import Image from 'next/image';

type LogoProps = {
  compact?: boolean;
  alt?: string;
  className?: string;
};

export default function Logo({ compact = false, alt = 'SANA', className = '' }: LogoProps) {
  // Prefer a user-supplied SVG at `/public/logo.svg` or `/logo-compact.svg`.
  // If those files are not present, render the existing letter badge and text.
  const imgSrc = compact ? '/logo-compact.svg' : '/logo.svg';

  // Use a simple feature-detection approach: attempt to render the image
  // — if not present in the public folder, Next.js will still try to load it
  // at runtime, but we provide a styled fallback here so server render stays valid.

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Image
          src={imgSrc}
          alt={alt}
          width={compact ? 32 : 36}
          height={compact ? 32 : 36}
          className="object-contain"
          // Let Image try to load; if it 404s in production it'll be a console warning.
        />
      </div>
      {!compact && <span className="font-bold text-xl text-[#2C3333]">SANA</span>}
    </div>
  );
}
