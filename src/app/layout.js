import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transition/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arief Taufik Rahman Hub",
  description: "Arief Taufik Rahman Hub Portofolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
