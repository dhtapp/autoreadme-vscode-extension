# AutoReadME

*AI-powered README generator with guided input for VSCode*

> Transform your project documentation with intelligent README generation that understands your codebase and guides you through creating professional documentation.

[![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## ✨ Vision

AutoReadME revolutionizes how developers create project documentation. Instead of staring at a blank README file, our extension provides an intelligent, guided experience that analyzes your project and helps you craft professional documentation that actually gets read.

## 🎯 Why AutoReadME?

**The Problem:** Most developers either skip writing READMEs or create generic, unhelpful documentation that doesn't serve users or contributors.

**Our Solution:** An interactive VSCode extension that:
- 🔍 **Analyzes your project** automatically (detects React, Flutter, Python, etc.)
- 🎨 **Guides you through creation** with smart questionnaires
- 📝 **Generates professional READMEs** tailored to your audience and project type
- 🚀 **Saves hours of writing** while improving documentation quality

## 🏗️ How It Works

### Smart Project Analysis
AutoReadME automatically detects:
- **Project Type**: Mobile app, web application, developer tool, API service
- **Technology Stack**: React, Flutter, Python, Node.js, Rust, and more
- **Framework Detection**: Next.js, Express, Vue.js, etc.
- **Configuration Files**: Reads package.json, pubspec.yaml, requirements.txt

### Guided Documentation Creation
Interactive questionnaire that adapts based on your project:
1. **Project Context** - Pre-filled from your codebase analysis
2. **Target Audience** - End users, developers, business stakeholders
3. **README Style** - Business-focused, technical, user-friendly, or marketing
4. **Detail Level** - Brief, standard, comprehensive, or professional

### Intelligent Content Generation
Creates README sections tailored to your choices:
- **Vision & Mission** statements for business projects
- **Multi-user perspectives** for SaaS applications
- **Installation instructions** specific to your tech stack
- **Usage examples** with proper code snippets
- **Contributing guidelines** matching your audience
- **Professional formatting** with badges and visual elements

## 🚀 Installation

### From VSCode Marketplace
1. Open VSCode
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "AutoReadME"
4. Click **Install**

### From Source
```bash
# Clone the repository
git clone https://github.com/dhtapp/autoreadme-vscode-extension.git
cd autoreadme-vscode-extension

# Install dependencies
npm install

# Build the extension
npm run compile

# Package the extension (optional)
npm run package
```

## 📖 Usage

### Quick Start
1. **Open your project** in VSCode
2. **Open Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. **Type "Generate README"** and select the command
4. **Follow the guided prompts** - AutoReadME will analyze your project first
5. **Review and save** your generated README

### Alternative Methods
- **Right-click** any folder in Explorer → "Generate README"
- **Use the Command Palette** → "AutoReadME: Generate README"

### Example Workflow
```
🔍 AutoReadME analyzes your Flutter project...
📱 Detected: Dart/Flutter with mobile app structure

❓ What type of project is this?
   → Mobile App (iOS/Android)

❓ Who is your primary audience?
   → End Users (consumers/clients)

❓ What style of README do you want?
   → Business Focused (vision, roadmap, features)

✨ Professional README generated with mobile-specific sections!
```

## 🎨 README Styles & Templates

### Business Focused
Perfect for SaaS products and commercial applications:
- Vision and mission statements
- Multi-user perspective breakdowns
- Feature lists organized by user type
- Professional roadmap and support sections

### Technical Focused
Ideal for developer tools and libraries:
- Detailed installation instructions
- API documentation sections
- Architecture explanations
- Comprehensive code examples

### User Focused
Great for consumer applications:
- Getting started guides
- Step-by-step tutorials
- Screenshot placeholders
- User support information

### Marketing Focused
Best for open source projects seeking adoption:
- Compelling value propositions
- Visual elements and badges
- Call-to-action sections
- Star history and community features

## 🛠️ Supported Project Types

| Technology | Detection | Smart Features |
|------------|-----------|----------------|
| **Flutter/Dart** | `pubspec.yaml` | Mobile-specific installation, platform badges |
| **React** | `package.json` + dependencies | Development server commands, localhost links |
| **Next.js** | `package.json` + Next dependency | SSR deployment instructions |
| **Python** | `requirements.txt` | Virtual environment setup |
| **Node.js** | `package.json` | NPM scripts integration |
| **Rust** | `Cargo.toml` | Cargo build commands |

## 🗺️ Development Roadmap

### ✅ Completed (v0.1)
- Smart project analysis for major frameworks
- Interactive questionnaire system
- Multiple README templates and styles
- VSCode integration with context menus

### 🚧 In Progress (v0.2)
- AI integration for enhanced content generation
- Custom template creation and sharing
- Batch README generation for monorepos
- Live preview with markdown rendering

### 📋 Planned (v0.3+)
- Integration with popular project management tools
- Automatic README updates based on code changes
- Collaborative editing features for teams
- Multiple language support for international projects
- VS Code marketplace publication

## 🏗️ Built With

**Core Technologies:**
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[VSCode Extension API](https://code.visualstudio.com/api)** - Editor integration
- **[Webpack](https://webpack.js.org/)** - Module bundling

**Development Tools:**
- **ESLint** - Code quality and style enforcement
- **Jest** - Unit testing framework
- **GitHub Actions** - CI/CD pipeline

## 🤝 Contributing

We welcome contributions from the developer community! AutoReadME is built by developers, for developers.

### Getting Started
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes with proper tests
4. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
5. **Push** to your branch (`git push origin feature/amazing-feature`)
6. **Open** a Pull Request

### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/autoreadme-vscode-extension.git
cd autoreadme-vscode-extension

# Install dependencies
npm install

# Start development mode
npm run watch

# Open in VSCode and press F5 to test
code .
```

### Contribution Ideas
- 🎨 **New README templates** for different project types
- 🔍 **Additional project detection** (Go, PHP, Ruby, etc.)
- 🌐 **Internationalization** support
- 📊 **Analytics integration** for README effectiveness
- 🤖 **AI improvements** for content generation

## 💬 Support & Community

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/dhtapp/autoreadme-vscode-extension/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/dhtapp/autoreadme-vscode-extension/discussions)
- 📧 **Email**: [support@autoreadme.dev](mailto:support@autoreadme.dev)
- 💬 **Discord**: [Join our community](https://discord.gg/autoreadme) (coming soon)

## 📊 Project Stats

- ⭐ **GitHub Stars**: Growing daily
- 📥 **Downloads**: Available on VSCode Marketplace soon
- 🧑‍💻 **Contributors**: Open to the community
- 📝 **Templates**: 15+ built-in README styles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Why MIT?
We believe in open source and want AutoReadME to be freely used, modified, and distributed. The MIT license ensures maximum compatibility with other projects while protecting contributors.

## 🙏 Acknowledgments

- **VSCode Team** - For the incredible extension ecosystem
- **Open Source Community** - For inspiration and best practices
- **README Examples** - Projects like [awesome-readme](https://github.com/matiassingers/awesome-readme) that showed us what great documentation looks like
- **Beta Testers** - Early adopters who helped shape the user experience

---

<div align="center">

**Made with ❤️ by developers who believe great documentation shouldn't be hard**

[⭐ Star this repo](../../stargazers) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues) • [📖 Documentation](../../wiki)

*AutoReadME: Because your project deserves a README as good as your code.*

</div>