class Element {
  constructor(tag, className, textContent) {
    this.tag = tag;
    this.className = className;
    this.textContent = textContent;
  }

  createElement() {
    let el = document.createElement(this.tag);
    el.textContent = this.textContent;

    if (this.className !== null) {
      el.classList.add(this.className);
    }

    return el;
  }
}

class Image extends Element {
  constructor(tag, className, textContent, imageSource) {
    super(tag, className, textContent);
    this.imageSource = imageSource
  }

  createElement() {
    let el = document.createElement(this.tag);
    el.textContent = this.textContent;

    if (this.className !== null) {
      el.classList.add(this.className);
    }

    el.src = this.imageSource;

    return el;
  }
}

export { Element, Image };
