---
title: 'Content Collections で記事を型安全に管理する'
description: 'Astro の Content Collections を使うと、frontmatter をスキーマで検証しながら記事を管理できます。'
pubDate: 2026-06-20
tags: ['astro', 'typescript']
---

Astro の **Content Collections** は、Markdown の frontmatter を Zod スキーマで検証してくれる仕組みです。

## スキーマ定義の例

```ts
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

## メリット

1. 必須項目の入力漏れをビルド時に検出できる
2. エディタ補完が効く
3. 日付や配列などの型変換を自動で行える

タイプミスや項目漏れに気づけるので、記事が増えても安心して運用できます。
