import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader",
      },
    });

    return config;
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", { runtimeModules: {} }]],
    turbo: {
      rules: {
        "*.po": {
          loaders: ["@lingui/loader"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
