# The Aahan Pathak Website

A modern, responsive website showcasing Aahan Pathak, a 7-year-old student-athlete who excels academically at California's #1 school (Faria Academy) and competes in tennis, swimming, and running.

## 🌟 Features

- **Interactive Hero Slideshow**: 4 rotating slides showcasing different aspects of Aahan's achievements
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Interactive Gallery**: Tabbed filtering system with drag-and-drop upload zone
- **Smooth Animations**: Scroll animations, hover effects, and smooth transitions
- **Modern UI**: Clean design with gradients, cards, and professional typography
- **Mobile Menu**: Hamburger menu for mobile navigation

## 📁 Project Structure

```
theaahanpathak-website/
├── index.html          # Main homepage
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Folder for photos (currently empty for future use)
├── videos/             # Folder for videos (currently empty for future use)
└── README.md          # This documentation file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download the project files**
   ```bash
   # If using git
   git clone [repository-url]
   
   # Or simply download and extract the files
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - For best results, use a local server:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click index.html → "Open with Live Server"
     ```

3. **Access the website**
   - Direct file: `file:///path/to/theaahanpathak-website/index.html`
   - Local server: `http://localhost:8000`

## 📸 Adding New Content

### Adding Photos to Gallery

1. **Prepare your images**
   - Recommended size: 800x600 pixels or larger
   - Supported formats: JPG, PNG, WebP
   - Optimize for web (compress to reduce file size)

2. **Add images to the images folder**
   ```bash
   theaahanpathak-website/images/
   ├── academic/
   │   ├── achievement1.jpg
   │   └── school-award.jpg
   ├── tennis/
   │   ├── practice1.jpg
   │   └── tournament.jpg
   ├── swimming/
   │   └── pool-training.jpg
   └── running/
       └── school-race.jpg
   ```

3. **Update the gallery in index.html**
   - Find the `gallery-grid` section
   - Add new gallery items following this template:
   ```html
   <div class="gallery-item" data-category="tennis">
       <div class="gallery-placeholder tennis-placeholder">
           <img src="images/tennis/your-photo.jpg" alt="Description" style="width: 100%; height: 100%; object-fit: cover;">
       </div>
       <div class="gallery-info">
           <h4>Photo Title</h4>
           <p>Description of the photo</p>
           <span class="gallery-date">Month Year</span>
           <div class="gallery-tags">
               <span class="tag tennis-tag">Tennis</span>
           </div>
       </div>
   </div>
   ```

### Adding Videos to Gallery

1. **Prepare your videos**
   - Recommended formats: MP4, WebM
   - Compress for web delivery
   - Create thumbnail images for video previews

2. **Add videos to the videos folder**
   ```bash
   theaahanpathak-website/videos/
   ├── tennis-highlights.mp4
   ├── swimming-practice.mp4
   └── running-race.mp4
   ```

3. **Add video items to gallery**
   ```html
   <div class="gallery-item" data-category="videos">
       <div class="gallery-placeholder video-placeholder">
           <video width="100%" height="200" controls poster="images/video-thumbnail.jpg">
               <source src="videos/your-video.mp4" type="video/mp4">
               Your browser does not support the video tag.
           </video>
       </div>
       <div class="gallery-info">
           <h4>Video Title</h4>
           <p>Description of the video</p>
           <span class="gallery-date">Month Year</span>
           <div class="gallery-tags">
               <span class="tag video-tag">Video</span>
           </div>
       </div>
   </div>
   ```

## 🏆 Updating Achievements

To add new achievements:

1. **Find the achievements section** in `index.html`
2. **Add a new achievement card**:
   ```html
   <div class="achievement-card">
       <div class="achievement-icon">🎯</div>
       <h3>New Achievement Title</h3>
       <p>Description of the achievement</p>
   </div>
   ```

## 🎠 Modifying Slideshow Content

To update the hero slideshow:

