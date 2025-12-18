# Vincent Ngunjiri - Creative Graphics Designer Portfolio

A creative and innovative portfolio website for Vincent Ngunjiri, a graphics designer, built with HTML, CSS, and JavaScript.

## Features

- Responsive design
- Smooth scrolling navigation
- Interactive gallery with lightbox
- Scroll animations
- Dynamic background effects
- Contact form with EmailJS integration
- Typewriter hero title
- Floating animations and creative backgrounds

## Setup

1. Clone or download the project.
2. Open `index.html` in a web browser.
3. Replace placeholder images in `images/` with your actual designs (design1.jpg to design4.jpg) if you prefer images over icons, or keep the icons as is.
4. Add a favicon.ico to `images/` for the browser tab icon.
5. Update social links in the footer with your actual profiles.

## Contact Form Setup

The contact form uses EmailJS to send emails directly from the browser.

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create a new email service (e.g., Gmail).
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`.
4. In `js/script.js`, replace:
   - `"YOUR_PUBLIC_KEY"` with your EmailJS public key.
   - `"YOUR_SERVICE_ID"` with your service ID.
   - `"YOUR_TEMPLATE_ID"` with your template ID.
5. Test the form to ensure emails are sent to vincentsofficia0l1@gmail.com.

## Deployment

This is a static website, so you can deploy it to any static hosting service:

- **GitHub Pages**: Push to a GitHub repo and enable Pages.
- **Netlify**: Drag and drop the folder or connect via Git.
- **Vercel**: Similar to Netlify.
- **Firebase Hosting**: Use Firebase CLI to deploy.

Ensure all image files are added before deploying.

## Customization

- Modify colors, fonts, and layouts in `css/style.css`.
- Add more interactive features in `js/script.js`.
- Update personal information in `index.html`.

## Browser Support

Works in modern browsers. For older browsers, consider adding polyfills.

## License

Feel free to use and modify as needed.