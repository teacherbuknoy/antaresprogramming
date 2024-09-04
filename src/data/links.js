module.exports = [
  {
    title: 'RelativeTimeFormat',
    url: 'https://www.youtube.com/watch?v=NC9SlnIdH-U',
    date: new Date(2023, 0, 22),
    cover: {
      folder: 'relative-time-format',
      filename: 'instagram-thumbnail.png',
      sizes: [300, 600, 900, 1080],
      formats: ['png', 'webp', 'avif'],
      width: 1080,
      height: 1080
    }
  },
  {
    title: 'CSS Subgrid is here!',
    url: 'https://youtu.be/de2BY7g4YOg',
    date: new Date(2024, 1, 3),
    cover: {
      folder: 'subgrid',
      filename: 'instagram-thumbnail.png',
      sizes: [300, 600, 900, 1080],
      formats: ['png', 'webp', 'avif'],
      width: 1080,
      height: 1080
    }
  },
  {
    title: 'Baseline',
    url: '/resources/baseline/',
    date: new Date(2024, 5, 2),
    cover: {
      folder: 'links',
      filename: 'baseline.png',
      sizes: [300, 600, 900, 1080],
      formats: ['png', 'webp', 'avif'],
      width: 1080,
      height: 1080
    }
  },
  {
    title: 'Truncate text',
    url: '/infographics/truncate-text/',
    date: new Date(2024, 8, 4),
    cover: {
      container: 'infographics',
      folder: 'text-truncate',
      filename: 'cover.png',
      sizes: [300, 600, 900, 1080],
      formats: ['png', 'webp', 'avif'],
      width: 1080,
      height: 1080
    }
  }
].sort((a, b) => b.date - a.date).reverse()