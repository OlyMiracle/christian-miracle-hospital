import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where markdown posts are stored
const postsDirectory = path.join(process.cwd(), 'posts');

// Get list of slugs (filenames without extension)
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

// Calculate reading time from content (approx. words/200 wpm)
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s+/g).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min`;
}

// Get post by slug (without .md)
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    ...data,
    slug: realSlug,
    content,
    readingTime: calculateReadingTime(content),
  };
}

// Get all posts sorted by datePublished (newest first)
export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
  return posts;
}
