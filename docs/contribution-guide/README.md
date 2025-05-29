# 🌊 Inkfinity Contribution Guide

## Overview

Welcome to the Inkfinity contributor community! This guide provides detailed instructions for contributing to our blockchain-based tattoo industry platform. It complements the setup instructions in our main README.

## 📋 Contribution Workflow

### 1. Find or Create an Issue

- Browse existing [issues](https://github.com/your-org/inkfinity-mvp/issues) to find something to work on
- If you have a new idea, create an issue with the appropriate template
- Wait for issue to be triaged and assigned

### 2. Fork and Clone

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/your-username/inkfinity-mvp.git
cd inkfinity-mvp
yarn install
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Development Standards

#### Smart Contracts (Cairo/Dojo)

- Follow [Cairo best practices](https://book.cairo-lang.org/title-page.html)
- Ensure contracts implement appropriate standards (ERC-721 for NFTs, etc.)
- Write comprehensive tests for all functionality
- Document all functions with clear comments

#### Frontend (Next.js)

- Follow our TypeScript + React conventions
- Create focused, reusable components
- Maintain responsive design across all UI elements
- Ensure accessibility compliance

### 5. Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code changes that neither fix bugs nor add features
- `test:` Adding or modifying tests
- `chore:` Changes to the build process, tools, etc.

**Important:** Sign all commits with your GPG key:

```bash
git commit -S -m "feat(booking): implement deposit escrow mechanism"
```

### 6. Testing Before Submission

```bash
# Test frontend
yarn test:nextjs

# Test smart contracts
yarn test
```

### 7. Create a Pull Request

Push your changes and create a pull request against the main repository.

## 🤖 Code Review Process

### Automated Reviews with CodeRabbit AI

All PRs are first reviewed by CodeRabbit AI, which checks for:

- Code style and conventions
- Potential bugs and edge cases
- Performance optimizations
- Security considerations

**Tip:** You can interact with CodeRabbit AI by commenting on its suggestions if you need clarification or want to explain your implementation decisions.

### Human Reviews

After the AI review, a project maintainer will:

- Evaluate the overall design and architecture
- Ensure the code aligns with project goals
- Verify proper test coverage
- Potentially engage with CodeRabbit AI for deeper analysis

### Addressing Feedback

1. Review all comments from both AI and human reviewers
2. Make necessary changes in your branch
3. Push updates to your PR
4. Comment on addressed items with relevant commit links
5. Request re-review when ready

## 📱 UI/UX Contribution

### Design System

- We use Figma for design collaboration
- All UI components should follow our design system
- Request access to our Figma workspace by contacting a maintainer

### Design Review Workflow

1. Create designs in the designated Figma workspace
2. Follow our naming conventions and organization structure
3. Request review by tagging project leads in both GitHub and Figma
4. Address feedback through Figma comments while keeping the GitHub issue updated
5. Continue iteration until approval

### UI Implementation Standards

- Use Tailwind CSS for styling (follow our custom theme)
- Implement responsive designs for all screen sizes
- Ensure proper accessibility (ARIA attributes, keyboard navigation, etc.)
- Use Shadcn UI components where appropriate

## 🔐 Smart Contract Contribution

### Implementation Guidelines

- Follow the entity-component-system architecture of Dojo
- Ensure gas optimization for all contract functions
- Include comprehensive error handling
- Document security considerations

### Testing Requirements

- Unit tests for all contract functions
- Edge case testing for potential attack vectors
- Integration tests for contract interactions
- Document test scenarios clearly

## 🧠 Contribution Ideas

Areas where we particularly welcome contributions:

- **NFT Design Registry**: Enhancing metadata standards, search functionality
- **Smart Contract Bookings**: Improving escrow mechanisms, cancelation flows
- **USDC Payment Integration**: Optimizing transaction processes
- **Artist Discovery**: Building recommendation algorithms
- **Accessibility**: Making the platform usable for everyone

## 🌐 Community Resources

- **Discord**: Join our [Discord server](https://discord.gg/rNtxMz4uPG) for real-time discussions
- **Documentation**: Help improve our [docs site](https://docs.inkfinity.io)

## 🏆 Recognition Program

Active contributors may receive:

- Recognition in our contributor showcase
- Opportunities to join core team meetings
- Early access to new features
- Consideration for paid development opportunities

---

Thank you for contributing to Inkfinity! Together, we're revolutionizing the tattoo industry through blockchain technology.

*Remember: This contribution guide complements the technical setup instructions in our main README.md file.*