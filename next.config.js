const path = require("path");

const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dhgkpiqzg/image/upload/",
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin",
      },
      {
        source: "/",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
