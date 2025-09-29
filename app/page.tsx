import { Posts } from "app/components/posts";
import { getEventPosts } from "app/lib/utils";

export default function Page() {
  const event = getEventPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        100% Free & Open-source Academy
      </h1>
      <p className="mb-4">
        We're community-based Software Engineering learning platform.
        <br />
        Mainly using{" "}
        <a href="https://discord.gg/7FBpTEXqVj" className="underline">
          Discord
        </a>
        . So, join now!
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
