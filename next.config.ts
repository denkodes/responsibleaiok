/**
 * NEXT.JS CONFIGURATION
 * 
 * Security headers, performance optimizations, and redirects.
 * Extensively commented for beginner understanding.
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ============================================
     SECURITY HEADERS
     ============================================ */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/:path*",
        headers: [
          {
            // Content Security Policy (CSP)
            // Prevents XSS attacks by controlling what resources can load
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.hsforms.net https://js-na2.hsforms.net https://js.hs-scripts.com https://js-na2.hs-scripts.com https://js-na1.hs-scripts.com https://js.hs-analytics.net https://www.googletagmanager.com https://static.hsappstatic.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.hsappstatic.net",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://static.hsappstatic.net",
              "connect-src 'self' https://forms.hsforms.com https://api.hsforms.com https://www.google-analytics.com",
              "frame-src https://forms.hsforms.com https://js-na2.hsforms.net http://js-na2.hsforms.net https://responsibleaiok.substack.com https://substack.com",
            ].join("; "),
          },
          {
            // HTTP Strict Transport Security (HSTS)
            // Forces HTTPS connections for 1 year
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            // Prevents clickjacking attacks
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Prevents MIME type sniffing
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Controls referrer information sent with requests
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Permissions policy (formerly Feature Policy)
            // Restricts browser features for security
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  /* ============================================
     DOMAIN REDIRECTS
     ============================================
     
     Redirects legacy domains to primary domain.
     Configure these in Vercel dashboard after deployment:
     - responsibleaiok.com → responsibleaiok.org
     - aistulsa.com → responsibleaiok.org
     ============================================ */
  async redirects() {
    return [
      // Example redirect (configure actual domains in Vercel)
      // {
      //   source: '/:path*',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'aistulsa.com',
      //     },
      //   ],
      //   destination: 'https://responsibleaiok.org/:path*',
      //   permanent: true,
      // },
    ];
  },

  /* ============================================
     IMAGE OPTIMIZATION
     ============================================ */
  images: {
    // Allowed image domains for next/image optimization
    // Add any external image sources here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.responsibleaiok.org",
      },
    ],

    // Image formats to support
    formats: ["image/webp", "image/avif"],

    // Disable image optimization in development for faster builds
    // (will be enabled in production automatically)
    unoptimized: process.env.NODE_ENV === "development",
  },

  /* ============================================
     PERFORMANCE OPTIMIZATIONS
     ============================================ */

  // Compress responses with gzip/brotli
  compress: true,

  // Generate standalone output for smaller Docker images (if needed)
  // output: 'standalone',

  // Strict mode helps catch bugs early
  reactStrictMode: true,

  // Powered by header (disable for security through obscurity)
  poweredByHeader: false,
};

export default nextConfig;
