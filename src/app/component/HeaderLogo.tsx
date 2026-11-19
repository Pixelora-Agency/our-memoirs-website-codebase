interface HeaderLogoProps {
  className?: string;
}

export function HeaderLogo({ className = "" }: HeaderLogoProps) {
  return (
    <div
      className={`flex items-baseline justify-center gap-2 select-none ${className}`}
    >
      <span className="text-[28px] md:text-[36px] font-semibold text-primary tracking-tight">
        Our
      </span>
      <span className="font-pinyon font-[family-name:var(--font-pinyon-script)] italic text-[28px] md:text-[36px] text-primary leading-none">
        Memoirs
      </span>
    </div>
  );
}
