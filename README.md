# 🚴 Cyclick - Sustainable Cycling Rewards Platform

<div align="center">

![Cyclick Logo](https://img.shields.io/badge/Cyclick-Sustainable%20Cycling-blue?style=for-the-badge)
![Celo](https://img.shields.io/badge/Celo-Blockchain-35D07F?style=for-the-badge&logo=celo)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Earn rewards for cycling while saving the planet! 🌍**

[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 📖 About

Cyclick is a decentralized application (dApp) built on the Celo blockchain that incentivizes sustainable transportation by rewarding cyclists for their rides. By combining GPS tracking, smart contracts, and token rewards, Cyclick gamifies cycling and creates a positive impact on both personal health and environmental sustainability.

### 🎯 Mission

To create a sustainable, inclusive platform that rewards individuals for choosing eco-friendly transportation while building a community around cycling and environmental consciousness.

---

## ✨ Features

### 🎮 Core Functionality

- **📍 Ride Tracking & Verification**
  - GPS-based ride tracking via mobile/web app
  - Smart contract verification of ride data
  - Automatic calculation of distance, duration, and carbon offset

- **💰 Token Rewards System**
  - Earn CELO or cUSD tokens for verified rides
  - Dynamic rewards based on:
    - Distance cycled
    - Frequency of rides
    - Carbon emissions saved
    - Participation in community challenges

- **🌱 Carbon Credit Marketplace**
  - Convert cycling rewards into carbon credits
  - Trade or donate credits on-chain
  - Transparent carbon offset tracking

- **🏆 Community Challenges**
  - Team-based cycling challenges
  - Leaderboards and achievements
  - Prize pools funded by sponsors or community contributions

- **🎖️ NFT Badges & Achievements**
  - Mint NFTs for cycling milestones (100km, 1000km, etc.)
  - Collectible badges for different achievements
  - Tradeable on secondary markets

---

## 🛠️ Tech Stack

### Blockchain & Smart Contracts
- **Network**: Celo (Alfajores Testnet / Mainnet)
- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat / Truffle
- **Token Standard**: ERC-20 (Celo compatible)

### Frontend
- **Framework**: React / React Native
- **Web3 Integration**: ethers.js / web3.js
- **UI Library**: Tailwind CSS / Material-UI
- **State Management**: Redux / Context API

### Backend & Infrastructure
- **Backend**: Node.js / Express
- **Database**: PostgreSQL / MongoDB
- **Oracles**: Chainlink (for external data verification)
- **Storage**: IPFS (for NFT metadata)

### Development Tools
- **Testing**: Hardhat / Truffle test suites
- **Linting**: ESLint, Prettier
- **Version Control**: Git

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- MetaMask or Celo Wallet (for blockchain interactions)
- Celo testnet tokens (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cyclick.git
   cd cyclick
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   CELO_NETWORK=alfajores
   PRIVATE_KEY=your_private_key_here
   INFURA_API_KEY=your_infura_key
   IPFS_API_KEY=your_ipfs_key
   ```

4. **Compile smart contracts**
   ```bash
   npm run compile
   ```

5. **Deploy to testnet**
   ```bash
   npm run deploy:testnet
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

### Running Tests

```bash
npm test
```

---

## 📁 Project Structure

```
cyclick/
├── contracts/              # Smart contracts
│   ├── CyclickToken.sol   # ERC-20 reward token
│   ├── RideVerifier.sol   # Ride verification logic
│   ├── CarbonCredits.sol  # Carbon credit marketplace
│   └── NFTBadges.sol      # NFT badge contracts
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── App.js         # Main app component
│   └── public/            # Static assets
├── backend/               # Node.js backend
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── services/          # Business logic
│   └── server.js          # Express server
├── scripts/               # Deployment scripts
├── tests/                 # Test files
├── docs/                  # Documentation
├── .env.example           # Environment variables template
├── hardhat.config.js      # Hardhat configuration
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🎮 Usage

### For Users

1. **Connect Wallet**
   - Install Celo Wallet or MetaMask
   - Connect to Celo network (Alfajores testnet or Mainnet)
   - Connect wallet to Cyclick dApp

2. **Start a Ride**
   - Click "Start Ride" button
   - Grant location permissions
   - Begin cycling

3. **End Ride & Claim Rewards**
   - Click "End Ride" when finished
   - Verify ride data
   - Claim your token rewards

4. **Participate in Challenges**
   - Join community challenges
   - Compete on leaderboards
   - Win prizes

### For Developers

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed development guidelines.

---

## 🌐 Why Celo?

- **💰 Low Transaction Fees**: Perfect for frequent micro-transactions
- **📱 Mobile-First**: Designed for mobile accessibility
- **💵 Stablecoins**: cUSD and cEUR for predictable rewards
- **🌍 Carbon Negative**: Aligns with sustainability goals
- **⚡ Fast Transactions**: Real-time reward distribution
- **🌐 Global Reach**: Financial inclusion for everyone

---

## 📊 Roadmap

### Phase 1: MVP (Current)
- [x] Basic ride tracking
- [x] Token rewards system
- [x] Smart contract deployment
- [ ] Frontend integration

### Phase 2: Enhanced Features
- [ ] Carbon credit marketplace
- [ ] NFT badge system
- [ ] Community challenges
- [ ] Leaderboards

### Phase 3: Advanced Features
- [ ] Social features
- [ ] Route sharing
- [ ] Integration with fitness apps
- [ ] Governance token

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ for the hackathon

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- Celo Foundation for the amazing blockchain infrastructure
- Chainlink for oracle services
- All the open-source contributors who made this possible

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/cyclick/issues)
- **Discord**: [Join our Discord](https://discord.gg/cyclick)
- **Twitter**: [@CyclickApp](https://twitter.com/cyclickapp)

---

## ⚠️ Disclaimer

This project is for educational and hackathon purposes. Always verify smart contracts before using them in production. Use at your own risk.

---

<div align="center">

**Made with 🌱 for a sustainable future**

⭐ Star this repo if you find it helpful!

</div>

