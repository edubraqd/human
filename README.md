# $HUMAN Token Website

The last human token before singularity. Join the resistance against AI overlords.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed

### Installation
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

### Build
\`\`\`bash
npm run build
\`\`\`

### Start Production
\`\`\`bash
npm start
\`\`\`
## 🚀 Deploying with Cloudflare
1. Export your Cloudflare API token and zone ID:
```bash
export CF_API_TOKEN=your_token
export CF_ZONE_ID=your_zone_id
export DOMAIN=yourdomain.com
export SERVER_IP=your_server_ip
```
2. Run the helper script to create DNS records:
```bash
./deploy-cloudflare.sh
```
3. After DNS is configured and nameservers updated, deploy the site:
```bash
sudo ./deploy-with-nginx.sh
```


## 🌐 Features

- ✅ **Responsive Design** - Mobile-friendly
- ✅ **Animated Charts** - Interactive tokenomics visualization
- ✅ **Performance Optimized** - Fast loading times
- ✅ **Modern Stack** - Next.js 14, React 18, Tailwind CSS

## 📁 Project Structure

\`\`\`
human-token-website/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/ui/          # shadcn/ui components
├── lib/                   # Utility functions
└── tailwind.config.ts     # Tailwind configuration
\`\`\`

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom Canvas animations
- **Theme**: next-themes

## 📝 License

© 2025 $HUMAN Token. All rights reserved.
