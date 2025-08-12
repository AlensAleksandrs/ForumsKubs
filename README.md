# Ghost theme for Forums Kubs

[![scrutinizer Code Quality](https://scrutinizer-ci.com/g/AlensAleksandrs/ForumsKubs/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/AlensAleksandrs/ForumsKubs/?branch=main)
[![license: LGPL v3.0 or later](https://img.shields.io/badge/License-LGPL%20v3.0%2B-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![version](https://img.shields.io/github/package-json/v/AlensAleksandrs/ForumsKubs?filename=package.json)](https://github.com/AlensAleksandrs/ForumsKubs/blob/main/package.json)

Custom Ghost theme for [ForumsKubs.lv](https://www.forumskubs.lv) – the official site of Forums KUBS, a national platform for student leaders in Latvia. Built with Handlebars, it’s responsive, lightweight, and designed to showcase events, foster collaboration, and reflect the spirit of student empowerment.

---

### Table of contents

- [Installation](#installation)
  - [Development stage](#-development-stage)
  - [Depolyment stage](#-deployment-stage)
- [License](#license)
- [Links](#links)

---

## Installation

This instruction has been written to provide a clear guide for
further development of the theme and usage of it in a live environment.

### 🛠️ Development stage

**Prerequisites:**

- [Node.js](https://nodejs.org/en/download) (v18.x recommended for Ghost compatability)
- [Ghost CLI](https://docs.ghost.org/ghost-cli) (installed globally) `npm install -g ghost-cli`
- Theme repository contents cloned into the `/content/themes/` directory
- [Prettier](https://prettier.io/docs/install)
- [Stylelint](https://stylelint.io/user-guide/get-started)
- [HTMLHint](https://htmlhint.com/getting-started/)
- [Husky](https://typicode.github.io/husky/get-started.html) with lint-staged for pre-commit hook

#### 1. Install dependencies

<pre> npm install </pre>

#### 2. Start the development script

<pre> npm run dev </pre>

This will:

- Watch your `assets/css/index.css` file and `*.hbs` files for changes
- Build and update `assets/built/index.css` with required Tailwindcss classes

#### 3. Linting and formatting

The repository comes with pre-configured tools (triggered automatically upon commit via [Husky]() hook)

- `Prettier` - formats JSON, JS, MD, etc.
- `Stylelint` - enforces CSS conventions
- `HTMLHint` - validates `.hbs` files

You have the option to run these tools manually:

<pre>
npx prettier --write .
npx stylelint "**/*.css"
npx htmlhint "**/*.hbs"
</pre>

### 🚀 Deployment stage

These steps describe how to build, package, and deploy the `ForumsKubs` theme to a live Ghost instance.

#### 1. Build the theme

Before deploying, you must generate the final production-ready CSS output.

<pre>npm run build</pre>

This will:

- Using the `Tailwindcss CLI` process theme files and generate a production-ready stylesheet
- Output the stylesheet to `assets/built/index.css`
- Ensure the theme is ready for production environment

#### (optional) Package the theme

Ghost themes are published and deployed as `.zip` files. You can achieve this manually or via a script.

##### Manually

<pre>zip -r forumskubs.zip *</pre>

**note:** Exclude unnecessary files by ensuring .gitignore is up to date (e.g., node_modules, .git, etc.).

##### Via a script

Using the package.json script by running `npm run zip`

<pre>"scripts": {
  "zip": "npm run build && zip -r forumskubs.zip . -x \"node_modules/*\" \".git/*\" \".*/**\""
}</pre>

#### 2. Activate the theme

Theme management is available in the Ghost administrative panel

1. Log in to your Ghost Admin panel (e.g., `https://yourdomain.com/ghost`)
2. Go to **Settings** → **Design**
3. Scroll down to **Theme** section and select **Change theme**

##### If packaged as a `.zip` file

4. Click **Upload theme** (top right of the user interface)
5. Select `forumskubs.zip` and confirm the upload
6. Click **Activate**

##### If cloned directly into the production environment

4. Select **Installed** (top left of the user interface)
5. Find `forumskubs-theme` **(ForumsKubs)**
6. Click **Activate**

#### ✅ Done!

`ForumsKubs` custom theme is now live. 🎉

## License

The `ForumsKubs` theme is licensed under the terms of the GPL-3 Open Source license and is available for free. Learn more in the license file found within the repository!

## Links

- [Live site](https://www.forumskubs.lv) of the Forums Kubs association
- [Documentation]() for detailed instructions on theme usage

---

Developed by [Alens Aleksandrs Čerņa](https://www.alens.lv)
