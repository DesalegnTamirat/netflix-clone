# 🍿 Netflix Clone (React/TMDB API)

## 🌟 Overview

This project is a high-fidelity clone of the **Netflix UI**, built using **React.js**. It dynamically fetches real movie and TV show data from **The Movie Database (TMDB) API**.

The codebase has been refactored to follow **modern React best practices**, focusing on separating logic, using custom data-fetching hooks, implementing robust state management for loading and errors, and utilizing clean, component-scoped styling with CSS.

---

## ✨ Features

* **Dynamic Hero Banner:** Features a single, randomly selected movie from the Netflix Originals list upon load.
* **Trailer Playback:** Clicking on a movie poster retrieves and plays the corresponding YouTube trailer in a full-screen modal.
* **Robust UI:** Includes integrated **Skeleton Loading** components for movie rows and the banner, ensuring a smooth user experience while data is being fetched.
* **Error Handling:** Dedicated error states for failed API calls in both the Banner and Movie Rows.
* **Custom Hooks:** Uses `useBannerMovie` and `useMovieList` to cleanly separate data fetching logic from UI components.
* **Responsive Design:** Optimized layout and navigation for various screen sizes, including a sticky, scrolling header effect.

---

## 🛠️ Technology Stack

* **Frontend:** React (Hooks, Functional Components)
* **Styling:** Vanilla CSS (with utility classes and keyframe animations for the Skeleton)
* **API:** The Movie Database (TMDB) API
* **HTTP Client:** Axios
* **Media:** `movie-trailer`, `react-youtube`

---

## 🚀 Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm or yarn

### 1. Clone the repository

```bash
git clone [Your Repository URL]
cd netflix-clone
```
### 2. Clone the repository
```Bash
npm install 
```
### 3. Setup Environment Variables
The project requires a TMDB API Key.

Get your API Key (v3) from The Movie Database (TMDB).

Create a file named .env.local in the project root directory.

Add your API key inside the file:

Code snippet

VITE_TMDB_API_KEY="YOUR_TMDB_API_KEY_HERE"
### 4. Run the Application
Start the development server:
```Bash

npm run dev
```
The application will run locally, usually at http://localhost:5173.