---
title: 'GitHub Pages へ自動デプロイする'
description: 'GitHub Actions と公式アクションを使って、Astro サイトを GitHub Pages へ自動公開する方法です。'
pubDate: 2026-06-18
tags: ['astro', 'github-actions', 'ci-cd']
---

このブログは、デフォルトブランチへ push するたびに [GitHub Pages](https://pages.github.com/) へ自動デプロイされます。

## ポイント

- `astro.config.mjs` に `site` と `base` を設定する
- 公式の `withastro/action` でビルドとアップロードを行う
- `actions/deploy-pages` でデプロイする

## 設定で詰まりやすい点

GitHub Pages を「GitHub Actions」ソースで有効化すると、`github-pages` 環境は
**デフォルトブランチからのデプロイのみ**を許可します。デプロイが即座に失敗する場合は、
ワークフローのトリガーブランチとデフォルトブランチが一致しているか確認しましょう。
