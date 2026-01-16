// app/layout.tsx
import TopBar from './components/TopBar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
