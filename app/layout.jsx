// app/layout.jsx
import TopBar from './components/TopBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
