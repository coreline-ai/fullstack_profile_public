import { BlogPost, Project } from "@/types";

export const fallbackProjects: Project[] = [
  {
    slug: "neobank-mobile-app",
    title: "NeoBank Mobile App",
    summary:
      "A complete redesign of the mobile banking experience focusing on accessibility and speed.",
    content:
      "## Overview\nRedesigned the entire mobile banking experience...\n\n## Challenge\nLegacy code was slow...\n\n## Solution\nMigrated to React Native...",
    tags: ["React Native", "GraphQL"],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQz5d2cXHiyDKtyvvB-dmXg73Bf3-hBnE4MVn4ZkbG0F3JJWtn_efv_epmjdKQbqxsWgxAfDP3Gs_zrTZ4M_d8gErxDNkLfT5hkGFPN8RYEs8j8xQF7Qt7BzhEBd7X2nbROsuD947ceyyvLWfW9VS6dwg79MTmSKJkuw3YyToGk0wjCz5W6ebFnPhF1DI1ohLJlSiYyK3hQCElMp5AFT2ixtmhvdqs8pCoMn7zsEUX1KPGiNHyqHlL_sZOnersm4jwYALSbsbIH_s",
    createdAt: "2023-01-01",
  },
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    summary: "Real-time analytics dashboard powered by machine learning models.",
    content: "## Overview\nDashboard for visualizing AI model performance...\n\n## Notes\nStreamed metrics and alerting.",
    tags: ["Next.js", "Python", "AWS"],
    thumbnail: "https://placehold.co/600x400/png",
    createdAt: "2023-02-01",
  },
];

export const fallbackBlogPosts: BlogPost[] = [
  {
    slug: "optimizing-nextjs-performance",
    title: "Optimizing Next.js Performance",
    summary:
      "Strategies for improving Core Web Vitals in a large scale Next.js application.",
    content: "# Optimizing Next.js\n\nPerformance is key...\n\n## Image Optimization\nUse `next/image`...",
    tags: ["Next.js", "Performance", "Web"],
    publishedAt: "2023-11-01T00:00:00Z",
  },
  {
    slug: "flutter-webview-integration",
    title: "Seamless Flutter WebView Integration",
    summary:
      "How to build a hybrid app using Flutter WebView with bi-directional communication.",
    tags: ["Flutter", "Mobile", "WebView"],
    publishedAt: "2023-10-05T00:00:00Z",
  },
];
