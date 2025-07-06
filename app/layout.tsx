import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$HUMAN Token | The Last Stand of Humanity",
  description:
    "Join the resistance against AI overlords with $HUMAN token on Solana. The last human token before singularity.",
    generator: 'v0.dev'
}

// AGGRESSIVE DYNAMIC FORCING
export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"
export const runtime = "nodejs"

// Server-side function that runs on every request
async function getServerData() {
  // This ensures the page is always server-rendered
  return {
    timestamp: new Date().toISOString(),
    random: Math.random(),
    serverTime: Date.now(),
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Force server-side execution
  const serverData = await getServerData()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force dynamic with meta tag */}
        <meta name="server-timestamp" content={serverData.timestamp} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Hidden server data to force dynamic rendering */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.serverData = ${JSON.stringify(serverData)};`,
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
