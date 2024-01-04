<!-- markdownlint-disable MD032 MD033-->
# 🔥 **CustomAFK GitHub Project IE307**

<p align="center">
  <br>
  <a href="https://github.com/QuangPhamvt/ie307-front-end-next/issues">
    <img src="https://img.shields.io/github/issues-closed/QuangPhamvt/ie307-front-end-next?color=0088ff&style=for-the-badge&logo=github" alt="@QuangPhamvt/ie307-front-end's issues"/>
  </a>
  <a href="https://github.com/QuangPhamvt/ie307-front-end-next/pulls">
    <img src="https://img.shields.io/github/issues-pr-closed/QuangPhamvt/ie307-front-end-next?color=0088ff&style=for-the-badge&logo=github" alt="@QuangPhamvt/project-template's pull requests"/>
  </a>
  <a href="https://github.com/QuangPhamvt/ie307-front-end-next/actions/workflows/deploy.yml">
    <img src="https://github.com/QuangPhamvt/ie307-front-end-next/actions/workflows/deploy.yml/badge.svg" alt="@QuangPhamvt/ie307-front-end-next's tests">
  </a>
</p>

---

## 🤔 **What is this project?**

* This is APP build by REACT-NATIVE for project of IE307.

---

## ⚡ **Installation**

1. Prerequires
- Bun version > 1.0.x 
- Or `NodeJS >=18.x`
2. Clone repository
   ```bash
   git clone git@github.com:QuangPhamvt/ie307-front-end-next.git
   ```
3. Install packages
   ```bash
   bun install  # or you can use yarn add, npm install
   ```
4. Install prepare config
   ```bash
   bun prepare # if you use yarn or npm please consider remove husky or re-config .husky folder
   ```
6. Usage
   ```bash
   bun start # or yarn run start, npm run start
   ```


---

## 📚 **What does it include?**


---

### 🌲 **Project tree**

```
📦src
 ┣ 📂HOC
 ┃ ┣ 📜DismissKeyBoardView.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂api
 ┣ 📂components
 ┣ 📂config
 ┣ 📂store
 ┃ ┗ 📜atom.ts
 ┣ 📂utilities
 ┃ ┣ 📂hook
 ┃ ┣ 📂type
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┣ 📂store
 ┃ ┣ 📜constant.ts
 ┃ ┣ 📜fnc.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜localStorage.ts
 ┣ 📂view
 ┃ ┣ 📂components
 ┃ ┣ 📂screens
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📂BioEdit
 ┃ ┃ ┣ 📂ChangePassword
 ┃ ┃ ┣ 📂EditProfile
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂NewPost
 ┃ ┃ ┣ 📂NewStoryView
 ┃ ┃ ┣ 📂StoryVIew
 ┃ ┃ ┣ 📂Upload
 ┃ ┃ ┣ 📂UsernameEdit
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂store
 ┃ ┗ 📜type.tsx
```

---

## 📝 **Additional notes**

## 📖 **Information**
### Package
```
  "dependencies": {
    "@expo/vector-icons": "^13.0.0",
    "@react-native-camera-roll/camera-roll": "^7.2.0",
    "@react-native-seoul/masonry-list": "^1.4.2",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "@react-navigation/stack": "^6.3.20",
    "axios": "^1.6.2",
    "buffer": "^6.0.3",
    "dayjs": "^1.11.10",
    "expo": "~49.0.15",
    "expo-dev-client": "~2.4.12",
    "expo-file-system": "^15.6.0",
    "expo-image-picker": "^14.5.0",
    "expo-linear-gradient": "^12.5.0",
    "expo-media-library": "^15.6.0",
    "expo-permissions": "^14.4.0",
    "expo-secure-store": "^12.5.0",
    "expo-status-bar": "^1.7.1",
    "expo-updates": "~0.18.17",
    "lodash": "^4.17.21",
    "nativewind": "^2.0.11",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-keyboard-aware-scroll-view": "^0.9.5",
    "react-native-modal": "^13.0.1",
    "react-native-safe-area-context": "^4.7.4",
    "react-native-screens": "^3.29.0",
    "recoil": "^0.7.7"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@types/lodash": "^4.14.202",
    "@types/react": "~18.2.14",
    "husky": "^8.0.0",
    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.9",
    "tailwindcss": "3.3.2",
    "typescript": "^5.1.3"
  },
```

## ❔ **How to push**

- Role commit
  `{type}: {subject}`
  - type: build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test
  - subject: 'Write a short, imperative tense description of the change'
- Automatic: check lint and format pre-commit

- Example:

```bash
git commit -m "{type}: {subject}"
```

Description
|**Types**| **Description** |
|:---| :--- |
|feat| A new feature|
|fix| A bug fix|
|docs| Documentation only changes|
|style| Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
|refactor| A code change that neither fixes a bug nor adds a feature |
|perf| A code change that improves performance |
|test| Adding missing tests or correcting existing tests |
|build| Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
|ci| 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|chore| Other changes that don't modify src or test files |
|revert| Reverts a previous commit |



