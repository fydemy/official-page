import { Posts } from "app/components/posts";
import { getEventPosts } from "app/lib/fs";
import Button from "./components/button";

export default function Page() {
  const event = getEventPosts({ latest: true });

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        100% Free & Open-source Academy
      </h1>
      <p className="mb-4">
        We're community-based Software Engineering learning platform.
        <br />
        Mainly using{" "}
        <Button path="https://discord.gg/7FBpTEXqVj" title="Discord" />. So,
        join now!
      </p>
      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Latest event
        </h1>
        <Posts posts={event} path="event" />
      </div>
    </section>
  );
}
