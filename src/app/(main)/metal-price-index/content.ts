
import { Clock, Factory, Headphones, MessageSquare, Search, TrendingUp } from 'lucide-react';
import React from 'react';

export interface FeatureItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

export interface FeatureBlockContent {
    id: number;
    headline: string;
    tagline: string;
    features: FeatureItem[];
    imgSrc: string;
}

export const liveChatData: FeatureBlockContent[] = [{
    id: 2,
    headline: 'Our real commitment reaches beyond gas & oil company',
    tagline: 'ABOUT COMPANY',
    features: [
        {
            icon: Clock,
            title: 'Instant Response Time',
            description: 'Metalverse  Industries, a global startup, headquartered in Amman, Jordan, and has offices across the world. With deep rooted knowledge in sourcing and procurement after years of vetting and handling projects in the power generation, oil & gas, water & wastewater pipeline infrastructure, we clear the pressure points faced in the due process of procuring materials. With an aim to be the power directory of the world, we bring in both a great online portal to ease buying & selling and industrial experts to help you find the right product and business. Sign in with us and see the positive difference we bring in to your business.',
        },
    ],
    imgSrc: '/assets/image7.jpeg',
},
{
    id: 1,
    headline: 'Mega Foundations - A Global platform for industrial solutions',
    tagline: 'There are no end limits to grow your network & products market.',
    features: [
        {
            icon: Search,
            title: 'There are no end limits to grow your network & products market.',
            description: 'Participate in bids, projects across the world.',
        },
        {
            icon: TrendingUp,
            title: 'Predictive Filtering',
            description: 'Engage and vet enquiries handed over to you on daily basis.',
        },
        {
            icon: Factory, // Reusing Factory icon from your previous component
            title: 'Cross-Reference Index',
            description: 'Get quotes, tailor-made solutions from industry leading companies.',
        },
    ],
    imgSrc: '/assets/image17.jpg',
}
]
