import { MetadataRoute } from 'next';
import { SITE_METADATA } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_METADATA.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Future routes will be added here
    ];
}