1. **Find the slideshow section** in `index.html`
2. **Modify slide content**:
   ```html
   <div class="slide slide-academic">
       <div class="slide-content">
           <div class="emoji">📚</div>
           <h2>Your New Title</h2>
           <p>Your new description</p>
       </div>
   </div>
   ```

3. **Update slide indicators** if you add/remove slides:
   - Add/remove `<span class="dot">` elements
   - Update JavaScript if changing the number of slides

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `theaahanpathak-website` folder
3. Your site will be live instantly
4. Optional: Connect a custom domain like `theaahanpathak.com`

### Option 2: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import the project folder
3. Deploy with one click

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Site will be available at `username.github.io/repository-name`

### Option 4: Traditional Web Hosting
1. Purchase hosting from providers like:
   - Bluehost, SiteGround, HostGator
   - GoDaddy, Namecheap
2. Upload files via FTP or hosting control panel
3. Point domain to hosting

## 📱 Social Media Integration

### Connecting Real Social Media Accounts

1. **Update social media links** in `index.html`:
   ```html
   <!-- Replace # with actual URLs -->
   <a href="https://youtube.com/@aahanpathak" class="social-btn youtube">📺 YouTube</a>
   <a href="https://tiktok.com/@aahanpathak" class="social-btn tiktok">🎵 TikTok</a>
   <a href="https://instagram.com/aahanpathak" class="social-btn instagram">📸 Instagram</a>
   ```

2. **Update footer social icons**:
   ```html
   <div class="social-icons">
       <a href="https://youtube.com/@aahanpathak" aria-label="YouTube">📺</a>
       <a href="https://tiktok.com/@aahanpathak" aria-label="TikTok">🎵</a>
       <a href="https://instagram.com/aahanpathak" aria-label="Instagram">📸</a>
   </div>
   ```

## 🎨 Customization Guide

### Changing Colors
The website uses CSS custom properties for easy color changes:

```css
:root {
    --primary-blue: #1e3c72;
    --secondary-blue: #2a5298;
    --tennis-green: #4CAF50;
    --swimming-teal: #00BCD4;
    --running-orange: #FF9800;
    --academic-blue: #1976d2;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add navigation link in header
4. Update smooth scrolling JavaScript if needed

### Modifying Animations
- Slideshow timing: Change `5000` (5 seconds) in `script.js`
- Animation durations: Modify CSS transition values
- Scroll animations: Adjust threshold values in JavaScript

## 🔧 Technical Details

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Performance Features
- Optimized CSS with efficient selectors
- Lazy loading animations
- Smooth hardware-accelerated transitions
- Mobile-first responsive design
- Semantic HTML for SEO

### Accessibility Features
- Semantic HTML structure
- Alt text for images
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors

## 📋 Maintenance Checklist

### Monthly Updates
- [ ] Add new photos to gallery
- [ ] Update achievements section
- [ ] Check all links are working
- [ ] Review and update content

### Quarterly Updates
- [ ] Update academic achievements
- [ ] Add new sports milestones
- [ ] Review and optimize images
- [ ] Check website performance

### Annual Updates
- [ ] Update copyright year
- [ ] Refresh overall content
- [ ] Consider design updates
- [ ] Review and update goals

## 🆘 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify image file extensions match HTML

**Mobile menu not working:**
- Check JavaScript is loading
- Verify CSS classes are applied correctly
- Test on different devices

**Gallery filter not working:**
- Ensure JavaScript is loaded
- Check `data-category` attributes match filter buttons
- Verify CSS display properties

**Slideshow not advancing:**
- Check JavaScript console for errors
- Verify slide elements have correct classes
- Test manual navigation first

### Getting Help
- Check browser developer tools for errors
- Verify all files are uploaded correctly
- Test on different browsers and devices

## 📞 Support

For technical issues or questions about updating the website:
1. Check this README first
2. Review browser developer console for errors
3. Test changes on a local copy before deploying
4. Keep backups of working versions

---

**Built with ❤️ for Aahan Pathak - Future Champion**

*Last updated: September 2024*