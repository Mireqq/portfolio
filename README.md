# 💼 Miroslaw Mus Portfolio Website

A personal portfolio website built with React and Vite to showcase Miroslaw Mus’s background, technical skills, projects, CV, and contact information. The site also includes an integrated AI chatbot that answers questions about Miroslaw’s experience, projects, technologies, and career goals.

---

## 🚀 Live Demo

Live site: [https://portfolio-mireqqs-projects.vercel.app](https://portfolio-mireqqs-projects.vercel.app)

---

## 📌 Overview

This project is a modern developer portfolio designed to present Miroslaw Mus as a graduate software engineer. It highlights his experience in backend systems, distributed applications, cloud infrastructure, and machine learning.

The portfolio includes a custom AI assistant that uses a profile-based prompt to answer recruiter-style questions about Miroslaw, his projects, skills, education, interests, and contact details.

---

## ✨ Features

* Responsive personal portfolio website
* React Router navigation between pages
* Home page with hero section, about section, featured projects, technologies, chatbot, and contact area
* Dedicated projects/portfolio page
* Dedicated technologies page
* CV viewer and download section
* Contact page with professional links
* AI chatbot integrated into the portfolio
* OpenAI-powered assistant using a custom `profile.txt` knowledge base
* Serverless API endpoint for Vercel deployment
* Local Express server for development/testing
* Smooth navigation between sections
* Modern frontend built with Vite

---

## 🧠 AI Chatbot

The portfolio includes an AI chatbot called **Mireqq Assistant**.

The chatbot is designed to answer questions about:

* Miroslaw Mus
* His background
* His projects
* His technical skills
* His education
* His career goals
* His portfolio
* Contact information

The assistant uses the content from `profile.txt` as its knowledge base and responds in a professional, friendly tone.

Example questions users can ask:

```text
Who is Miroslaw Mus?
What projects has he built?
What technologies does he use?
What is his machine learning project about?
What roles is he looking for?
How can I contact him?
```

---

## 🏗️ Project Structure

```text
portfolio/
│
├── api/
│   └── chat.js                 # Vercel serverless API for chatbot
│
├── public/
│   └── cv/                     # CV PDF files and public assets
│
├── src/
│   ├── assets/                 # Images and static frontend assets
│   ├── background/             # Background-related files
│   ├── components/
│   │   ├── FluidBackground.jsx # Animated/visual background component
│   │   └── Navbar.jsx          # Navigation bar
│   │
│   ├── pages/
│   │   ├── home.jsx            # Main homepage
│   │   ├── portfolio.jsx       # Projects page
│   │   ├── technologies.jsx    # Technologies page
│   │   ├── chatbot.jsx         # AI chatbot UI
│   │   ├── CV.jsx              # CV viewer/download page
│   │   └── contact.jsx         # Contact page
│   │
│   ├── App.jsx                 # Application routes
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styling
│   └── App.css                 # App-level styling
│
├── profile.txt                 # Knowledge base for the AI assistant
├── server.js                   # Local Express server for chatbot testing
├── package.json                # Project scripts and dependencies
├── vite.config.js              # Vite configuration
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* JavaScript
* HTML
* CSS

### Backend / API

* Node.js
* Express
* Vercel Serverless Functions
* OpenAI API

### Other Tools

* dotenv
* CORS
* ESLint
* Vercel deployment

---

## 📄 Pages

### Home

The home page introduces Miroslaw Mus as a graduate software engineer and includes:

* Hero section
* About Me section
* Featured projects
* Technologies overview
* Embedded AI chatbot
* Contact links

### Portfolio / Projects

The portfolio page highlights key projects, including:

* AI Portfolio Chatbot
* Multimodal Depression Severity Classifier
* Real-Time Java Chat Application
* Kotlin Network Graph Project

### Technologies

The technologies page groups Miroslaw’s skills into areas such as:

* Programming languages
* Web and frontend development
* Backend and systems
* Cloud and infrastructure
* Machine learning

### CV

The CV page allows users to open or download Miroslaw’s CV as a PDF.

### Contact

The contact page provides links to Miroslaw’s professional profiles, including LinkedIn, GitHub, and Hugging Face.

### AI Chatbot

The chatbot page allows visitors to ask questions about Miroslaw’s background, projects, technologies, and experience.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mireqq/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Do not commit your `.env` file to GitHub.

---

## ▶️ Running Locally

Start the Vite development server:

```bash
npm run dev
```

Start the local Express chatbot server:

```bash
npm run server
```

The Express server runs on:

```text
http://localhost:3001
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🤖 Chatbot API

The chatbot sends user messages to the `/api/chat` endpoint.

### Request

```http
POST /api/chat
Content-Type: application/json
```

```json
{
  "message": "What projects has Miroslaw built?"
}
```

### Response

```json
{
  "reply": "Miroslaw has built projects including an AI portfolio chatbot, a multimodal depression severity classifier, a Java chat application, and a Kotlin network graph project."
}
```

---

## 📚 What I Learned

This project helped strengthen practical experience in:

* Building modern React applications with Vite
* Creating multi-page navigation with React Router
* Integrating AI into a personal portfolio
* Building serverless API routes
* Using OpenAI API with a custom knowledge base
* Structuring a portfolio for recruiters and hiring managers
* Deploying a frontend application on Vercel

---

## ⚠️ Limitations

* The chatbot can only answer questions based on the information provided in `profile.txt`
* The chatbot requires a valid OpenAI API key
* The site is focused on portfolio presentation rather than user authentication or database storage
* The backend does not currently store chat history

---

## 🔮 Future Improvements

* Add project screenshots and live demo previews
* Add improved mobile responsiveness
* Add animations and transitions across pages
* Add dark/light mode toggle
* Add chatbot conversation memory during a session
* Add analytics to understand recruiter engagement
* Add downloadable project case studies
* Improve accessibility and SEO metadata

---

## 👤 Author

Miroslaw Mus

* GitHub: [https://github.com/Mireqq](https://github.com/Mireqq)
* LinkedIn: [https://www.linkedin.com/in/miroslaw-mus/](https://www.linkedin.com/in/miroslaw-mus/)
