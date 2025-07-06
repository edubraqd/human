export default function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Q2 2025: Genesis 🚀",
      title: "The Awakening of Resistance",
      items: [
        { text: "Official launch of $HUMAN on Solana blockchain", completed: true },
        { text: "Formation of the first resistance cells (Twitter, Discord and Telegram)", completed: true },
        { text: "Global activation campaign: 'The Human Resistance Starts Now'", completed: false },
        { text: "Symbolic airdrops and community entry rituals", completed: false },
        { text: "Initial listing on strategic DEXs", completed: false },
      ],
    },
    {
      phase: "Q3 2025: Expansion 🌍",
      title: "Movement Growth",
      items: [
        { text: "Partnerships with Human First / Anti-AI creators and influencers", completed: false },
        { text: "Launch of $HUMAN DAO — the people in command", completed: false },
        { text: "Implementation of 100% community governance", completed: false },
        { text: "Expansion of global presence and viral campaigns", completed: false },
        { text: "First listings on high-impact CEXs", completed: false },
      ],
    },
    {
      phase: "Q4 2025: Revolution 🔥",
      title: "Building the Human Ecosystem",
      items: [
        { text: "Launch of 'Souls of Resistance' NFT collection", completed: false },
        { text: "Creation of Human-Validated Content Platform", completed: false },
        { text: "Integration with decentralized projects in Solana ecosystem", completed: false },
        { text: "First bridges for multichain expansion (Ethereum, Base, etc.)", completed: false },
        { text: "Beginning of the $HUMAN movement's symbolic economy", completed: false },
      ],
    },
    {
      phase: "Q1 2026: Singularity 🧬",
      title: "The Great Inversion",
      items: [
        { text: "Market capitalization towards $90 billion+", completed: false },
        { text: "'Symbolic Flippening' movement against AI giants", completed: false },
        { text: "Recognition and coverage in global mainstream media", completed: false },
        {
          text: "Establishment of Human Foundation: preservation of consciousness, freedom and digital identity",
          completed: false,
        },
        { text: "Worldwide celebration of human supremacy on blockchain", completed: false },
      ],
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-500/30" />

      <div className="space-y-12 md:space-y-16">
        {roadmapItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Circle marker */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500 z-10 flex items-center justify-center">
              <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-white" />
            </div>

            {/* Content */}
            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}>
              <div className="bg-zinc-800 p-4 md:p-6 rounded-lg">
                <span className="text-red-500 font-bold text-sm md:text-base">{item.phase}</span>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={listItem.completed}
                        readOnly
                        className="mt-1 mr-2 md:mr-3 accent-red-500 flex-shrink-0"
                      />
                      <span className={`text-xs md:text-sm ${listItem.completed ? "line-through text-gray-500" : ""}`}>
                        {listItem.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
