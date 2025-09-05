// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "autoreadme" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('autoreadme.generateReadme', async () => {
		try {
			// First, analyze the current project
			vscode.window.showInformationMessage('🔍 Analyzing your project...');
			const projectAnalysis = await analyzeProject();

			// Step 1: Project Name (pre-filled from analysis)
			const projectName = await vscode.window.showInputBox({
				prompt: 'What is your project name?',
				placeHolder: 'my-awesome-project',
				value: projectAnalysis.projectName || '' // Pre-fill if detected
			});

			if (!projectName) {
				return;
			}

			// Step 2: Project Description (pre-filled from analysis)
			const description = await vscode.window.showInputBox({
				prompt: 'Brief description of your project:',
				placeHolder: 'A tool that helps developers...',
				value: projectAnalysis.description || '' // Pre-fill if detected
			});

			if (!description) {
				return;
			}

			// Show what we detected
			if (projectAnalysis.language) {
				vscode.window.showInformationMessage(`📱 Detected: ${projectAnalysis.language}${projectAnalysis.framework ? ' with ' + projectAnalysis.framework : ''}`);
			}

			// Step 3: Target Audience
			const audience = await vscode.window.showQuickPick([
				'Developers (technical users)',
				'End Users (non-technical)',
				'Enterprise/Teams',
				'Open Source Community'
			], {
				placeHolder: 'Who will use this project?'
			});

			if (!audience) {
				return;
			}

			// Step 4: Tone Preference
			const tone = await vscode.window.showQuickPick([
				'Professional (corporate, formal)',
				'Friendly (welcoming, casual)',
				'Technical (detailed, precise)',
				'Creative (fun, visual)'
			], {
				placeHolder: 'What tone should the README have?'
			});

			if (!tone) {
				return;
			}

			// Step 5: Detail Level
			const detailLevel = await vscode.window.showQuickPick([
				'Brief (essential info only)',
				'Standard (typical sections)',
				'Comprehensive (detailed guide)'
			], {
				placeHolder: 'How detailed should it be?'
			});

			if (!detailLevel) {
				return;
			}

			// Generate README based on choices AND project analysis
			const readmeContent = generateSmartReadmeContent(projectName, description, audience, tone, detailLevel, projectAnalysis);

			// Create and show the README file
			const doc = await vscode.workspace.openTextDocument({
				content: readmeContent,
				language: 'markdown'
			});
			
			vscode.window.showTextDocument(doc);
			vscode.window.showInformationMessage(`✨ Smart README generated for ${projectName}!`);

		} catch (error) {
			vscode.window.showErrorMessage('Error generating README: ' + error);
		}
	});

	context.subscriptions.push(disposable);
}

interface ProjectAnalysis {
	projectType: string;
	dependencies: string[];
	scripts: Record<string, string>;
	framework: string | null;
	language: string | null;
	projectName?: string;
	description?: string;
}

async function analyzeProject(): Promise<ProjectAnalysis> {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) {
		return { projectType: 'unknown', dependencies: [], scripts: {}, framework: null, language: null };
	}

	const analysis: ProjectAnalysis = {
		projectType: 'unknown',
		dependencies: [],
		scripts: {},
		framework: null,
		language: null
	};

	try {
		// Check for package.json (Node.js/JavaScript)
		const packageJsonUri = vscode.Uri.joinPath(workspaceFolders[0].uri, 'package.json');
		try {
			const packageJsonContent = await vscode.workspace.fs.readFile(packageJsonUri);
			const packageJson = JSON.parse(packageJsonContent.toString());
			
			analysis.projectType = 'javascript';
			analysis.language = 'JavaScript/Node.js';
			analysis.projectName = packageJson.name;
			analysis.description = packageJson.description;
			analysis.scripts = packageJson.scripts || {};
			analysis.dependencies = Object.keys(packageJson.dependencies || {});
			
			// Detect framework
			if (analysis.dependencies.includes('react')) {
				analysis.framework = 'React';
			} else if (analysis.dependencies.includes('vue')) {
				analysis.framework = 'Vue.js';
			} else if (analysis.dependencies.includes('express')) {
				analysis.framework = 'Express.js';
			} else if (analysis.dependencies.includes('next')) {
				analysis.framework = 'Next.js';
			}
		} catch (e) {
			// No package.json found
		}

		// Check for requirements.txt (Python)
		const requirementsUri = vscode.Uri.joinPath(workspaceFolders[0].uri, 'requirements.txt');
		try {
			await vscode.workspace.fs.readFile(requirementsUri);
			analysis.projectType = 'python';
			analysis.language = 'Python';
		} catch (e) {
			// No requirements.txt found
		}

		// Check for Cargo.toml (Rust)
		const cargoUri = vscode.Uri.joinPath(workspaceFolders[0].uri, 'Cargo.toml');
		try {
			await vscode.workspace.fs.readFile(cargoUri);
			analysis.projectType = 'rust';
			analysis.language = 'Rust';
		} catch (e) {
			// No Cargo.toml found
		}

		// Check for pubspec.yaml (Flutter/Dart)
		const pubspecUri = vscode.Uri.joinPath(workspaceFolders[0].uri, 'pubspec.yaml');
		try {
			const pubspecContent = await vscode.workspace.fs.readFile(pubspecUri);
			const pubspecText = pubspecContent.toString();
			analysis.projectType = 'flutter';
			analysis.language = 'Dart/Flutter';
			
			// Extract name and description from pubspec.yaml
			const nameMatch = pubspecText.match(/^name:\s*(.+)$/m);
			const descMatch = pubspecText.match(/^description:\s*(.+)$/m);
			if (nameMatch) {
				analysis.projectName = nameMatch[1].trim();
			}
			if (descMatch) {
				analysis.description = descMatch[1].trim();
			}
		} catch (e) {
			// No pubspec.yaml found
		}

	} catch (error) {
		console.log('Error analyzing project:', error);
	}

	return analysis;
}

