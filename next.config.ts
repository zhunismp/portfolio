import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export. This site qualifies cleanly: no server actions, no route
   * handlers, no dynamic segments, no middleware, no ISR — every page is
   * statically knowable, and Cloudflare Pages does nothing but serve files.
   *
   * Chosen over an adapter because it needs no extra dependency that has to
   * keep pace with Next majors, and no Worker runtime to reason about.
   */
  output: "export",
  images: {
    /**
     * Required by `output: 'export'`. The cost is measured and small: the 28
     * logos total well under 200 kB, and LogoPlate renders them at 18-24px with
     * explicit width/height, so there is no layout shift.
     *
     * Revisit if real project screenshots land — that is the point at which
     * image optimisation starts to matter and @opennextjs/cloudflare earns its
     * complexity.
     */
    unoptimized: true,
  },
};

export default nextConfig;
