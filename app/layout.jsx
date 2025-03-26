import './globals.css';

import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
    title: {
        template: '%s - SuperStack Solutions Development Studio',
        default: 'SuperStack Solutions Development Studio',
    },
};

export default function Layout({children}) {
    return (
        <html lang="en" className="h-full bg-neutral-950 text-base antialiased" suppressHydrationWarning>
        <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
