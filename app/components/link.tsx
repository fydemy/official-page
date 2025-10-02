"use client";

import { logEvent } from "app/lib/utils";

export default function Link({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      onClick={() => logEvent("social", { path: href })}
      className={className}
    >
      {children}
    </a>
  );
}
