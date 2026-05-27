# AGENTS.md

> This is a **metadata file** used by development tools (like Claude, GitHub Copilot, VS Code plugins, etc.) to understand the **intent** and **operational guidelines** of the repository.

## 🛠️ Build Instructions

### Prerequisites
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

### Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run in Development Mode**:
   ```bash
   npm run dev
   ```
   *(Opens the app at `http://localhost:3000`)*

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 🎯 Project Guidelines

### Coding Standards
- Maintain clean, modular React components.
- Use TypeScript for type safety.
- Follow the **Atomic Design** principles where applicable.
- **No `any` types allowed**, use `unknown` or specific types.

### Commit Messages
- Use **Conventional Commits** format.
- **Format**: `<type>(<scope>): <description>`
- **Examples**:
  - `feat(auth): implement Google OAuth login`
  - `fix(ui): correct mobile navbar spacing`
  - `docs: update README with setup instructions`
