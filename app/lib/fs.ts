import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  person: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function getLatestPost(dir) {
  let mdxFiles = getMDXFiles(dir);

  let latestFile = "";
  let latestDate = 0;

  for (let file of mdxFiles) {
    const filePath = path.join(dir, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { metadata } = parseFrontmatter(rawContent);

    const postDate = new Date(metadata.publishedAt).getTime();
    if (postDate > latestDate) {
      latestDate = postDate;
      latestFile = file;
    }
  }

  if (!latestFile) return null;

  const { metadata, content } = readMDXFile(path.join(dir, latestFile));
  const slug = path.basename(latestFile, path.extname(latestFile));

  return [{ metadata, slug, content }];
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "(main)", "blog", "posts"));
}

export function getEventPosts({ latest = false } = {}) {
  const dir = path.join(process.cwd(), "app", "(main)", "event", "posts");

  if (latest) {
    return getLatestPost(dir);
  } else {
    return getMDXData(dir);
  }
}
