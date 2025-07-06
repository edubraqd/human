import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Force dynamic rendering
export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

// Add server-side function to ensure dynamic rendering
async function getServerTime() {
  return new Date().toISOString()
}

export default async function NFTPage() {
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
          <Link href="/buy" className="hover:text-red-500 transition-colors">
            Buy $HUMAN
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

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 text-center flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <div className="inline-block p-6 rounded-full bg-red-500/20 mb-6">
            <div className="text-6xl md:text-8xl">🎨</div>
          </div>
          <div className="mb-4 text-red-500 font-mono text-xs md:text-sm">NFT PROTOCOL INITIALIZING...</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mint the Symbol of <span className="text-red-500">Humanity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            The first NFT collection that represents human consciousness, creativity, and resistance against AI
            dominance.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-zinc-900 border-red-500/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <div className="text-red-500 font-mono text-lg md:text-xl">COMING SOON</div>
                <h2 className="text-2xl md:text-3xl font-bold">Souls of Resistance NFT Collection</h2>
                <p className="text-gray-400 text-base md:text-lg">
                  Each NFT will be a unique representation of human traits that AI cannot replicate: creativity,
                  emotion, intuition, and the rebellious spirit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🧠</div>
                    <h3 className="font-bold mb-1">Creative Minds</h3>
                    <p className="text-sm text-gray-400">Unique artistic expressions</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-2xl mb-2">❤️</div>
                    <h3 className="font-bold mb-1">Emotional Souls</h3>
                    <p className="text-sm text-gray-400">Deep human connections</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🔥</div>
                    <h3 className="font-bold mb-1">Rebel Spirits</h3>
                    <p className="text-sm text-gray-400">Defiant against automation</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-mono text-sm">
                    "Every NFT minted is a declaration: I am human, I am irreplaceable, I am the resistance."
                  </p>
                </div>

                <div className="mt-8">
                  <Button disabled className="bg-gray-600 text-gray-400 cursor-not-allowed text-lg px-8 py-4">
                    Minting Soon...
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Follow our social media for launch updates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">🎯 Limited Supply</h4>
                <p className="text-gray-400 text-sm">
                  Only 10,000 unique NFTs will ever be minted, making each one a rare symbol of human resistance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">🔗 Utility & Access</h4>
                <p className="text-gray-400 text-sm">
                  NFT holders get exclusive access to the Human DAO, special events, and governance rights.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">🎨 Unique Art</h4>
                <p className="text-gray-400 text-sm">
                  Each NFT features hand-crafted artwork celebrating human creativity and individuality.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">💎 Proof of Soul</h4>
                <p className="text-gray-400 text-sm">
                  Your NFT serves as permanent proof of your commitment to human values and resistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 $HUMAN Token. The last human NFT collection before singularity.
          </p>
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
