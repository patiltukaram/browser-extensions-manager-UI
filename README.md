# Frontend Mentor - Browser extensions manager UI

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this browser extension manager UI and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data for the extensions in a local `data.json` file. So you can use that to add the data dynamically if you choose.

Your users should be able to: 

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Build
This is a simple React application that displays a list of browser extensions. Users can filter the extensions by status (`All`, `Active`, or `Inactive`), toggle the active state of each extension, and remove extensions from the list.

---

## 🚀 Features

🔘 Toggle active/inactive status with a custom switch

❌ Remove extensions from the list

🔎 Filter extensions: All / Active / Inactive

🌙 Light/Dark theme toggle

⚛️ Built using modern React (functional components + hooks)

🎨 Styled using custom CSS

---

## 🛠️ Tech Stack

- React (with hooks)
- CSS (custom styles for toggle and layout)
- Local JSON file for data
- UUID for dynamic IDs (for stable key management)

---
## 📁 Project Structure


├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── design/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json

├── src/
│   ├── components/
│   │   ├── ExtensionCard.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── List.js
│   ├── App.js
│   ├── App.css
│   ├── data.json
│   ├── index.js
│   └── index.css

├── README.md
├── preview.jpg
├── .gitignore
├── package.json
└── style-guide.md

## Deploying your project



- [GitHub Pages](https://github.com/patiltukaram/browser-extensions-manager-UI)


You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).




## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of our [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
