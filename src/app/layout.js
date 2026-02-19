"use client";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./globals.css";

function AppWrapper({ children }) {
  const { theme } = useTheme();

  return (
    <Theme
      appearance={theme}
      accentColor="indigo"
      grayColor="slate"
      radius="large"
    >
      <div
        style={{
          minHeight: "100vh",
          background: `
            radial-gradient(circle at 15% 20%, var(--accent-3), transparent 40%),
            radial-gradient(circle at 85% 80%, var(--accent-4), transparent 40%),
            var(--gray-1)
          `,
          color: "var(--gray-12)",
        }}
      >
        {children}
      </div>
    </Theme>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}