"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "app/lib/utils";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/event": {
    name: "Event",
  },
  "https://discord.gg/7FBpTEXqVj": {
    name: "Discord",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav id="nav">
          <Link href="/">
            <Image src="/web/logo.svg" alt="logo" width={100} height={100} />
          </Link>
          <div className="flex flex-row space-x-4 mt-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => logEvent("nav", { path })}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
