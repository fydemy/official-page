import Link from "next/link";
import Image from "next/image";
import { formatDate } from "app/lib/utils";

export function Posts({ posts, path }) {
  return (
    <div className="space-y-8">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col sm:flex-row gap-4"
            href={`/${path}/${post.slug}`}
          >
            {post.metadata.image && (
              <div className="relative w-full sm:w-64 aspect-[4/3]">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="object-cover"
                  fill
                />
              </div>
            )}
            <div className="w-full">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                {post.metadata.title}
              </p>
              <span>{post.metadata.person}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}
