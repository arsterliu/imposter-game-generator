import { defineConfig } from 'vite';
import { resolve } from 'path';

// 多页面入口配置：为每个具名 HTML 页面生成独立构建入口，便于 SEO
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 首页（保留 index.html 作为根入口）
        main: resolve(__dirname, 'index.html'),
        // 活动页（将原 party-mode/reveal/index.html 改为具名文件）
        reveal: resolve(__dirname, 'party-mode/reveal.html'),
        overview: resolve(__dirname, 'party-mode/overview.html'),
        generator: resolve(__dirname, 'word-generator/imposter-game-word-generator.html'),
        wordList: resolve(__dirname, 'word-generator/imposter-game-word-list.html'),
        howToPlay: resolve(__dirname, 'blogs/how-to-play.html'),
        // 新增关于、联系和隐私页面
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
});