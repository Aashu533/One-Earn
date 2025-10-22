import "../styles/globals.css";
import { Metadata } from "next";
import BottomNav from "../components/BottomNav";
import ToasterProvider from "../components/ToasterProvider";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "Telegram Mini Earning App",
  description: "Earn coins by completing tasks",
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
        <ToasterProvider />
        <AuthProvider>
          <div className="pb-20">{children}</div>
        </AuthProvider>
        <BottomNav />
      </body>
    </html>
  );
}
