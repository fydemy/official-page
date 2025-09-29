"use client";

import { logEvent } from "app/lib/utils";

export default function Button({ path, title }) {
  return (
    <a
      href={path}
      onClick={() => logEvent("social", { path })}
      className="underline"
    >
      {title}
    </a>
  );
}