function generateSmartReadmeContent(
	projectName: string, 
	description: string, 
	audience: string, 
	tone: string, 
	detailLevel: string, 
	analysis: ProjectAnalysis
): string {
	// Parse choices
	const isForEndUsers = audience.includes('End Users');
	const isForDevelopers = audience.includes('Developers');
	const isForTeams = audience.includes('Enterprise/Teams');
	const isOpenSource = audience.includes('Open Source');
	
	const isProfessional = tone.includes('Professional');
	const isFriendly = tone.includes('Friendly');
	const isTechnical = tone.includes('Technical');
	const isCreative = tone.includes('Creative');
	
	const isBrief = detailLevel.includes('Brief');
	const isStandard = detailLevel.includes('Standard');
	const isComprehensive = detailLevel.includes('Comprehensive');

	let content = '';

	// Header
	content += `# ${projectName}\n\n`;
	content += `${description}\n\n`;

	// Badges section for professional tone
	if (isProfessional || isTechnical) {
		if (analysis.projectType === 'javascript') {
			content += `[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)\n`;
			if (analysis.framework === 'React') {
				content += `[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)\n`;
			}
		} else if (analysis.projectType === 'flutter') {
			content += `[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)\n`;
		} else if (analysis.projectType === 'python') {
			content += `[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)\n`;
		}
		
		if (isOpenSource) {
			content += `[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)\n`;
		}
		content += '\n';
	}

	// Features section
	if (!isBrief) {
		content += `## ✨ Features\n\n`;
		
		if (analysis.projectType === 'flutter') {
			content += `- 📱 Cross-platform mobile application\n`;
			content += `- 🎨 Beautiful and intuitive user interface\n`;
			content += `- ⚡ Fast performance and smooth animations\n`;
			content += `- 🔒 Secure data handling and privacy protection\n`;
			content += `- 🌙 Dark mode and theme customization\n`;
		} else if (analysis.projectType === 'javascript') {
			content += `- 🚀 Fast and reliable performance\n`;
			content += `- 📦 Easy installation and setup\n`;
			content += `- 🔧 Highly configurable and extensible\n`;
			content += `- 🛡️ Secure and well-tested\n`;
			if (analysis.framework === 'React') {
				content += `- ⚛️ Built with React for modern UI\n`;
			}
		} else {
			content += `- 🚀 Fast and reliable performance\n`;
			content += `- 📦 Easy to install and configure\n`;
			content += `- 🔧 Highly customizable\n`;
			content += `- 🛡️ Secure and tested\n`;
		}
		content += '\n';
	}

	// Installation section
	content += `## 🚀 Installation\n\n`;
	
	if (analysis.projectType === 'javascript') {
		content += `\`\`\`bash\n# Clone the repository\ngit clone <repository-url>\ncd ${projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')}\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm start\n\`\`\`\n\n`;
		
		// Add available scripts if detected
		if (Object.keys(analysis.scripts).length > 0) {
			content += `## 📜 Available Scripts\n\n`;
			for (const [script, command] of Object.entries(analysis.scripts)) {
				content += `- \`npm run ${script}\` - ${command}\n`;
			}
			content += '\n';
		}
	} else if (analysis.projectType === 'python') {
		content += `\`\`\`bash\n# Clone the repository\ngit clone <repository-url>\ncd ${projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')}\n\n# Create virtual environment\npython -m venv venv\nsource venv/bin/activate  # On Windows: venv\\Scripts\\activate\n\n# Install dependencies\npip install -r requirements.txt\n\n# Run the application\npython main.py\n\`\`\`\n\n`;
	} else if (analysis.projectType === 'flutter') {
		content += `### Prerequisites\n\n`;
		content += `- Flutter SDK (>=3.0.0)\n`;
		content += `- Dart SDK (>=2.17.0)\n`;
		content += `- Android Studio / VS Code\n`;
		content += `- iOS development: Xcode (Mac only)\n\n`;
		
		content += `### Setup\n\n`;
		content += `\`\`\`bash\n# Clone the repository\ngit clone <repository-url>\ncd ${projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')}\n\n# Get dependencies\nflutter pub get\n\n# Run the app\nflutter run\n\`\`\`\n\n`;
	} else if (analysis.projectType === 'rust') {
		content += `\`\`\`bash\n# Clone the repository\ngit clone <repository-url>\ncd ${projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')}\n\n# Build the project\ncargo build --release\n\n# Run the project\ncargo run\n\`\`\`\n\n`;
	} else {
		content += `\`\`\`bash\ngit clone <repository-url>\ncd ${projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-')}\n# Follow setup instructions\n\`\`\`\n\n`;
	}

	// Usage section
	content += `## 📖 Usage\n\n`;
	
	if (analysis.projectType === 'flutter') {
		content += `### Development Commands\n\n`;
		content += `\`\`\`bash\n# Run in debug mode\nflutter run\n\n# Run with hot reload\nflutter run --hot\n\n# Build for Android\nflutter build apk --release\n\n# Build for iOS\nflutter build ios --release\n\n# Run tests\nflutter test\n\`\`\`\n\n`;
	} else if (analysis.projectType === 'javascript' && analysis.framework === 'React') {
		content += `After installation, start the development server:\n\n\`\`\`bash\nnpm start\n\`\`\`\n\nThe app will open at [http://localhost:3000](http://localhost:3000).\n\n### Building for Production\n\n\`\`\`bash\nnpm run build\n\`\`\`\n\n`;
	} else {
		content += `Detailed usage instructions and examples go here.\n\nInclude common use cases, configuration options, and troubleshooting tips.\n\n`;
	}

	// Tech stack section for comprehensive
	if (isComprehensive && (isForDevelopers || isTechnical)) {
		content += `## 🛠️ Built With\n\n`;
		if (analysis.projectType === 'flutter') {
			content += `- **[Flutter](https://flutter.dev)** - UI toolkit for building natively compiled applications\n`;
			content += `- **[Dart](https://dart.dev)** - Programming language optimized for apps\n`;
		} else if (analysis.projectType === 'javascript') {
			content += `- **[Node.js](https://nodejs.org)** - JavaScript runtime environment\n`;
			if (analysis.framework) {
				content += `- **[${analysis.framework}](https://reactjs.org)** - Frontend framework\n`;
			}
		} else if (analysis.projectType === 'python') {
			content += `- **[Python](https://python.org)** - Programming language\n`;
		} else if (analysis.projectType === 'rust') {
			content += `- **[Rust](https://rust-lang.org)** - Systems programming language\n`;
		}
		content += '\n';
	}

	// Dependencies section for technical audience
	if (!isBrief && isForDevelopers && analysis.dependencies && analysis.dependencies.length > 0) {
		content += `## 📦 Dependencies\n\n`;
		content += `Key dependencies:\n`;
		analysis.dependencies.slice(0, 8).forEach((dep: string) => {
			content += `- \`${dep}\`\n`;
		});
		if (analysis.dependencies.length > 8) {
			content += `- ... and ${analysis.dependencies.length - 8} more\n`;
		}
		content += '\n';
	}

	// Contributing section
	if (isStandard || isComprehensive) {
		content += `## 🤝 Contributing\n\n`;
		
		if (isOpenSource) {
			content += `Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.\n\n`;
			content += `1. Fork the Project\n`;
			content += `2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)\n`;
			content += `3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)\n`;
			content += `4. Push to the Branch (\`git push origin feature/AmazingFeature\`)\n`;
			content += `5. Open a Pull Request\n\n`;
		} else {
			content += `Contributions are welcome! Feel free to:\n\n`;
			content += `- 🐛 Report bugs\n`;
			content += `- 💡 Suggest features\n`;
			content += `- 🔧 Submit pull requests\n`;
			content += `- 📖 Improve documentation\n\n`;
		}
	}

	// License
	content += `## 📄 License\n\n`;
	if (isForTeams) {
		content += `This project is proprietary software. All rights reserved.\n\n`;
		content += `© ${new Date().getFullYear()} Your Company Name. Unauthorized copying or distribution is prohibited.\n`;
	} else {
		content += `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n`;
	}

	return content;
}

// This method is called when your extension is deactivated
export function deactivate() {}