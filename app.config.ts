export default defineAppConfig({
  title: 'ZERO',
  email: 'admin@zero.cc.ua',
  github: 'https://github.com/ZEROXZX,
  twitter: 'https://x.com/zerocccp',
  telegram: 'https://https://t.me/ZERO_XZX',
  mastodon: 'https://xzx.zerox.dpdns.org',
  blog: 'https://sink.cool/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
