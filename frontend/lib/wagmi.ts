import { createConfig, http } from 'wagmi'
import { celo, celoAlfajores } from 'wagmi/chains'
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Get project ID from environment
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

// Configure metadata
const metadata = {
  name: 'Cyclick',
  description: 'Sustainable Cycling Rewards Platform',
  url: 'https://cyclick.app',
  icons: ['https://cyclick.app/logo.png']
}

// Configure networks
const networks = [celo, celoAlfajores] as const

// Create wagmi config
export const wagmiConfig = createConfig({
  chains: networks,
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
})

// Create Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  wagmiConfig,
  projectId,
  metadata
})

// Create AppKit
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook'],
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#35D07F', // Celo green
  },
})

