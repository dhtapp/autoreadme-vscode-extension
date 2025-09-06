# AutoReadME

*AI-powered README generator with guided input for VSCode*  
**Because your project deserves documentation as good as your code.**

[![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## ✨ The Problem with READMEs

Most developers know the pain: staring at a blank README file, unsure what to write. The result? Outdated boilerplate, copy-pasted templates, or worse—no documentation at all.

**AutoReadME solves this.** It analyzes your codebase, guides you through targeted questions, and generates professional documentation tailored to your project and audience.

---

## 🎯 Why Choose AutoReadME?

- **🔍 Smart Analysis** – Automatically detects your tech stack, frameworks, and project type
- **🎨 Guided Creation** – Interactive prompts for audience, style, and detail level  
- **📝 Professional Templates** – Business, technical, user-focused, or marketing styles
- **🚀 Time-Saving** – Generate polished documentation in minutes, not hours

---

## 🏗️ How It Works

### 1. Intelligent Project Analysis
AutoReadME scans your project and detects:
- **Project Type**: Web app, mobile app, API, CLI tool, library
- **Technology Stack**: React, Flutter, Python, Rust, Go, and more
- **Frameworks**: Next.js, Express, Vue, Django, FastAPI
- **Configuration**: `package.json`, `pubspec.yaml`, `requirements.txt`, `Cargo.toml`

### 2. Guided Documentation Workflow
Interactive 6-step questionnaire:
1. **Project Context** (auto-populated from analysis)
2. **Target Audience** (developers, end users, stakeholders)
3. **Documentation Style** (business, technical, user, marketing)
4. **Detail Level** (overview, comprehensive, minimal)
5. **Features & Vision** (key highlights and goals)
6. **Roadmap & Contributions** (future plans and community)

### 3. Tailored Professional Output
Generates contextual sections including:
- **Vision Statements** – Clear project purpose and goals
- **Multi-User Perspectives** – Tailored for different audiences
- **Stack-Specific Instructions** – Accurate setup and usage examples
- **Contribution Guidelines** – Encourage community involvement
- **Professional Formatting** – Badges, roadmaps, and visual hierarchy

---

## 🚀 Quick Start

### Install from VSCode Marketplace
1. Open VSCode Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **"AutoReadME"**
3. Click **Install**

### Install from Source
```bash
git clone https://github.com/dhtapp/autoreadme-vscode-extension.git
cd autoreadme-vscode-extension
npm install
npm run compile
```

---

## 📖 Usage

1. **Open your project** in VSCode
2. **Open Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. **Run command**: `AutoReadME: Generate README`
4. **Follow the guided prompts** (project analysis happens automatically)
5. **Review and save** your generated README

### Example Workflow
```
🔍 Analysis Complete: Flutter mobile app detected
📱 Project Type: Cross-platform mobile application
🎯 Target Audience: End users and app store visitors
🎨 Documentation Style: Business-focused with user benefits
✨ README generated with mobile-specific installation and features!
```

---

## 🎨 Documentation Styles

| Style | Best For | Includes |
|-------|----------|----------|
| **Business** | Stakeholders, investors | Vision, mission, user value, roadmap |
| **Technical** | Developers, contributors | API docs, architecture, code examples |
| **User-Focused** | End users, tutorials | Getting started, screenshots, support |
| **Marketing** | Public projects, OSS | Value propositions, community, CTAs |

---

## 🛠️ Supported Technologies

| Technology | Detection Method | Generated Features |
|------------|------------------|-------------------|
| **Flutter** | `pubspec.yaml` | Platform badges, mobile installation |
| **React/Next.js** | `package.json` | Development server, deployment guides |
| **Python** | `requirements.txt`, `pyproject.toml` | Virtual environment setup, pip install |
| **Node.js** | `package.json` | NPM scripts, dependency management |
| **Rust** | `Cargo.toml` | Cargo commands, crate documentation |
| **Go** | `go.mod` | Module installation, build instructions |

*More frameworks and languages added regularly*

---

## 🗺️ Roadmap

### ✅ v0.1 - Foundation (Current)
- Smart project analysis and detection
- Interactive questionnaire workflow  
- Multiple template styles
- Full VSCode integration

### 🚧 v0.2 - Enhanced Intelligence (In Progress)
- AI-powered content suggestions
- Custom template creation
- Monorepo and multi-project support
- Live markdown preview

### 📋 v0.3+ - Advanced Features
- Auto-updating READMEs from code changes
- Team collaboration and shared templates
- Multi-language documentation support
- VSCode Marketplace publication

---

## 🏗️ Built With

- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe development
- **[VSCode Extension API](https://code.visualstudio.com/api)** – Editor integration
- **[Webpack](https://webpack.js.org/)** – Module bundling
- **[ESLint](https://eslint.org/) + [Jest](https://jestjs.io/)** – Code quality and testing
- **[GitHub Actions](https://github.com/features/actions)** – CI/CD pipeline

---

## 🤝 Contributing

We welcome contributions from developers who believe great documentation shouldn't be hard to create!

**How to Contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and test thoroughly
4. Submit a pull request with a clear description

**Ideas for Contributors:**
- New documentation templates and styles
- Additional programming language detection
- AI-powered content improvements
- Internationalization (i18n) support

---

## 💬 Support & Community

- **🐛 [Report Issues](https://github.com/dhtapp/autoreadme-vscode-extension/issues)**
- **💡 [Request Features](https://github.com/dhtapp/autoreadme-vscode-extension/discussions)**
- **📧 Email**: support@autoreadme.dev
- **💬 Discord**: Coming soon!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by developers who believe great documentation shouldn't be hard.**

[⭐ Star this repo](https://github.com/dhtapp/autoreadme-vscode-extension) • [🐛 Report Bug](https://github.com/dhtapp/autoreadme-vscode-extension/issues) • [💡 Request Feature](https://github.com/dhtapp/autoreadme-vscode-extension/discussions)

</div>