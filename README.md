# Frontend Mentor - Manage landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [](github)
- Live Site URL: [https://manage-landing-page-three-psi.vercel.app/](vercel)

## My process
✅ HTML Structure
I started with a clean, semantic HTML layout to ensure accessibility and maintainability.

Each section of the landing page (hero, features, testimonials, call to action, footer) was properly structured with appropriate tags and class naming for scalable styling.

The testimonial and subscription form areas were given additional structure to support dynamic behavior via JavaScript.

🎨 CSS for Responsive Design
I wrote modular CSS using a mobile-first approach and media queries to scale layouts for tablet and desktop.

Flexbox and CSS Grid were used to manage content alignment and layout structure across breakpoints.

I focused on spacing, typography, and consistent color use to match the design spec and provide a clean visual hierarchy.

Hover and active states were styled for better UX on interactive elements like buttons and navigation.

📱 JavaScript Interactivity
Mobile Menu Toggle: I added functionality to open and close the mobile navigation menu by clicking the hamburger icon. The script toggles classes that reveal or hide the nav links based on user interaction.

Testimonial Slider (Mobile View): I created an interactive testimonial slider for mobile users where each circle at the bottom acts as a navigation control. When clicked, the corresponding testimonial becomes visible while hiding the others. This was managed by:

Listening for click events on the circle buttons

Toggling the active class on both the testimonial card and button

Form Validation (Email Input): For the newsletter subscription form, I implemented client-side validation that:

Checks if the email field is empty or not in a valid format

Displays an error message with a red border and icon when invalid

Clears the error on successful validation or when the input is corrected

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Desktop-first workflow

### What I learned
Most of the challenge was a breeze to get through, yet the part where I learned the most and challenged on was creating the javascript functionality for the testimonial displays on mobile devices, and having the user being able to select the one they wanted to view.


To see how you can add code snippets, see below:

```html
 <form id="form" onclick="validateEmail()">
   <input id="email-submission" type="email"  placeholder="Updates in your inbox…" />
   <button class="btn btn-footer" onclick="checkEmail()" id="btn-go">Go</button>
   <p id="error-text"></p>
 </form>
```
```css
.hero {
  background-image: url(../images/bg-tablet-pattern.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 690px -130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
}
```
```js
const testimonials = document.querySelectorAll(".testimonial-card");
const buttons = document.querySelectorAll(".circle-button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    testimonials.forEach((t) => t.classList.remove("active"));
    buttons.forEach((b) => b.classList.remove("active"));
    testimonials[index].classList.add("active");
    btn.classList.add("active");
  });
});
```


### Continued development
Will continue completing the rest of the junior and intermediate challenges and start applying some challenges for myself using a js framework of my choice to challenge myself going forward. I will switch between a js framework and using vanilla js depending on the scope of the challenges needs.

### Useful resources

- [forfrontend](https://forfrontend.com/css-testimonial-sliders/) - The forfrontend website helped me with getting ideas for figuring out how to choose the behavior for the mobile testimonial displays. The code pen example done by Aashima Jain helped the best with getting the layout and behavior towards what I was looking for during this challenge.
- [getbootstrapcarousel](https://getbootstrap.com/docs/5.0/components/carousel/) - Bootstrap resource got me the layout for the html needed for structuring the testimonial cards to adapt to the device screens.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)

## Acknowledgments
Acknowledgments go to the front end mentor platform for providing this challenge for myself to take on. I also want to give acknowledgments to Aashima Jain for the codepen code which helped with the mobile layout idea for the testimonials.