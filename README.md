🇬🇧 My Dictionary App
An interactive English learning application built with React and TypeScript. It allows users to search for new words via a public API, save them to a personal dictionary, and practice using a built-in training mode.

🚀 Key Features
Word Search: Integrated with the Free Dictionary API to fetch real-time definitions and data.

Personal Dictionary: Save words to a local state (Redux) with status tracking (new, learning, learned).

Smart Filtering: Filter and sort your word list based on study progress.

Training Mode: An interactive flashcard-style trainer with input validation to help memorize words.

Enhanced UX: Keyboard support (Enter key to submit), automatic input focusing, and smooth UI transitions.

🛠 Tech Stack
Frontend: React 18 + TypeScript

State Management: Redux Toolkit (Slices & Actions)

Data Fetching: RTK Query (efficient API communication)

Styling: Tailwind CSS (Utility-first CSS)

Architecture: Component-based architecture with "Lifting State Up" patterns.

📦 Getting Started
Clone the repository:

Bash
git clone https://github.com/alerocla/English-web-application-.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev