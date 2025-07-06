import { Button } from "@/components/ui/button"

export default function CommunitySection() {
  const communities = [
    {
      name: "Twitter",
      icon: (
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
      ),
      description: "Join the conversation and stay updated on the latest $HUMAN news.",
      members: "10K+ followers",
      action: "Follow Us",
      link: "https://x.com/humantoken300",
    },
    {
      name: "Telegram",
      icon: (
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
      ),
      description: "Get real-time updates and chat with fellow $HUMAN supporters.",
      members: "7K+ members",
      action: "Join Group",
      link: "https://t.me/humantoken300",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
      {communities.map((community, index) => (
        <div key={index} className="bg-zinc-800 p-4 md:p-6 rounded-lg flex flex-col items-center text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
            <div className="text-red-500">{community.icon}</div>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">{community.name}</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">{community.description}</p>
          <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">{community.members}</div>
          <a href={community.link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="bg-red-500 hover:bg-red-600 w-full text-sm md:text-base">{community.action}</Button>
          </a>
        </div>
      ))}
    </div>
  )
}
