export interface Project {
  id: number;
  name: string;
  tools: string[];
  cover: string;
  url: string;
}

export interface Post {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  cover?: string;
}