# Personal Portfolio Website

## Overview
This is a responsive personal portfolio website showcasing my skills as a web developer. The website includes five main sections: Home, About Me, Projects, Contact, and a Survey page.

## Features Implemented

### HTML Features
- Semantic HTML5 structure with proper DOCTYPE
- SEO-optimized meta tags (description, keywords, author)
- Proper use of block-level and inline elements
- Lists (ordered, unordered, and nested) in the About section
- Images with alt text and various link types
- Image map on profile picture
- Iframe for YouTube video and Google Map
- Comprehensive survey form with various input types

### CSS Features
- External, internal (justified for print styles), and inline (minimal) CSS
- Various selectors including pseudo-classes
- Responsive design with media queries
- 2-column layout for About page and 3-column grid for Projects
- Styled navigation bars (horizontal and vertical)
- Print-specific styles for resume section
- Advanced positioning and z-index usage
- Dark/light mode theme switching

### JavaScript Features
- Time-based greeting on page load
- Form validation with regex patterns
- Dark/light mode theme toggle
- Dynamic content manipulation (show/hide project details)
- DOM element access and updates
- Event listeners for various interactions

## Challenges and Solutions

1. **Responsive Design Challenges**:
   - Initially had issues with the navigation bar on mobile devices.
   - Solved by implementing a flexbox layout with column direction on smaller screens.

2. **Form Validation**:
   - Complex validation rules for email and phone formats.
   - Implemented regex patterns and custom error messages for better UX.

3. **Dark/Light Mode Persistence**:
   - Needed to remember user preference across pages.
   - Used localStorage to save the theme preference and implemented media query detection for initial load.

4. **Project Details Toggle**:
   - Wanted smooth animations for showing/hiding details.
   - Initially tried with height transitions but settled for a simpler display toggle due to complexity.

## Tools Used
- Visual Studio Code (primary code editor)
- Chrome DevTools (for debugging and testing)
- W3C Validator (for HTML/CSS validation)
- GitHub Pages (for deployment)
- Adobe Photoshop (for image optimization)

## How to Run
1. Clone the repository or download the ZIP file
2. Open `index.html` in any modern web browser
3. Alternatively, visit the live demo at [GitHub Pages URL]

## Validation
All HTML and CSS files have been validated using the W3C Validator with no critical errors.