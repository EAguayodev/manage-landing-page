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

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [](github)
- Live Site URL: [https://manage-landing-page-three-psi.vercel.app/](vercel)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Desktop-first workflow

### What I learned



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



### Useful resources

- [](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here]()
- Frontend Mentor - [@yourusername]()

## Acknowledgments
