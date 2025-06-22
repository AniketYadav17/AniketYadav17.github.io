# Data Science Portfolio Website

A clean, professional portfolio website built with React and Tailwind CSS, specifically designed for data science graduate roles. Features dark mode, responsive design, and easy customization.

## 🚀 Features

- **Modern Tech Stack**: React 19 + Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all devices
- **Clean Navigation**: React Router with smooth transitions
- **Professional Layout**: Minimal, clean design focused on content
- **Easy Customization**: Well-structured components and Tailwind classes

## 📋 Pages

- **Home**: Personal introduction with resume download
- **Projects**: Showcase of 3 data science projects with tech stacks
- **Blog**: Links to Hashnode articles with featured posts
- **Contact**: Professional contact information and links

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Heroicons** - Beautiful SVG icons
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Navbar Component (`src/components/Navbar.js`)
```javascript
// Update your name and title
<div className="text-xl font-bold">
  Your Name
</div>
<div className="text-sm">
  Data Scientist
</div>
```

#### 2. Home Page (`src/pages/Home.js`)
```javascript
// Update hero content
<h1 className="text-5xl md:text-7xl font-bold">
  Your Name
</h1>
<h2 className="text-2xl md:text-3xl font-medium">
  Data Scientist & AI Enthusiast
</h2>
```

#### 3. Projects Page (`src/pages/Projects.js`)
- Replace the `projects` array with your actual projects
- Update GitHub links and demo URLs
- Modify project descriptions and tech stacks

#### 4. Blog Page (`src/pages/Blog.js`)
- Update the `blogPosts` array with your Hashnode articles
- Replace `yourusername.hashnode.dev` with your actual Hashnode URL
- Modify article titles, descriptions, and categories

#### 5. Contact Page (`src/pages/Contact.js`)
- Update email address
- Replace LinkedIn and GitHub URLs
- Modify contact descriptions

### Styling Customization

#### Color Scheme
Update the primary colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... other shades
    600: '#2563eb', // Main brand color
  },
}
```

#### Dark Mode Colors
The dark mode colors are automatically handled by Tailwind's dark mode classes. You can customize them in the component files.

### Content Structure

#### Projects
Each project should include:
- Title and description
- Technologies used (tech stack)
- GitHub repository link
- Live demo link (if available)
- Project image/emoji

#### Blog Posts
Each blog post should include:
- Title and excerpt
- Category and tags
- Publication date
- Hashnode URL
- Read time

## 📱 Responsive Design

The website is fully responsive with Tailwind's responsive prefixes:
- **Mobile**: Default styles (no prefix)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🚀 Deployment

### GitHub Pages
1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/my-portfolio"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Project Structure

```
src/
├── components/          # React components
│   └── Navbar.js       # Navigation component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Projects.js     # Projects page
│   ├── Blog.js         # Blog page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Tailwind imports
```

## 🎯 Key Features for Data Science Roles

- **Professional Presentation**: Clean, minimal design that focuses on content
- **Project Showcase**: Dedicated projects page with technical details
- **Blog Integration**: Links to Hashnode articles demonstrating knowledge
- **Contact Information**: Easy access to professional profiles
- **Resume Download**: Direct link to downloadable resume
- **Dark Mode**: Modern feature that many developers appreciate

## 📊 Performance

- **Fast Loading**: Optimized with Tailwind's purge CSS
- **SEO Ready**: Semantic HTML structure
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Mobile Optimized**: Touch-friendly interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio website
- Check the documentation

---

**Perfect for data science graduate applications! 🚀**
