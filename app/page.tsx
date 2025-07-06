import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import HeroAnimation from "./components/hero-animation"
import CommunitySection from "./components/community-section"
import ServerTokenomics from "./components/server-tokenomics"
import TokenomicsLegend from "./components/tokenomics-legend"
import RoadmapSection from "./components/roadmap-section"
import ProofOfSoulSection from "./components/proof-of-soul"
import MinimalClientTimer from "./components/minimal-client-timer"

// Force dynamic rendering
export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

// Add a server-side function to ensure dynamic rendering
async function getServerTime() {
  return new Date().toISOString()
}

export default async function Home() {
  // This ensures the page is always server-rendered
  const serverTime = await getServerTime()

  return (
    <main className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      {/* Hidden server timestamp to force dynamic rendering */}
      <div className="hidden" data-server-time={serverTime}></div>

      {/* Navigation */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/human-logo.jpg" alt="$HUMAN Logo" width={40} height={40} className="rounded-full" />
          <Link href="/" className="text-red-500 font-bold text-xl md:text-2xl">
            $HUMAN
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-red-500 transition-colors">
            About
          </a>
          <a href="#tokenomics" className="hover:text-red-500 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-red-500 transition-colors">
            Roadmap
          </a>
          <a href="#community" className="hover:text-red-500 transition-colors">
            Community
          </a>
          <Link href="/manifest" className="hover:text-red-500 transition-colors">
            Manifest
          </Link>
        </div>
        <Link href="/buy">
          <Button className="bg-red-500 hover:bg-red-600 text-sm md:text-base px-3 md:px-4">Join The Resistance</Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-10 md:py-20 px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            The Last Human Token. <span className="text-red-500">Before Everything Is Automated.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto md:mx-0">
            We're not just fighting back — we're flipping the future. $HUMAN is the symbol of our era. Join us before
            it's too late.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center md:justify-start">
            <Link href="/buy">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 w-full sm:w-auto text-sm md:text-base">
                ⚡️ Buy Your $HUMAN Now
              </Button>
            </Link>
            <Link href="/nft">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent w-full sm:w-auto text-sm md:text-base"
              >
                🔥 Mint the Symbol of Humanity
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-sm text-gray-400">Token Launch In:</p>
            <MinimalClientTimer />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <HeroAnimation />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            The <span className="text-red-500">Human</span> Rebellion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  They trained AI on your voice. Your art. Your thoughts.
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Now it wants your job, your future — your place. AI is replacing jobs, invading privacy, and
                  threatening human creativity. The machines want to erase your relevance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">$HUMAN is our answer.</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Not just a token — our resistance. A symbolic rebellion against the AI takeover, representing
                  everything that makes us human: emotion, art, memes, rebellion, and culture.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Mission: <span className="text-red-500">Flip OpenAI</span>
            </h3>
            <div className="space-y-2 max-w-3xl mx-auto px-4">
              <p className="text-lg md:text-xl text-gray-400">We're not here to survive.</p>
              <p className="text-lg md:text-xl text-gray-400">We're here to surpass.</p>
              <p className="text-lg md:text-xl font-bold text-red-500">Target: $300 Billion.</p>
              <p className="text-lg md:text-xl text-gray-400">Let's show the machines what we're worth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Token<span className="text-red-500">omics</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start">
            <div className="w-full lg:w-1/2">
              <ServerTokenomics />
              <TokenomicsLegend />
              <div className="text-center mt-6">
                <p className="text-base md:text-lg font-mono text-red-400">"One token. One human. One chance."</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <Card className="bg-zinc-900 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Total Supply: 1 Billion</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Fixed supply. No inflation. No deflation. Pure and stable.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Distribution</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 text-xs md:text-sm text-gray-400">
                    <div>• 25% - Liquidity</div>
                    <div>• 20% - Private Sale</div>
                    <div>• 10% - Contests</div>
                    <div>• 10% - Listings</div>
                    <div>• 10% - Team</div>
                    <div>• 10% - Development</div>
                    <div>• 5% - Marketing</div>
                    <div>• 5% - Treasury</div>
                    <div>• 3% - Advisors</div>
                    <div>• 2% - Workers</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Token Economics</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Stable supply with strategic distribution focused on community growth, liquidity, and long-term
                    sustainability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-zinc-900 py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Road<span className="text-red-500">map</span>
          </h2>
          <RoadmapSection />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Why Join The <span className="text-red-500">Resistance</span>?
          </h2>

          <Tabs defaultValue="narrative" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 h-auto">
              <TabsTrigger value="narrative" className="text-xs md:text-sm py-2 md:py-3">
                Narrative
              </TabsTrigger>
              <TabsTrigger value="community" className="text-xs md:text-sm py-2 md:py-3">
                Community
              </TabsTrigger>
              <TabsTrigger value="potential" className="text-xs md:text-sm py-2 md:py-3">
                Potential
              </TabsTrigger>
            </TabsList>
            <TabsContent value="narrative" className="space-y-4 text-center px-4">
              <p className="text-base md:text-xl">
                "In a future of AI clones and machine-run memecoins, only one token fights for the soul of humanity."
              </p>
              <p className="text-base md:text-xl">"$HUMAN is our voice when algorithms take the mic."</p>
              <p className="text-base md:text-xl">"We're not minting a token. We're minting defiance."</p>
            </TabsContent>
            <TabsContent value="community" className="space-y-4 text-center px-4">
              <p className="text-base md:text-xl">
                Join thousands of rebels fighting for human creativity, emotion, and culture.
              </p>
              <p className="text-base md:text-xl">
                Be part of a movement that stands for something bigger than just profits.
              </p>
              <p className="text-base md:text-xl">
                Connect with like-minded individuals who believe in the power of humanity.
              </p>
            </TabsContent>
            <TabsContent value="potential" className="space-y-4 text-center px-4">
              <p className="text-base md:text-xl">Our goal: Flip OpenAI's $90 billion valuation.</p>
              <p className="text-base md:text-xl">Highly viral narrative perfect for TikTok, Twitter, and YouTube.</p>
              <p className="text-base md:text-xl">You still have the chance to be on the right side of history.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-zinc-900 py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Join The <span className="text-red-500">Movement</span>
          </h2>
          <CommunitySection />
        </div>
      </section>

      {/* Proof of Soul Section */}
      <ProofOfSoulSection />

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-red-900/50 to-black px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4 text-red-500 font-mono text-xs md:text-sm">ERROR: AI Dominance Interrupted</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The future has already chosen a side.
          </h2>
          <div className="space-y-4 mb-8 max-w-3xl mx-auto px-4">
            <p className="text-lg md:text-xl lg:text-2xl">The machine advances. Humanity retreats.</p>
            <p className="text-lg md:text-xl lg:text-2xl">Either you fight now... or stay silent forever.</p>
            <div className="text-green-400 font-mono text-xs md:text-sm my-4">Uploading: Humanity 2.0</div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-500">
              Buy $HUMAN now. The last resistance starts with you.
            </p>
          </div>
          <Link href="/buy">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-lg md:text-xl px-6 md:px-8 py-4 md:py-6">
              ⚡️ Buy Your $HUMAN Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 md:py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="text-red-500 font-bold text-xl md:text-2xl text-center">$HUMAN</span>
            <p className="text-gray-400 mt-2 text-center text-sm md:text-base">
              The last human token before singularity.
            </p>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 mb-6">
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
                className="md:w-6 md:h-6"
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
                className="md:w-6 md:h-6"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs md:text-sm">
            © 2025 $HUMAN Token. All rights reserved. Be part of the revolution.
          </div>
        </div>
      </footer>
    </main>
  )
}
