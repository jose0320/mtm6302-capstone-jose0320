Capstone Project – Part 4: Final Web Application Report
Name: Jowin Jose
Student ID: 041138220
Project: Astronomy Picture of the Day Search

Objective
The objective of Part 4 was to develop a fully functional and responsive web application using HTML, CSS, and JavaScript. This phase builds upon the Part 3 prototype, transforming the static layout into an interactive client-side application. The final product integrates real-time API data, local storage, and responsive design without using page reloads.

Steps Taken to Create the Web Application
1. Branch Setup
Created a new part-4 branch from the part-3 branch.

Ensured a clean project structure with only:

index.html

style.css

script.js

2. HTML (index.html)
Maintained the semantic layout from Part 3.

Included:

A date picker for APOD search

Dynamic sections to display APOD content and favourites

Ensured accessibility and responsive layout with Bootstrap classes.

3. CSS (style.css)
Customized styles to match the visual branding of the project.

Used flexbox and Bootstrap utilities for layout.

Enhanced button styles, card animations, and form spacing for better UX.

4. JavaScript (script.js)
Used Fetch API to retrieve data from NASA’s APOD API based on user-selected date.

Dynamically rendered APOD data into the DOM.

Implemented localStorage to save and display favourite images.

No page refreshes – all updates happen via JavaScript.

Replaced all inline events (e.g., onclick) with proper addEventListener() usage.

Ensured all variables were declared using const or let only (no var used).

Resources Used
NASA APOD API

Bootstrap 5.3.2

Google Fonts – Montserrat

MDN Web Docs

W3C Validator

YouTube Tutorials (Traversy Media, Dev Ed)

Challenges Faced
VS Code Crashed: During development, VS Code froze and had to be restarted. Extensions and settings were lost temporarily.

GitHub Sync Issues: Faced trouble pushing changes due to authentication errors. Resolved it by re-authenticating GitHub in VS Code.

Event Listener Migration: Refactoring all inline events into DOM-based addEventListener() functions took time but improved code clarity.

Responsive Layout Adjustments: Managing card layouts within Bootstrap’s grid system across different screen sizes required extra tuning.

Validation & Best Practices
HTML, CSS, and JS passed through validators (W3C and console).

Used const and let only.

Used addEventListener() for all interactivity.

No page reloads were used.

✅ Commit message used: "Completes the assignment"

✅ Final code pushed to the part-4 branch on GitHub.
