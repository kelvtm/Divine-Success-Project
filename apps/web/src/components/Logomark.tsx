export default function Logomark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="64" height="64" rx="16" fill="#15803D" />
      <path
        d="M18 34 L28 44 L46 20"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="48" cy="16" r="4" fill="#9BC53D" />
    </svg>
  );
}
