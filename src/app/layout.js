import "./globals.css";
import "../styles/globals.css";

export const metadata = {
  title: "Lucas Colombo - Visual Artist & Photographer",
  description:
    "Portfolio of Lucas Colombo - Visual Artist, Photographer, and Filmmaker",
  openGraph: {
    title: "Lucas Colombo - Visual Artist & Photographer",
    description:
      "Portfolio of Lucas Colombo - Visual Artist, Photographer, and Filmmaker",
    url: "https://lucascolombo.com",
    siteName: "Lucas Colombo",
    images: [
      {
        url: "https://raw.githubusercontent.com/vinicius-hayden/lucas-colombo-portfolio/refs/heads/main/public/images/lucas-profile.jpg",
        width: 948,
        height: 702,
        alt: "Preview of Lucas Colombo's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
