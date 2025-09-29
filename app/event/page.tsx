import { Posts } from "app/components/posts";
import { getEventPosts } from "app/lib/utils";

export const metadata = {
  title: "Event",
  description: "Read my event.",
};

export default function Page() {
  const event = getEventPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Event</h1>
      <Posts posts={event} path="event" />
    </section>
  );
}
