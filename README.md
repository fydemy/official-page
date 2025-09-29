# Fydemy official page

🚨 This project was forked from [Portfolio Starter Kit from Vercel](https://github.com/vercel/examples/tree/main/solutions/blog) as the base template.

## ✅ Features

1. `Markdown CMS` to give transparency and flexibility to modify especially on Github
2. Optimized SEO and dynamic OG images
3. Beautiful markdown syntax highlighting
4. `Google Analytics` integrated with custom events

This page will focus on Fydemy's documentation of events and blog publicly and freely. Content is written in Markdown and organized in such structure:

### 📜 Markdown structure

```
app/
├── (main)
	├── blog
		└── posts
			└── [slug].mdx
	├── event
		└── posts
			└── [slug].mdx
```

### 🗂️ File structure

```
public/
├── blog
	└── [slug]
		└── poster.png/webp
		└── doc.png/webp
├── event
	└── [slug]
		└── poster.png/webp
		└── doc.png/webp
```

### .env content

```
BASE_URL=https://fydemy.com
GA_MEASUREMENT_ID=
```

Made with ❤️ by Fydemy
