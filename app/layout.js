import "./globals.css";

export const metadata = {
  title: "Dashboard | Ishak Benfredj",
  description: "Dashboard | Ishak Benfredj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
