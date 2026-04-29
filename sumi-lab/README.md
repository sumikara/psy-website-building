# Sumi Lab

Sumi Lab; sinir sistemi regülasyonu, rüyalar, bağlanma döngüleri ve duygusal büyüme üzerine Türkçe kişisel bir yazı arşividir.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Yeni Laboratuvar yazısı ekleme

`src/content/laboratuvar/` altına `.md` dosyası ekleyin.

Frontmatter:

```yaml
---
title: ""
date: "2026-04-29"
category: "beden_sinir_sistemi"
description: ""
tags: []
featured: false
book_candidate: false
status: "essay"
---
```

Kategori değerleri:
- beden_sinir_sistemi
- sinirlar_iletisim
- baglanma_laboratuvari
- kokler_golgeler
- edebiyat_felsefe

Status değerleri:
- essay
- note
- fragment
- chapter_draft

## Yeni Rüya yazısı ekleme

`src/content/ruyalar/` altına `.md` dosyası ekleyin.

```yaml
---
title: ""
date: "2026-04-29"
description: ""
symbols: []
themes: []
featured: false
book_candidate: false
---
```

## Deploy

- **Vercel:** Framework preset `Astro` seçip deploy edin.
- **Netlify:** Build command `npm run build`, publish directory `dist`.
