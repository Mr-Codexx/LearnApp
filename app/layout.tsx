import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../theme-context";

export const metadata: Metadata = {
  title: "Learning App",
  description: "A mobile learning application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}