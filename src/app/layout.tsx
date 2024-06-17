import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/provider/theme-provider"
import Header from '@/components/header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SlothUI',
  description: 'SlothUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
    lang="en" 
    suppressHydrationWarning 
    className='scroll-smooth antialiased'
    >
      <body className={`flex min-h-screen  flex-col ${inter.className}`} >
        <ThemeProvider
          attribute="class"
          // defaultTheme="light"
          forcedTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
