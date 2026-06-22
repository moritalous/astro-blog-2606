// base パス（/astro-blog-2606/）を考慮してリンクを生成するヘルパー
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string | number = ''): string {
  return `${BASE.replace(/\/$/, '')}/${String(path).replace(/^\//, '')}`;
}

// 記事の詳細ページの URL
export function postPath(id: string): string {
  return withBase(`posts/${id}/`);
}

// タグページの URL
export function tagPath(tag: string): string {
  return withBase(`tags/${encodeURIComponent(tag)}/`);
}
