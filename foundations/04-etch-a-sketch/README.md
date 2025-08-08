<h1 align="center">
  Etch-a-Sketch
</h1>

<h4 align="center">Draw on a grid of pixels, with three different drawing modes</h4>
<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%232965F1.svg?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F0DB4F.svg?style=flat&logo=html5&logoColor=black)

</div>

## 🚀 Live Site

The live site can be viewed [here](https://etch-a-sketch-indol-xi.vercel.app//).

## 📝 Project Description

In this project, I built an etch-a-sketch project that has three different drawing modes.

By default, the grid will be 64x64. However, the user can reset the grid by clicking the Reset button on the top left. Furthermore, there are buttons for the drawing modes specified on the top right. A green border will surround the button if it is active (when clicked). Based on the active mode, drawing on the grid will yield a different result.

By default, the normal mode is active wherein hovering over the pixels will turn them black. The second mode will randomly color the pixels. Lastly, the third mode will gradually darken uncolored pixels while leaving black and colored pixels as is. A link to the project description can be found [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

## 💡 Learnings

Doing this project taught me a lot about DOM manipulation. It was really valuable being able to familiarize with all of the available properties that you can use to manipulate DOM elements. Admittedly, I took way too much time trying to figure out how to _remove_ the grid and _add_ a new grid. Then, it hit me. Instead of removing the grid, I could just clear all of the children (squares) inside by setting the `innerHTML` to `''`. So, I don't even have to remove the grid, just the children. I completely forgot that the `innerHTML` property even existed for a solid 30 minutes!

I also had an epiphany about setting up the grid squares with flexbox. I probably spent a solid hour on trying to come up with an algorithm to have each square be the perfect size that fits the grid, such that there is no white space and all squares have proportionate size. This is when I realized I could've just used `flex: 1 0 auto` on each flex item so that it covers the white space that is caused on the right side of the container. Then I used `aspect-ratio: 1 / 1` to keep the width and height the same!
