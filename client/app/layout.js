import "../styles/globals.css";

export const metadata = {
  title: "Auralis AI",
  description: "AI Music Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
