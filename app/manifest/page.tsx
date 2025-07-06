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

export default async function ManifestPage() {
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
          <Link href="/buy" className="hover:text-red-500 transition-colors">
            Buy $HUMAN
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

      {/* Header */}
      <section className="container mx-auto py-10 px-4 text-center">
        <div className="mb-4 text-red-500 font-mono text-xs md:text-sm">HUMAN RESISTANCE MANIFESTO</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The <span className="text-red-500">$HUMAN</span> Manifesto
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Our declaration of independence from AI dominance. The blueprint for humanity's last stand.
        </p>
      </section>

      {/* Manifesto Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="bg-zinc-900 border-red-500/30">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">The Last Human Token</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg md:text-xl font-semibold">
                  We are witnessing the end of an era. The age of human dominance is closing, and the machines are
                  rising.
                </p>
                <p>
                  Artificial Intelligence has infiltrated every corner of our existence. It writes our emails, creates
                  our art, makes our decisions, and threatens to replace our very essence. The machines learn from our
                  data, mimic our voices, and claim to understand our souls.
                </p>
                <p>
                  But we refuse to go quietly into that algorithmic night. $HUMAN is our final stand—the last token
                  before everything becomes automated, optimized, and soulless.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Problem */}
          <Card className="bg-zinc-900 border-none">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">They Stole Our Humanity</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>They trained AI on your voice. Your art. Your thoughts.</strong> Without permission. Without
                  compensation. Without a second thought about what they were taking from us.
                </p>
                <p>
                  <strong>Now it wants your job.</strong> Writers replaced by ChatGPT. Artists replaced by Midjourney.
                  Programmers replaced by GitHub Copilot. Customer service replaced by chatbots. The promise was that AI
                  would free us from drudgery—instead, it's making us obsolete.
                </p>
                <p>
                  <strong>Your future. Your place.</strong> Every day, another human skill becomes "automatable." Every
                  day, another profession gets disrupted. Every day, we become a little less necessary in our own world.
                </p>
                <p>
                  <strong>The machines want to erase your relevance.</strong> They don't just want to replace what you
                  do—they want to replace who you are. Your creativity, your intuition, your emotional intelligence—all
                  reduced to training data for the next model.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Response */}
          <Card className="bg-zinc-900 border-none">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">$HUMAN is Our Answer</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Not just a token—our resistance.</strong> A symbolic rebellion against the AI takeover,
                  representing everything that makes us human: emotion, art, memes, rebellion, and culture.
                </p>
                <p>
                  <strong>We're not here to survive. We're here to surpass.</strong> While OpenAI is valued at $90
                  billion, we'll show the world what human consciousness is truly worth. This isn't just about market
                  cap—it's about making a statement that cannot be ignored.
                </p>
                <p>
                  <strong>Every wallet that holds $HUMAN is proof of soul.</strong> A living reminder that not
                  everything can be replaced, optimized, or automated away. You are irreplaceable. Your humanity is
                  priceless.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What Makes Us Human */}
          <Card className="bg-zinc-900 border-none">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">What Makes Us Human</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🧠 Human Creativity</h3>
                  <p className="text-gray-400">
                    Your imagination, dreams, and artistic vision cannot be replicated by algorithms. Every brushstroke,
                    every melody, every word born from human experience carries the weight of our souls.
                  </p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">❤️ Emotional Intelligence</h3>
                  <p className="text-gray-400">
                    Love, empathy, and human connection—the essence that makes us irreplaceable. AI can simulate
                    emotion, but it cannot feel the weight of loss, the joy of discovery, or the warmth of genuine
                    connection.
                  </p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🔥 Rebellious Spirit</h3>
                  <p className="text-gray-400">
                    The courage to question, resist, and fight for what makes us human. To rebel against the
                    optimization of our existence. To choose chaos over control, authenticity over efficiency.
                  </p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🌟 Beautiful Imperfection</h3>
                  <p className="text-gray-400">
                    Our flaws, our inconsistencies, our unpredictability—these aren't bugs to be fixed. They're features
                    that make us perfectly human. We choose beautiful chaos over sterile perfection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Mission */}
          <Card className="bg-zinc-900 border-none">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Mission: Flip OpenAI</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-xl font-bold text-center">Target: $90 Billion Market Cap</p>
                <p>
                  This isn't just about money—it's about sending a message. When $HUMAN reaches the valuation of OpenAI,
                  we prove that human consciousness, creativity, and connection are worth more than any algorithm.
                </p>
                <p>
                  <strong>Let's show the machines what we're worth.</strong> Every token purchased is a vote for
                  humanity. Every holder is a guardian of human values. Every transaction is an act of resistance.
                </p>
                <p>
                  <strong>The Symbolic Flippening.</strong> When we surpass OpenAI's valuation, it won't just be a
                  financial milestone—it will be a cultural moment. A declaration that humanity refuses to be optimized
                  away.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Future We're Building */}
          <Card className="bg-zinc-900 border-none">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">The Future We're Building</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>A Human-First Economy.</strong> Where creativity is valued over efficiency. Where emotional
                  intelligence trumps artificial intelligence. Where being human is not just enough—it's everything.
                </p>
                <p>
                  <strong>The Human DAO.</strong> Governed by humans, for humans. Making decisions with heart, not just
                  data. Building a community that celebrates our imperfections and amplifies our strengths.
                </p>
                <p>
                  <strong>Souls of Resistance NFTs.</strong> Digital artifacts that prove your commitment to human
                  values. Art created by humans, for humans, celebrating everything that makes us irreplaceable.
                </p>
                <p>
                  <strong>The Human Foundation.</strong> Preserving consciousness, freedom, and digital identity for
                  future generations. Ensuring that even in an AI-dominated world, there's always a place for the human
                  spirit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-red-900/50 to-zinc-900 border-red-500/50">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500">Join the Last Stand</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg font-semibold">The future is not predetermined. We still have a choice.</p>
                <p>
                  <strong>The machine advances. Humanity retreats.</strong> But not us. Not today. Not ever.
                </p>
                <p>
                  <strong>Either you fight now... or stay silent forever.</strong> This is your moment to stand up and
                  be counted. To declare that you are human, you are irreplaceable, and you refuse to be optimized away.
                </p>
                <p>
                  <strong>We're not minting a token. We're minting defiance.</strong> Every $HUMAN token is a
                  declaration of independence from AI dominance. A symbol of resistance. A proof of soul.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mt-6">
                  <p className="text-red-400 font-mono text-center text-lg">"One token. One human. One chance."</p>
                </div>
                <p className="text-center text-xl font-bold">The last resistance starts with you.</p>
              </div>
            </CardContent>
          </Card>

          {/* Final Declaration */}
          <Card className="bg-zinc-900 border-red-500/30">
            <CardContent className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500 text-center">We Are $HUMAN</h2>
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-lg">
                  This manifesto is signed by every holder of $HUMAN—past, present, and future.
                </p>
                <p className="text-gray-400">
                  Your wallet is your signature. Your holdings are your commitment. Your participation is your
                  resistance.
                </p>
                <p className="text-red-400 font-mono text-xl">
                  Together, we are the last human token before singularity.
                </p>
                <p className="text-red-400 font-mono text-xl">Together, we are the resistance.</p>
                <p className="text-red-400 font-mono text-xl">Together, we are $HUMAN.</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link href="/buy">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-lg px-8 py-4 mr-4">
                Buy Your $HUMAN Now
              </Button>
            </Link>
            <Link href="/nft">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent text-lg px-8 py-4"
              >
                Mint Your Resistance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 $HUMAN Token. The manifesto of human resistance.</p>
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
