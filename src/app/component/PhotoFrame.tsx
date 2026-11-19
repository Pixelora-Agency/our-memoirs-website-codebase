import Image from "next/image";

interface PhotoFrameProps {
  imageSrc?: string;
  alt?: string;
}

export function PhotoFrame({
  imageSrc = "/Images/placeholder/frame.png",
  alt = "Our Memoirs Photobooth Frame",
}: PhotoFrameProps) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[400px] select-none">
      {/* Mobile Ambient Blurred Backdrop (matches Gambar 2) */}
      <div
        className="lg:hidden absolute -inset-4 -z-10 rounded-3xl overflow-hidden pointer-events-none opacity-60"
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover blur-2xl scale-115"
        />
        <div className="absolute inset-0 bg-[#F5F5F5]/30 backdrop-blur-xs" />
      </div>

      {/* Desktop Fanned-Out Background Cards (matches Gambar 1) */}
      {/* Left tilted card */}
      <div
        className=" absolute inset-0 -translate-x-25 sm:-translate-x-45 md:-translate-x-45 translate-y-1 md:translate-y-20 -rotate-[8deg] opacity-40 blur-[1.5px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative w-full h-full scale-60 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="400px"
            className="object-cover rounded-2xl blur-xs"
          />
        </div>
      </div>

      {/* Right tilted card */}
      <div
        className="absolute inset-0 translate-x-25 sm:translate-x-45 md:translate-x-45 translate-y-1 md:translate-y-20 rotate-[8deg] opacity-40 blur-[1.5px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative w-full h-full scale-60 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="400px"
            className="object-cover rounded-2xl blur-xs"
          />
        </div>
      </div>

      {/* Center Main Frame Card */}
      <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(52,33,20,0.16)] sm:shadow-[0_24px_50px_rgba(52,33,20,0.18)] transition-all duration-300 hover:shadow-[0_28px_60px_rgba(52,33,20,0.22)]">
        <Image
          src={imageSrc}
          alt={alt}
          width={400}
          height={580}
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 370px, 400px"
          className="w-full h-auto object-cover rounded-2xl block"
        />
      </div>
    </div>
  );
}
