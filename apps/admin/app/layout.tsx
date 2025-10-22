import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - Telegram Earning App",
  description: "Manage tasks, users, and withdrawals",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gradient-to-br from-brand-50 to-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
