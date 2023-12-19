'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, attribute, defaultTheme }) => {
  return (
    <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }