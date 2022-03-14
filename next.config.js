/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/timetable/past-program.html',
        destination: '/timetable/past-program/',
        permanent: true,
      },
      {
        source: '/about/themasong.html',
        destination: '/about/themasong/',
        permanent: true,
      },
      {
        source: '/pr/kabanbrella.html',
        destination: '/pr/kabanbrella/',
        permanent: true,
      },
      {
        source: '/pr/gcupsuncity.html',
        destination: '/pr/gcupsuncity/',
        permanent: true,
      },
      {
        source: '/pr/hotelsuncity.html',
        destination: '/pr/hotelsuncity/',
        permanent: true,
      },
      {
        source: '/pr/ochiba.html',
        destination: '/pr/ochiba/',
        permanent: true,
      },
      {
        source: '/pr/onsenmanjyu.html',
        destination: '/pr/onsenmanjyu/',
        permanent: true,
      },
      {
        source: '/pr/satomoters.html',
        destination: '/pr/satomoters/',
        permanent: true,
      },
      {
        source: '/pr/niconishiki.html',
        destination: '/pr/niconishiki/',
        permanent: true,
      },
      {
        source: '/pr/weekly-shakuya.html',
        destination: '/pr/weekly-shakuya/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
