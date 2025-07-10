"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "emerald" | "rose" | "sky";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (
      savedTheme &&
      ["light", "dark", "emerald", "rose", "sky"].includes(savedTheme)
    ) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);

      document.documentElement.classList.remove(
        "light",
        "dark",
        "emerald",
        "rose",
        "sky"
      );

      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
