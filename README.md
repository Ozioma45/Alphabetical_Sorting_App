# Alphabetical Sorter

A React application that allows users to input words or sentences, and sorts them in alphabetical order. The app is responsive and adjusts seamlessly on different screen sizes, such as mobile, tablet, and desktop. This tool is especially useful for tasks involving sorting words or documents alphabetically.

## Table of Contents

- [Background](#background)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Background

While working on documents that required arranging words alphabetically, I initially considered using AI to sort them for me. However, I decided to create my own system for the task using React. This app helps users enter multiple words or sentences and sorts them alphabetically in a case-insensitive manner.

## Features

- **Add Multiple Inputs:** Users can add as many words or sentences as they need.
- **Alphabetical Sorting:** Sorts input words and sentences alphabetically, case-insensitive.
- **Responsive Design:** Adjusts well to different screen sizes, ensuring a good user experience on mobile, tablet, and desktop.
- **User-Friendly Interface:** Easy-to-use interface with buttons for adding input fields and sorting words.
- **Language-Sensitive Sorting:** Uses `.localeCompare()` for better handling of different languages and special characters.

## Demo

View the live demo by clicking [[here](https://alphabetical-sorting-app.vercel.app/)]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/alphabetical-sorter.git
   cd alphabetical-sorter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser:

   ```bash
   http://localhost:3000
   ```

## Usage

1. Enter words or sentences into the input fields.
2. Click the **Add More Input** button to add additional fields for more entries.
3. Once you've entered all your data, click the **Sort Alphabetically** button.
4. The sorted words or sentences will appear below in a clean, alphabetized list.

### Sorting Logic

The sorting is performed in a case-insensitive manner using the following logic:

```javascript
.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

This ensures that uppercase and lowercase characters are treated the same, and `.localeCompare()` allows for proper sorting in various languages and alphabets.

## Technologies

- **React**: Front-end framework used to build the interactive user interface.
- **CSS**: For styling and ensuring responsiveness using Flexbox and media queries.
- **JavaScript**: Core logic for sorting and managing state.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize and enhance this project for your needs!

```

```
