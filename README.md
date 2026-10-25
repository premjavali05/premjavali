# Prem M Javali — React Portfolio

A responsive, single-page developer portfolio built with React + Vite, Framer Motion, and Lucide icons. It is designed to deploy as a static site on Vercel's free Hobby plan.

## Before launch: personalize these two items

1. **Add the real portrait:** save a professional headshot as `public/images/profile.jpg`. The page automatically uses it. If the file is absent, the page displays a PJ placeholder. Use a vertical image with the face near the top; roughly 900 × 1100 px works well.
2. **Review every fact and link:** project descriptions and experience entries were drafted from the supplied résumé. Confirm wording, dates, performance figures, contact details, project repository links, and the résumé PDF with the profile owner before publishing.

The downloadable résumé currently included is `public/Prem-M-Javali-Resume.pdf`.

## Install on a new Windows laptop

1. Install **Node.js LTS** from https://nodejs.org/ . Close and reopen PowerShell after installation.
2. Install **Visual Studio Code** from https://code.visualstudio.com/ .
3. Extract this project ZIP to a simple location, for example `C:\Projects\prem-portfolio`.
4. Open that folder in VS Code (`File → Open Folder`).
5. In VS Code choose `Terminal → New Terminal`, then run:

```powershell
node -v
npm -v
npm install
npm run dev
```

6. Open the local address printed by Vite (usually `http://localhost:5173`). Keep the terminal running while you work. Stop it with `Ctrl + C`.
7. Before deploy, run:

```powershell
npm run build
```

The production site will be generated in `dist/`.

## Deploy free on Vercel

1. Create or sign in to a GitHub account at https://github.com/ . Create a **new private repository** if you'd like to keep the source private, or public if that's your preference.
2. In the project terminal, run these commands, replacing `YOUR_GITHUB_REPO_URL` with your repository URL:

```powershell
git init
git add .
git commit -m "Build initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

If Git is not installed, install it from https://git-scm.com/download/win and reopen VS Code.

3. Visit https://vercel.com/ and sign in with GitHub.
4. Select **Add New → Project**, import the repository, and keep the detected Vite settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. Vercel will provide a live URL. Future pushes to the connected branch will trigger a new deployment.

## Project structure

```text
portfolio-launch-kit/
├── public/
│   ├── images/profile.jpg        # add the real headshot here
│   └── Prem-M-Javali-Resume.pdf
├── src/
│   ├── App.jsx                   # content and React sections
│   ├── main.jsx
│   └── styles.css                # theme, responsive layout and animations
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Quick edits

- **Colors:** edit the CSS variables at the top of `src/styles.css` (`--navy`, `--mint`, `--paper`, and `--ink`).
- **Text, skills, projects, experience:** edit the data arrays and the `PROFILE` object near the top of `src/App.jsx`. Add new projects at the beginning of the `projects` array to show them first; project numbers update automatically. Keep each project's skills and green GitHub button together in the card footer; the skills wrap as needed beside the button. Use a direct repository link when available, or the GitHub profile link otherwise.
- **Portrait:** replace `public/images/profile.jpg` with the approved image (keep the same filename).
- **Résumé:** replace `public/Prem-M-Javali-Resume.pdf` with the final approved PDF using the same filename.
- **Reduced motion:** the reveal animations respect the device's reduced-motion preference.

## Launch checklist

- [ ] Replace the PJ placeholder with the client's approved portrait.
- [ ] Confirm name, role title, phone, email, LinkedIn, and GitHub links.
- [ ] Confirm project facts and metrics against the final résumé.
- [ ] Confirm the résumé download is the correct final version.
- [ ] Test at mobile width and on Chrome.
- [ ] Run `npm run build` without errors.
- [ ] Open the live Vercel URL on phone and desktop before sharing with recruiters.
