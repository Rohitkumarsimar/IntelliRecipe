# AI Recipe Generator 🍳

An intelligent web application that generates personalized recipes using Google's Gemini AI API. Simply enter your ingredients or describe what you want to cook, and let our AI create a detailed recipe for you!

## Features ✨

- **AI-Powered Recipe Generation**: Uses Google's Gemini AI to create unique recipes
- **Ingredient Validation**: Smart validation to ensure recipe-related inputs
- **Cooking Time Integration**: Optional cooking time parameter for customized recipes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User-Friendly Interface**: Clean, intuitive design with loading animations
- **Error Handling**: Comprehensive error handling with helpful user feedback

## Getting Started 🚀

### Prerequisites

- A modern web browser
- Google Gemini AI API key
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohitkumarsimar/AI-Recipe-Generator1.git
   cd AI-Recipe-Generator1
   ```

2. **Set up your API key**
   - Open `script2.js`
   - Replace `YOUR_API_KEY_HERE` with your actual Google Gemini AI API key
   - Get your API key from [Google AI Studio](https://makersuite.google.com/)

3. **Run the application**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

## Usage 📖

1. **Enter Ingredients**: Type in the ingredients you have or the name of a dish you want to make
2. **Set Cooking Time** (Optional): Specify how long you want to spend cooking
3. **Generate Recipe**: Click the "Generate Recipe" button
4. **Enjoy**: Follow the AI-generated recipe with step-by-step instructions!

### Example Inputs

- "Chicken, rice, vegetables"
- "Chocolate cake recipe"
- "Pasta with tomatoes and basil"
- "Quick breakfast with eggs"

## File Structure 📁

```
AI-Recipe-Generator1/
├── index.html          # Main HTML file
├── script2.js          # JavaScript functionality
├── styles.css          # CSS styling
├── assets/
│   ├── fooditems.js    # Food validation keywords
│   ├── favicon.png     # Website icon
│   └── clouds2.jpg     # Background image
└── README.md           # This file
```

## Security Notes 🔒

⚠️ **Important**: This application requires an API key to function. For production use:

- Store API keys securely using environment variables
- Implement server-side API calls to hide the key from client-side code
- Consider implementing rate limiting and user authentication
- Never commit API keys to version control

## Technologies Used 💻

- **HTML5**: Structure and markup
- **CSS3**: Styling and animations
- **Vanilla JavaScript**: Application logic and API integration
- **Google Gemini AI API**: Recipe generation
- **Responsive Web Design**: Mobile-friendly interface

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request. Here are some ways you can contribute:

- Add new food validation keywords
- Improve UI/UX design
- Add new features (save recipes, nutrition info, etc.)
- Fix bugs and improve error handling
- Add internationalization support

## Future Enhancements 🌟

- [ ] Save favorite recipes locally
- [ ] Nutritional information display
- [ ] Recipe difficulty levels
- [ ] Dietary restriction filters (vegan, gluten-free, etc.)
- [ ] Recipe sharing functionality
- [ ] Multi-language support
- [ ] Recipe rating system

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments 🙏

- Google Gemini AI for providing the recipe generation capabilities
- The open-source community for inspiration and resources
- All contributors who help improve this project

## Support 💬

If you encounter any issues or have questions:

1. Check the existing [Issues](https://github.com/Rohitkumarsimar/AI-Recipe-Generator1/issues)
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem and steps to reproduce it

---

**Happy Cooking! 👨‍🍳👩‍🍳**

Made with ❤️ and powered by AI