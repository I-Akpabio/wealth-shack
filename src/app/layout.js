import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthShack: Nigeria's Biggest RoboAdviser",
  description: "WealthShack helps you manage your investment portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,900;1,300&family=Roboto:wght@100;300&display=swap" rel="stylesheet" />
      
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Poppins:ital,wght@0,300;0,500;0,700;1,300&family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
