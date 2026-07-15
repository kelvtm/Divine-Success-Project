import Image from "next/image";

export default function Logomark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className="rounded-lg"
      style={{ width: size, height: size }}
    />
  );
}
