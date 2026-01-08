interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 md:w-8 md:h-8"
      >
        <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="10" y="10" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="14" y="14" width="4" height="4" fill="currentColor"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-base md:text-lg font-semibold tracking-tight">IRONCLAD</span>
        <span className="text-[10px] md:text-xs tracking-wider opacity-75">INFRASTRUCTURE</span>
      </div>
    </div>
  );
}
