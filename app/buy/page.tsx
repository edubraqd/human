import { Button } from "@/components/ui/button"
import Link from "next/link"

// Force dynamic rendering
export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

// Add server-side function to ensure dynamic rendering
async function getServerTime() {
  return new Date().toISOString()
}

export default async function BuyPage() {
  const serverTime = await getServerTime()

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hidden server timestamp to force dynamic rendering */}
      <div className="hidden" data-server-time={serverTime}></div>

      {/* Navigation */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-red-500 font-bold text-xl md:text-2xl">
            $HUMAN
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/manifest" className="hover:text-red-500 transition-colors">
            Manifest
          </Link>
          <Link href="/nft" className="hover:text-red-500 transition-colors">
            NFT
          </Link>
        </div>
        <Link href="/">
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent text-sm md:text-base px-3 md:px-4"
          >
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Header Section */}
      <section className="container mx-auto py-10 px-4 text-center">
        <div className="mb-4 text-red-500 font-mono text-xs md:text-sm">RESISTANCE PROTOCOL ACTIVATED</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Buy Your <span className="text-red-500">$HUMAN</span> Tokens
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Join the last stand of humanity. Every token purchased is a vote against AI dominance.
        </p>
      </section>

      {/* Jupiter Integration */}
      <section className="flex-1 container mx-auto px-4 pb-10">
        <div className="bg-zinc-900 rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Trade $HUMAN on Jupiter</h2>
            <p className="text-gray-400 text-sm md:text-base">Powered by Jupiter - Solana's premier DEX aggregator</p>
          </div>

          <div className="w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden">
            <iframe
              src="https://jup.ag/swap/SOL-HUMAN"
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "8px",
                background: "#000",
              }}
              title="Jupiter Swap Interface"
            />
          </div>

          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500">⚠️</span>
              <span className="font-bold text-red-500">Important Notice</span>
            </div>
            <p className="text-sm text-gray-300">
              Always verify the token contract address before trading. Only buy $HUMAN from verified sources. This is
              not financial advice - trade responsibly and only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 $HUMAN Token. Join the resistance against AI dominance.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://x.com/humantoken300"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://t.me/humantoken300"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
