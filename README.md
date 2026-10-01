# ByteSpace — Course Marketplace

A modern, responsive **e-learning course marketplace** built from a Figma design using **Next.js 16, React 19, TypeScript, and Tailwind CSS**.

ByteSpace provides a complete front-end experience for discovering courses, viewing course details and lessons, reading reviews, exploring creator profiles, and managing authentication-related flows. The project focuses on reusable components, structured TypeScript data, responsive layouts, and a clean App Router architecture.

---

## ✨ Features

### 🏠 Home Page

* Modern hero section based on the Figma design
* Featured/popular courses
* Course categories and promotional sections
* Responsive navigation and footer
* Fully responsive layout for mobile, tablet, and desktop

### 🔐 Authentication

* Login page
* Registration page
* Form validation
* Password visibility controls
* Responsive authentication layout
* User-friendly validation and error states


### 📚 Course Details

* Course hero section
* Course information and description
* Instructor/creator information
* Course statistics
* Course tabs
* Lesson/course content overview
* Student reviews

### 🎓 Course Lessons

* Dedicated course lesson page
* Lesson navigation
* Course curriculum structure
* Lesson content presentation
* Responsive learning interface


### 👨‍🏫 Creator Profile

* Creator/instructor information
* Creator profile details
* Published courses
* Course card integration

### 📧 Newsletter

* Newsletter subscription form
* Input validation
* Responsive design

### 🚫 404 Page

* Custom not-found page
* Clear navigation back to the main application

---

## 📄 Pages

The application includes the following pages:

| Page                      | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `/`                       | Home page                                        |
| `/login`                  | User login                                       |
| `/register`               | User registration                                |
| `/search`                 | Course search, filtering, sorting and pagination |
| `/courses/[slug]`         | Course details                                   |
| `/courses/[slug]/lessons` | Course lessons                                   |
| `/courses/[slug]/reviews` | Course reviews                                   |
| `/creators/[slug]`        | Creator profile                                  |
| `404`                     | Custom not-found page                            |

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS**

### Architecture

* Next.js App Router
* Reusable React components
* Typed centralized course data
* Dynamic routes
* Responsive layouts
* Client-side interactions

### Development

* ESLint
* TypeScript type checking
* Git & GitHub

---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd bytespace
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the production server after building the application.

### Lint

```bash
npm run lint
```

Runs the project's ESLint checks.

---

## 🏗️ Build & Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

