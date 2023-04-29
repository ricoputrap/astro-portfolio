import { formatDate } from "./date";

export const getPosts = (data: any[]) => {
  const nonDraftPosts = data.filter(post => !post.data.draft);
  const posts = nonDraftPosts.map(post => ({
    id: post.id,
    slug: post.slug,
    ...post.data,
    date: formatDate(post.data.date.toString())
  }));

  posts.sort(function(a,b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}