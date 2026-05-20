# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Learning Gallery — 静态站点，托管基于 HTML 的幻灯片课件合集，部署在 Vercel。

## Commands

```bash
# 本地预览（任意静态服务器）
npx serve .

# Vercel 部署预览
npx vercel

# Vercel 部署生产
npx vercel --prod
```

无需构建步骤，纯静态 HTML/CSS/JS。

## Project Architecture

```
index.html                     # 画廊首页 — GitHub 信息 + 课件卡片网格
shared/
  tokens.css                   # 设计令牌（颜色、字体、间距、阴影等 CSS 变量）
  slide-fx.js                  # 幻灯片动画效果库（fadeIn/slideIn/scaleIn）
decks/
  {deck-name}/
    deck.json                  # 课件元数据（title/description/tags/slides 数）
    index.html                 # 课件播放器 — iframe 加载每页幻灯片
    slides/                    # 单页幻灯片 HTML 文件（01-cover.html, 02-overview.html...）
    shared/                    # 课件级共享资源（独立拷贝 shared 目录下的文件）
```

### Deck Player（课件播放器）

每个课件的 `index.html` 是一个自包含的幻灯片播放器：
- 通过 `window.DECK_MANIFEST` 声明幻灯片列表和标签
- 通过 `window.DECK_WIDTH`/`DECK_HEIGHT` 设置设计分辨率（默认 1920×1080）
- 支持键盘导航（← → Space Home End）、哈希路由、localStorage 记忆进度
- 支持打印导出（`beforeprint`/`afterprint` 事件堆叠所有幻灯片）
- 页面切换使用淡入遮罩过渡

### Creating a New Deck

1. 在 `decks/` 下创建 `{deck-name}/` 目录
2. 创建 `deck.json`（id, title, description, tags, created, slides）
3. 复制现有课件的 `index.html` 作为播放器，修改 `DECK_MANIFEST` 和尺寸
4. 在 `slides/` 下创建 HTML 幻灯片文件（从 `01` 开始编号）
5. 可选：复制 `shared/tokens.css` 和 `shared/slide-fx.js` 到 `decks/{deck-name}/shared/`
6. 在根目录 `index.html` 的 `decks` 数组中注册新课件
7. 部署验证

### Slide Authoring

- 每页幻灯片是独立 HTML 文件，载入到播放器的 iframe 中
- 使用 `shared/tokens.css` 中的 CSS 变量保持一致的设计语言
- 支持 `window.print()` 导出，确保幻灯片内容可在 A4/打印视图中展示

### Deployment

通过 Vercel 部署为静态站点：
- `vercel.json` 配置了缓存策略（共享资源 1 年、幻灯片页面 1 年、HTML 页面不缓存）
- `cleanUrls: true` 去除 `.html` 后缀
- `trailingSlash: true` 确保相对路径正确解析
