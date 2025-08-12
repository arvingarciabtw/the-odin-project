<h1 align="center">
  Sign-up Form
  <h4 align="center">A simple sign-up form built with HTML and CSS</h4>
</h1>

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%232965F1.svg?style=flat&logo=html5&logoColor=white)

</div>

## 🚀 Live Site

The live site can be viewed [here](https://sign-up-form-beta-eight.vercel.app/).

## 📝 Project Description

This project involved creating a sign-up form similar to the design that can be found [here](https://cdn.statically.io/gh/TheOdinProject/curriculum/afdbabfab03fbc34783c6b6f3920aba4a4d3b935/intermediate_html_css/forms/project_sign_up_form/imgs/sign-up-form.png). The purpose of this project is to test the intermediate HTML and CSS skills that I have learned so far, forms in particular. While the project allowed for slight customization, I didn't change much of the design (just the image, font choice, and color choices).

## 💡 Learnings

For this project, I practiced the use of [Emmet](https://emmet.io/), and it was very useful in speeding up the process of writing HTML markup, particularly the boilerplate. There was a lot of intermediate CSS concepts mentioned prior to doing this project, so it was a great opportunity to use them all.

I personally used [Josh Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) for this project. As for CSS units, `rem` was utilized a lot for margins, paddings, and font-sizes. The lesson provided a font to use, so this was also a good chance to practice using a self hosted font by using the `@font-face` rule. Another thing, if you take a look at my CSS, I used a lot of the selectors that were mentioned in the previous lessons like `>` and `+`.

Apart from those, this project was also an opportunity to practice positioning! To achieve the layout in the left section of the design, I gave the parent container `position: relative`, while the children had `position: absolute`. I also defined some custom properties for the colors I used throughout the project. Admittedly, I didn't use much of CSS functions like `min()`, `max()`, and `clamp()`. Hopefully, I use these functions more in future projects.

And of course, since this a sign-up form project, I also learned a lot about forms. It was quite fun and valuable structuring the form and styling it as needed (giving a red border for invalid inputs, a blue border when input is in focus). I also got to practice specifying a pattern for an input (through the phone number field). For the submit button, I actually took the approach of having it outside of the form, and then associating it to the form through the `form` attribute. I already structured my markup to have the form be in the second section of the right side of the page, so I took this approach instead of having the submit button be inside.

Looking forward to proceed and learn about grid!

## 📸 Image Credits

- [Image](https://unsplash.com/photos/a-green-abstract-background-with-wavy-shapes-ciN8mnrlvFY) by Apurv Das
