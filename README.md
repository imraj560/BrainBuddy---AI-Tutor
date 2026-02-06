🧠 BrainBuddy — AI Voice Tutor

BrainBuddy is a subscription-based AI-powered learning platform that allows users to learn new topics interactively using voice commands. It integrates Vapi’s Voice AI with large language models (LLMs) to provide real-time, conversational tutoring experiences.

Authentication, payments, and subscriptions are handled through Clerk, while Supabase powers the database for storing user profiles, learning progress, and voice interaction history. The application is built with Next.js (App Router) for a modern, high-performance web experience.

✨ Features

🎙️ Voice-Based AI Tutoring – Learn by speaking naturally with an AI tutor.

🤖 LLM-Powered Responses – Intelligent explanations and guidance in real time.

🔐 Authentication & Subscriptions – Secure login, payments, and plan management via Clerk.

📊 Progress Tracking – Stores learning history and progress using Supabase.

⚡ Modern Frontend – Built with Next.js App Router for performance and scalability.

🛠 Tech Stack

Frontend & Backend: Next.js (App Router)

Voice AI: Vapi

AI Models: Large Language Models (LLMs)

Authentication & Payments: Clerk

Database: Supabase

Hosting: (Optional – Vercel / Netlify)

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/imraj560/BrainBuddy---AI-Tutor.git
cd BrainBuddy---AI-Tutor

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env.local file and add the following:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

VAPI_API_KEY=your_vapi_key
LLM_API_KEY=your_llm_key


Replace the values with your actual credentials.

4️⃣ Run the development server
npm run dev


Open http://localhost:3000
 in your browser.

📖 How It Works

Users sign up or log in using Clerk.

After subscribing, users can start a voice session.

Voice input is processed using Vapi and sent to an LLM.

AI generates a spoken and textual response.

Learning progress and interaction history are stored in Supabase.

📂 Project Structure (Overview)
app/
 ├─ auth/           # Authentication routes
 ├─ dashboard/      # User dashboard
 ├─ api/            # Backend API routes
 ├─ components/     # Reusable UI components
 ├─ lib/            # Utility functions & integrations
 └─ styles/         # Global styles

🔐 Security

Secure authentication and session handling via Clerk.

API keys stored using environment variables.

Role-based access control for subscription-based features.
