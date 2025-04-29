// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeFlexoki(),
        starlightImageZoom()
      ],
      title: 'My Docs',
      // 添加自定义组件配置
      components: {
        Footer: './src/components/Footer.astro'
      },
      sidebar: [
        {
          label: '首页',
          link: '/',
          translations: { 'zh': '首页' },
          attrs: { 'data-toc-hidden': 'true' }
        },
        {
          label: '技术',
          autogenerate: { directory: 'technology' },
          translations: { 'zh': '技术' }
        },
        {
          label: '娱乐',
          autogenerate: { directory: 'entertainment' },
          translations: { 'zh': '娱乐' }
        },
        {
          label: '随笔',
          autogenerate: { directory: 'essay' },
          translations: { 'zh': '随笔' }
        },
        {
          label: '项目',
          items: [
            {
              label: '项目名称',
              link: 'https://example.com'
            }
          ],
          translations: { 'zh': '项目' }
        }
      ],
    }),
  ],
});
