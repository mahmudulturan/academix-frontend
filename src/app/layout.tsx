import { FC } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from '@/providers/theme-provider';
import TanstackProvider from '@/providers/tanstack-provider';
import { Toaster } from 'sonner';
import AuthProvider from '@/providers/auth-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acdemix - School Management App",
  description: "Acdemix - School Management App. A premium school management app for schools.",
};


const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          <AuthProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </AuthProvider>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default MainLayout;