"use client";

import React from 'react';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Palette, Sun, Moon, Leaf, Heart, Cloud } from 'lucide-react';

const themes: Array<{ value: Theme; label: string; icon: React.ReactNode }> = [
  { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
  { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
  { value: 'emerald', label: 'Emerald', icon: <Leaf className="w-4 h-4" /> },
  { value: 'rose', label: 'Rose', icon: <Heart className="w-4 h-4" /> },
  { value: 'sky', label: 'Sky', icon: <Cloud className="w-4 h-4" /> },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const currentTheme = themes.find(t => t.value === theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          {currentTheme?.icon || <Palette className="w-4 h-4" />}
          {currentTheme?.label || 'Theme'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className="gap-2"
          >
            {themeOption.icon}
            {themeOption.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}