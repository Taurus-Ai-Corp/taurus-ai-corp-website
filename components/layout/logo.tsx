import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center font-bold">
      <Image
        src="/logo.png"
        alt="Taurus AI Corp"
        width={32}
        height={32}
        className="mr-2 size-7 object-contain lg:size-8"
        unoptimized
      />
      <h5 className="font-heading text-lg tracking-wide lg:text-xl">
        TAURUS <span className="text-primary">AI</span>
      </h5>
    </Link>
  );
}
