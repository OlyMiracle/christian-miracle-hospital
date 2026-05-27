import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <link rel="canonical" href={post.canonicalUrl || `/blog/${post.slug}`} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p><strong>Published:</strong> {post.datePublished} | <strong>Reading time:</strong> {post.readingTime}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'excerpt',
    'metaTitle',
    'metaDescription',
    'category',
    'tags',
    'author',
    'datePublished',
    'dateModified',
    'readingTime',
    'canonicalUrl',
    'schemaType',
  ]);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
