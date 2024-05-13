'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssVarsProvider>
            <Sheet variant="outlined">
              <ColorSchemeToggler>{children}</ColorSchemeToggler>
            </Sheet>
          </CssVarsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const ColorSchemeToggler = ({ children }: { children: React.ReactNode }) => {
  const { mode, setMode } = useColorScheme();

  React.useEffect(() => {
    setMode('dark');
  }, [setMode]);

  return <React.Fragment>{children}</React.Fragment>;
};