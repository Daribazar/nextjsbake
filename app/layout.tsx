import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/path/to/your/styles.css" />
        <script src="/static/js/main.js" defer></script>
      </head>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                feather.replace();
                document.getElementById('theme-toggle').addEventListener('click', () => {
                  document.body.classList.toggle('dark-mode');
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
