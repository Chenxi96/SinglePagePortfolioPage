# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![](./public/dashing-rabanadas-da0ebd.netlify.app_%20(1).png)


### Links

- Solution URL: [github](https://github.com/Chenxi96/SinglePagePortfolioPage)
- Live Site URL: (https://dashing-rabanadas-da0ebd.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned to put images into the parent background and add mutiple images into it. I learned how to use grid with repeat and minMax().

see below:

```html
<main id="root"></main>
```
```css
#root {
  position: relative;
  width: 100%;
  background-image: url('./assets/images/pattern-rings.svg'), url('./assets/images/pattern-rings.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: top 124px left -21.5rem, top 1287px right -344px;
  overflow: hidden;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [background image property](https://www.w3schools.com/csSref/pr_background-position.php) - This helped me place rings throughout the site as per design.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Chenxi96](https://www.frontendmentor.io/profile/Chenxi96)
- Twitter - [@Chenxi_Lin_](https://www.twitter.com/Chenxi_Lin_)
