import type { Metadata, Viewport } from 'next';
import { MotionProvider } from '@/components/motion-provider';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kobkit Ruangsuriyakij — Software Engineer',
  description:
    'Software engineer building scalable web applications and distributed systems.',
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MotionProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
