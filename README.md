# Delhi Durbar 1903

A historical and visual archive dedicated to the **Delhi Durbar of 1903**, featuring detailed historical research, rare photographs, and the recreation of ceremonial elephants and figures by **Beau Geste Toy Soldiers**.

The project combines historical documentation with collectible artistry, presenting the grandeur of the Delhi Durbar through an interactive web experience.

---

## Features

- Historical chapters about the Delhi Durbar 1903
- Beau Geste toy soldier and elephant recreations
- Reusable accordion navigation menu
- Dynamic JSON-driven content structure
- Responsive image galleries and layouts
- Print-friendly pages
- Modular Angular architecture
- SCSS styling with custom royal-themed design system

---

## Technologies Used

- Angular
- TypeScript
- SCSS
- Angular Router
- RxJS
- Bootstrap/Grid layouts
- JSON-based content management

---

## Project Structure

```txt
src/
│
├── app/
│   ├── beau-geste/
│   ├── durbar-history/
|   |── home/
│   ├── states/
│   ├── layout/
│   │   ├── menu/
│   │   ├── header/
│   │   ├── footer/
|   |   ├── subcription/
|   |   └── who-we-are
│   ├── services/
│   ├── shared/
│   │   ├── models/
│   │   ├── print/
│   │   └── section-title/
│   └── ...
│
├── assets/
│   ├── beau-geste/
│   ├── fonts/
│   ├── history/
│   ├── fonts/
│   └── json/
│
└── environments/
```

---

## Architecture Improvements

The application evolved from a static button-based navigation system into a **data-driven accordion menu architecture**.

### Previous approach

- Multiple duplicated button components
- Manual route tracking and highlighting
- Separate JSON files for each section
- Difficult scalability

### Current approach

- Reusable accordion menu sections
- Centralized JSON menu configuration
- Dynamic routing integration
- Automatic route highlighting with `routerLinkActive`
- Scalable structure for future historical sections

---

## Navigation System

The left sidebar menu uses:

- Accordion-based expandable sections
- Angular routing
- Active route highlighting
- Sticky sidebar behavior
- Reusable menu section components

Menu content is driven by structured JSON data.

---

## Styling

The site uses a custom SCSS theme inspired by the royal aesthetics of the Delhi Durbar:

- Gold typography
- Deep red and brown backgrounds
- Green highlighted navigation
- Radial gradients and antique textures
- Custom embedded fonts

---

## Responsive Design

The application supports:

- Desktop layouts
- Tablet responsiveness
- Mobile-friendly grids
- Print-specific stylesheets

---

## Running the Project

Clone the repository:

```bash
git clone https://github.com/gradile/delhi-durbar-history.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Open:

```txt
http://localhost:4200
```

---

## Deployment Notes

Because the application uses Angular routing, Apache hosting requires an `.htaccess` rewrite configuration to support browser refresh on nested routes.

Example:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Future Plans

- Migration to Next.js
- Markdown-based historical content
- Improved image optimization
- Interactive timelines and maps
- Expanded Indian States historical section
- Enhanced mobile navigation

---

## Live Website

[Delhi Durbar 1903](https://www.delhidurbar1903.com)

---

## Author

Developed and maintained by Graciela Di Lelle.

Frontend developer with a strong focus on scalable UI architecture, and collectible showcase experiences.
