import { Comfortaa } from "next/font/google";
import "./globals.css";
import Home from "./page";

const comfortaa = Comfortaa({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Brasil-Clima",
  description: "Site de previsão metereológica das cidades brasileiras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={comfortaa.className}>
      <Home>{children}</Home>
               
      </body>
    </html>
  );
}
