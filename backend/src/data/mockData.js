const projects = [
    {
        slug: 'neobank-mobile-app',
        title: 'NeoBank Mobile App',
        summary: 'A complete redesign of the mobile banking experience focusing on accessibility and speed.',
        tags: ['React Native', 'GraphQL', 'Mobile'],
        content: '## Overview\nRedesigned the entire mobile banking experience...\n\n## Challenge\nLegacy code was slow...\n\n## Solution\nMigrated to React Native...',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQz5d2cXHiyDKtyvvB-dmXg73Bf3-hBnE4MVn4ZkbG0F3JJWtn_efv_epmjdKQbqxsWgxAfDP3Gs_zrTZ4M_d8gErxDNkLfT5hkGFPN8RYEs8j8xQF7Qt7BzhEBd7X2nbROsuD947ceyyvLWfW9VS6dwg79MTmSKJkuw3YyToGk0wjCz5W6ebFnPhF1DI1ohLJlSiYyK3hQCElMp5AFT2ixtmhvdqs8pCoMn7zsEUX1KPGiNHyqHlL_sZOnersm4jwYALSbsbIH_s',
        period: '2023.01 - 2023.06',
        metrics: [
            { label: 'Downloads', value: '100k+' },
            { label: 'Rating', value: '4.8/5.0' }
        ],
        gallery: [
            'https://placehold.co/600x400/png?text=Bank+Screen+1',
            'https://placehold.co/600x400/png?text=Bank+Screen+2'
        ],
        createdAt: '2023-10-15T00:00:00Z'
    },
    {
        slug: 'ai-dashboard',
        title: 'AI Analytics Dashboard',
        summary: 'Real-time analytics dashboard powered by machine learning models.',
        tags: ['Next.js', 'Python', 'AWS', 'Web'],
        content: '## Overview\nA dashboard for visualizing AI model performance...\n',
        thumbnail: 'https://placehold.co/600x400/png',
        period: '2023.07 - Present',
        metrics: [
            { label: 'Data Processed', value: '1TB/day' },
            { label: 'Latency', value: '<50ms' }
        ],
        gallery: [
            'https://placehold.co/600x400/png?text=Dashboard+1',
            'https://placehold.co/600x400/png?text=Dashboard+2'
        ],
        createdAt: '2023-08-20T00:00:00Z'
    },
    {
        slug: 'artisan-commerce',
        title: 'Artisan Economy Platform',
        summary: 'A marketplace causing a revolution in the artisan economy.',
        tags: ['Next.js', 'Shopify', 'Three.js', 'Web'],
        content: '## Overview\nA nice marketplace...',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkMsSMOoAvQET8p9cD88awaZs4MIAtVPHJx2K_qw2Pe4g8fPSWtu9wmJSQ22zRm5L84bf_hxzZzAsqu33rw95ba-dUy2of2VoFml7k7gZA-wI01A-BDfDvfXYuYyEVSOtPS6BCLt9Adn8JuSWggcCECh2iaCrauvbWkOCKScrf-1uSsQBimGePXEmcPRAso0iSGRuTYXHn0Na_2xdcC_wIlrTdI1hZFnhLrp8kzVI8LSqtswZgCrSC91gInbjZwjxvMBUaP1cMv14',
        period: '2022.05 - 2022.12',
        metrics: [
            { label: 'Sales', value: '$2M+' },
            { label: 'Sellers', value: '500+' }
        ],
        gallery: [],
        createdAt: '2022-12-10T00:00:00Z'
    }
];

const blogPosts = [
    {
        slug: 'optimizing-nextjs-performance',
        title: 'Optimizing Next.js Performance',
        summary: 'Strategies for improving Core Web Vitals in a large scale Next.js application.',
        tags: ['Next.js', 'Performance', 'Web'],
        content: '# Optimizing Next.js\n\nPerformance is key...\n\n## Image Optimization\nUse `next/image`...',
        publishedAt: '2023-11-01T00:00:00Z'
    },
    {
        slug: 'flutter-webview-integration',
        title: 'Seamless Flutter WebView Integration',
        summary: 'How to build a hybrid app using Flutter WebView with bi-directional communication.',
        tags: ['Flutter', 'Mobile', 'WebView'],
        content: '# Flutter WebView\n\nHybrid apps offer...',
        publishedAt: '2023-10-05T00:00:00Z'
    }
];

exports.projects = projects;
exports.blogPosts = blogPosts;
