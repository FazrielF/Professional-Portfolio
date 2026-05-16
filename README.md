# Fazriel Portfolio

A minimalist dark-themed personal portfolio for **Muhammad Fazriel Faddilah**, built with React + Vite + Tailwind CSS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/       # Navbar
├── sections/         # Hero, About, Skills, Education, Projects, Contact, Footer
├── data/             # projects.js, certifications.js, education.js, skills.js
├── layouts/          # SectionWrapper.jsx
├── assets/           # images, resume PDF
└── index.css         # global styles
```

---

## ✏️ Editing Content

All content lives in `src/data/`:

| File                 | What to edit                        |
|----------------------|-------------------------------------|
| `projects.js`        | Project cards (title, desc, tech, link, image) |
| `certifications.js`  | Certifications (title, issuer, date, image)     |
| `education.js`       | Education timeline entries                       |
| `skills.js`          | Technical & soft skills                          |

---

## 📧 EmailJS Setup

1. Install: `npm install @emailjs/browser`
2. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.
3. Add an **Email Service** (e.g. Gmail) → note the **Service ID**.
4. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{reply_to}}` — sender's email
   - `{{message}}` — message body
   - Set "To email" to `muhammadfazrielfaddilah@gmail.com`
   - Note the **Template ID**.
5. Copy your **Public Key** from Account → API Keys.
6. Open `src/sections/Contact.jsx` and:
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`
   - Uncomment the `import emailjs` line
   - Uncomment the `emailjs.sendForm(...)` block
   - Remove the simulated `await new Promise(...)` line

---

## 📄 Resume

Place your resume PDF at `public/resume.pdf`. The Download Resume buttons throughout the site link directly to it.

---

## 🎨 Customisation

- **Colors** — `tailwind.config.js` → `theme.extend.colors`
- **Fonts** — `index.html` Google Fonts link + `tailwind.config.js` fontFamily
- **Social links** — `src/sections/Footer.jsx` → `socials` array
- **Navbar links** — `src/components/Navbar.jsx` → `navLinks` array

---

## 🛠 Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion
- React Icons
- Flowbite React
- Chakra UI (colour mode)
- EmailJS (contact form)
