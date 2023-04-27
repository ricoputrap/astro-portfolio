import { formatDate } from "./date";

export const getPosts = (data: any[]) => {
  const posts = data.map(post => ({
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