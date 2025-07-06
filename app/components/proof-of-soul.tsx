export default function ProofOfSoulSection() {
  return (
    <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <div className="inline-block p-3 md:p-4 rounded-full bg-red-500/20 mb-4 md:mb-6">
            <div className="text-4xl md:text-6xl">👤</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Proof of <span className="text-red-500">Soul</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">
            Every wallet that holds $HUMAN is more than a wallet.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400">It's proof of soul.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400">
            A living reminder that not everything can be replaced.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-zinc-800 p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">🧠</div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Human Creativity</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Your imagination, dreams, and artistic vision cannot be replicated by algorithms.
            </p>
          </div>

          <div className="bg-zinc-800 p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">❤️</div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Emotional Intelligence</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Love, empathy, and human connection - the essence that makes us irreplaceable.
            </p>
          </div>

          <div className="bg-zinc-800 p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">🔥</div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Rebellious Spirit</h3>
            <p className="text-gray-400 text-sm md:text-base">
              The courage to question, resist, and fight for what makes us human.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-base md:text-lg font-mono text-red-400">"One token. One human. One chance."</p>
        </div>
      </div>
    </section>
  )
}
