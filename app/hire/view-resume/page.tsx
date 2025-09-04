"use client"; // This directive marks the component as client-side rendered.

import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

export default function App() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchResume = async () => {
      setIsLoading(true);
      try {
        const content = `
# Aromal S

Trivandrum, Kerala | developeraromal@gmail.com | [linkedin.com/in/developeraromal](https://www.linkedin.com/in/developeraromal) | [github.com/DeveloperAromal](https://github.com/DeveloperAromal)\n\n
\n
## Summary
A 17-year-old full-stack web and software developer, driven to deliver high-quality, impactful solutions at a rapid pace. My work spans several advanced technology domains, including AI/ML, cybersecurity, and end-to-end software development. I specialize in web and mobile applications, backend architectures, and AI-driven platforms, with hands-on expertise in JavaScript, TypeScript, Python, Java, Go, React, Next.js, Flutter, and Django. My technical toolkit also includes modern databases and cloud platforms like MongoDB, PostgreSQL, Supabase, Firebase, Vercel, and DigitalOcean, as well as AI/data science frameworks such as PyTorch, Keras, and TensorFlow.

## Work Experience
### Master Tutor
**Steyp** | August 2025 - Present
* Expanded on responsibilities in this role by describing technologies used, projects led, and any measurable impact on students or the program.
* *(Note: This is a placeholder. Please replace with specific details about your role and achievements.)*

## Projects
### PyroScan AI
**August 2025**
* Engineered a GenAI-powered multi-agent system for real-time forest fire prediction across 10 global zones.
* Designed to serve researchers and disaster teams with agents for fire detection, weather analysis, and historical data mining.
* Developed a deployment solution via CLI or Docker for ease of use.

### LinkLens
**August 2025**
* Developed a lightweight package to detect and highlight links within chat messages and comments.
* Implemented functionality to optionally generate rich previews with thumbnails, titles, and descriptions.

### Satellite Telemetry Decoder
* A showcase project demonstrating how space systems, like ISRO, handle binary packet transmission and decoding in mission-critical environments.

## Technical Skills
**Languages:** JavaScript, TypeScript, Python, Go, Dart, Java, C++, C#, Rust, SQL, HTML5, CSS3, Shell Script \n\n
**Frontend:** React, Next.js, Flutter, TailwindCSS, Vue.js, Angular, React Native \n\n
**Backend & Databases:** Node.js, Express.js, MongoDB, PostgreSQL, MySQL, Redis, Firebase, FastAPI, Django, Flask, NestJS, Gin, Fiber, Echo, Rocket, Actix, \n
**AI & Data Science:** Pandas, PyTorch, NumPy, TensorFlow, Scikit-learn, Keras \n\n
**Cloud & DevOps:** AWS, Docker, Kubernetes, Git, Vercel, DigitalOcean \n

## Education
### Bachelor of Technology in Computer Science
Vidya Academy of Science and Technology Technical Campus, Kilimanoor | January 2025 - January 2029
### Little Flower English Medium Higher Secondary School
January 2012 - January 2025
                `;
        setMarkdownContent(content);
      } catch (error) {
        console.error("Failed to fetch resume content:", error);
        setMarkdownContent("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, []);

  const components = {
    h1: ({...props }) => (
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-2"
        {...props}
      />
    ),
    h2: ({...props }) => (
      <h2
        className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4 mt-6 first-of-type:mt-0"
        {...props}
      />
    ),
    h3: ({...props }) => (
      <h3 className="font-bold text-lg text-gray-800 mt-4 mb-1" {...props} />
    ),
    p: ({...props }) => (
      <p className="text-gray-700 leading-relaxed" {...props} />
    ),
    ul: ({...props }) => (
      <ul
        className="list-disc list-inside text-gray-700 ml-4 space-y-1"
        {...props}
      />
    ),
    li: ({...props }) => <li className="mb-1" {...props} />,
    strong: ({...props }) => (
      <strong className="font-bold text-gray-800" {...props} />
    ),
    a: ({...props }) => (
      <a className="text-blue-600 hover:underline" {...props} />
    ),
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        <p>Loading resume...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 sm:p-12 md:p-16 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white border-1 border-neutral-400 p-8 md:p-12 lg:p-16">
        <Markdown components={components}>{markdownContent}</Markdown>
      </div>
    </div>
  );
}
