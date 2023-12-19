'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }