interface PostItem {
  title: string;
  date: string;
  author: string;
  slug: string;
  description: string;
}

export const posts: PostItem[] = [
  {
    title: 'A Dummy Blog Post for Development Purposes',
    date: '2021-01-01',
    author: "ChatGPT",
    slug: 'dummy-blog',
    description: 'This blog post is a sample with dummy content, created for testing and developing the website. Learn why using filler text is important during website development.',
  },
  {
    title: 'My second blog post',
    date: '2021-01-02',
    author: "ChatGPT",
    slug: 'second-post',
    description: 'This is my second blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio repudiandae architecto incidunt alias laudantium, reprehenderit omnis itaque mollitia vero? Sint dolorem iusto minus nulla sit nemo nisi reprehenderit voluptas!',
  },
  {
    title: 'My third blog post',
    date: '2021-01-03',
    author: "ChatGPT",
    slug: 'third-post',
    description: 'This is my third blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio repudiandae architecto incidunt alias laudantium, reprehenderit omnis itaque mollitia vero? Sint dolorem iusto minus nulla sit nemo nisi reprehenderit voluptas!',
  },
  {
    title: 'My fourth blog post',
    date: '2021-01-04',
    author: "ChatGPT",
    slug: 'fourth-post',
    description: 'This is my fourth blog post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio repudiandae architecto incidunt alias laudantium, reprehenderit omnis itaque mollitia vero? Sint dolorem iusto minus nulla sit nemo nisi reprehenderit voluptas!',
  }
]