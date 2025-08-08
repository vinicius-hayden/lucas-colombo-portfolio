import "./globals.css";
import "../styles/globals.css";

export const metadata = {
  title: "Lucas Colombo - Visual Artist & Photographer",
  description: "Portfolio of Lucas Colombo - Visual Artist, Photographer, and Filmmaker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
