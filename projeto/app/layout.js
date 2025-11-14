"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ListaCards from "./Components/ListaCards";

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <html lang="pt-br">
      <head>
        <title>GS2Semestre</title>
      </head>

      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Header toggleDark={() => setIsDark(!isDark)} />
        {children}
        <div className="flex justify-center items-center h-auto w-auto">
          <ListaCards/>
        </div>
      </body>
    </html>
  );
}
