import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/Footer";
import Navigator from "@/components/templates/Navigator";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
